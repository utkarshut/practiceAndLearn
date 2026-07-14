import java.util.*;

public class NetworkTimeline {

    static class Pair {
        int timestamp;
        boolean isOn;

        Pair(int timestamp, boolean isOn) {
            this.timestamp = timestamp;
            this.isOn = isOn;
        }
    }

    static class Event {
        int timestamp;
        int deviceId;
        boolean isOn;

        Event(int timestamp, int deviceId, boolean isOn) {
            this.timestamp = timestamp;
            this.deviceId = deviceId;
            this.isOn = isOn;
        }
    }

    static class NetworkStatus {
        int timestamp;
        boolean isOn;

        NetworkStatus(int timestamp, boolean isOn) {
            this.timestamp = timestamp;
            this.isOn = isOn;
        }

        @Override
        public String toString() {
            return timestamp + " " + (isOn ? "ON" : "OFF");
        }
    }

    public static List<NetworkStatus> getNetworkTimeline(
            List<List<Pair>> devices) {

        List<Event> events = new ArrayList<>();

        // Flatten all device timelines
        for (int deviceId = 0;
             deviceId < devices.size();
             deviceId++) {

            for (Pair p : devices.get(deviceId)) {

                events.add(
                    new Event(
                        p.timestamp,
                        deviceId,
                        p.isOn
                    )
                );
            }
        }

        // Sort by timestamp
        events.sort(
            Comparator.comparingInt(e -> e.timestamp)
        );

        Map<Integer, Boolean> deviceState =
                new HashMap<>();

        List<NetworkStatus> result =
                new ArrayList<>();

        Boolean previousNetworkState = null;

        int i = 0;

        while (i < events.size()) {

            int currentTimestamp =
                    events.get(i).timestamp;

            // Process ALL events of same timestamp
            while (i < events.size()
                    && events.get(i).timestamp
                    == currentTimestamp) {

                Event event = events.get(i);

                deviceState.put(
                        event.deviceId,
                        event.isOn
                );

                i++;
            }

            // Check if all devices are ON
            boolean allOn = true;

            for (int deviceId = 0;
                 deviceId < devices.size();
                 deviceId++) {

                Boolean state =
                        deviceState.get(deviceId);

                if (state == null || !state) {
                    allOn = false;
                    break;
                }
            }

            // Emit only on state change
            if (previousNetworkState == null
                    || previousNetworkState != allOn) {

                result.add(
                    new NetworkStatus(
                            currentTimestamp,
                            allOn
                    )
                );

                previousNetworkState = allOn;
            }
        }

        return result;
    }

    public static void main(String[] args) {

        List<Pair> d1 = Arrays.asList(
                new Pair(1, true),
                new Pair(3, false),
                new Pair(5, true),
                new Pair(9, true)
        );

        List<Pair> d2 = Arrays.asList(
                new Pair(2, true),
                new Pair(3, false),
                new Pair(4, true),
                new Pair(5, false),
                new Pair(8, true)
        );

        List<List<Pair>> devices =
                Arrays.asList(d1, d2);

        List<NetworkStatus> result =
                getNetworkTimeline(devices);

        result.forEach(System.out::println);
    }
}