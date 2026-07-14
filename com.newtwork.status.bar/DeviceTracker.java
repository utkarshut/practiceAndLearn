import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

public class DeviceTracker {

    enum DeviceStatus {
        ONLINE, OFFLINE
    }

    static class Device {
        private Integer deviceId;
        private String deviceName;
        private DeviceStatus deviceStatus;
        private LocalDateTime lastLogDateTime;
        private LocalDateTime latestExpiryTime;

        public LocalDateTime getLatestExpiryTime() {
            return latestExpiryTime;
        }

        public void setLatestExpiryTime(LocalDateTime latestExpiryTime) {
            this.latestExpiryTime = latestExpiryTime;
        }

        public Integer getDeviceId() {
            return deviceId;
        }

        public void setDeviceId(Integer deviceId) {
            this.deviceId = deviceId;
        }

        public String getDeviceName() {
            return deviceName;
        }

        public void setDeviceName(String deviceName) {
            this.deviceName = deviceName;
        }

        public DeviceStatus getDeviceStatus() {
            return deviceStatus;
        }

        public void setDeviceStatus(DeviceStatus deviceStatus) {
            this.deviceStatus = deviceStatus;
        }

        public LocalDateTime getLastLogDateTime() {
            return lastLogDateTime;
        }

        public void setLastLogDateTime(LocalDateTime lastLogDateTime) {
            this.lastLogDateTime = lastLogDateTime;
        }

        public Device(Integer deviceId, String deviceName) {
            this.deviceId = deviceId;
            this.deviceName = deviceName;
        }
    }

    static class DeviceExpiry {
        Integer deviceId;
        LocalDateTime expiryTime;

        public Integer getDeviceId() {
            return deviceId;
        }

        public void setDeviceId(Integer deviceId) {
            this.deviceId = deviceId;
        }

        public LocalDateTime getExpiryTime() {
            return expiryTime;
        }

        public void setExpiryTime(LocalDateTime expiryTime) {
            this.expiryTime = expiryTime;
        }

        public DeviceExpiry(Integer deviceId, LocalDateTime expiryTime) {
            this.deviceId = deviceId;
            this.expiryTime = expiryTime;
        }
    }

    static class StatusEvent {
        Integer deviceId;
        DeviceStatus deviceStatus;

        public Integer getDeviceId() {
            return deviceId;
        }

        public DeviceStatus getDeviceStatus() {
            return deviceStatus;
        }

        public StatusEvent(Integer deviceId, DeviceTracker.DeviceStatus deviceStatus) {
            this.deviceId = deviceId;
            this.deviceStatus = deviceStatus;
        }

    }

    static class DeviceTrackerService {
        Map<Integer, Device> deviceMap;
        Set<Integer> activeRoutersSet = ConcurrentHashMap.newKeySet();
        PriorityQueue<DeviceExpiry> expiryQueue = new PriorityQueue<>(
                (a, b) -> a.getExpiryTime()
                        .compareTo(b.getExpiryTime()));

        DeviceTrackerService(List<Device> devices) {
            this.deviceMap = new HashMap<>();
            this.deviceMap = devices.stream()
                    .collect(Collectors.toMap(
                            Device -> Device.getDeviceId(),
                            Device -> Device));
        }

        public void updateDeviceStatus(StatusEvent statusEvent) {
            Integer deviceId = statusEvent.getDeviceId();
            DeviceStatus status = statusEvent.getDeviceStatus();
            Device currentDevice = this.deviceMap.get(deviceId);
            currentDevice.setDeviceStatus(status);
            currentDevice.setLastLogDateTime(LocalDateTime.now());
            LocalDateTime expiryTime = LocalDateTime.now()
                    .plusSeconds(5);
            currentDevice.setLatestExpiryTime(expiryTime);
            expiryQueue.offer(
                    new DeviceExpiry(deviceId, expiryTime));

            if (status.equals(DeviceStatus.ONLINE)) {
                this.activeRoutersSet.add(deviceId);
            } else {
                this.activeRoutersSet.remove(deviceId);
            }
            System.out.println(
                    "Set Device Status For " + deviceId + " "
                            + statusEvent.getDeviceStatus());
        }

        public int getActiveDeviceCount() {
            return this.activeRoutersSet.size();
        }

        public void checkHeartBeat() {
            while (!expiryQueue.isEmpty()) {
                System.out.println(
                        "Current Active device "+
                          this.getActiveDeviceCount()+
                        " Checking Heart beat " +
                                expiryQueue.peek().getDeviceId() + " " +
                                expiryQueue.peek().getExpiryTime());
                LocalDateTime now = LocalDateTime.now();
                if (expiryQueue.peek().getExpiryTime().isAfter(now)) {
                    break;
                }
                DeviceExpiry deviceExpiry = expiryQueue.poll();
                if (deviceExpiry.getExpiryTime().equals(
                        this.deviceMap.get(deviceExpiry.getDeviceId()).getLatestExpiryTime())) {
                    this.deviceMap.get(deviceExpiry.getDeviceId()).setDeviceStatus(DeviceStatus.OFFLINE);
                    activeRoutersSet.remove(deviceExpiry.getDeviceId());
                }
            }
        }
    }

    public static void main(String[] args) {
        List<Device> devices = new ArrayList<>();
        devices.add(new Device(1, "Device1"));
        devices.add(new Device(2, "Device2"));
        devices.add(new Device(3, "Device3"));
        devices.add(new Device(4, "Device4"));
        devices.add(new Device(5, "Device5"));
        devices.add(new Device(6, "Device6"));
        devices.add(new Device(7, "Device7"));

        List<StatusEvent> statusEvents = new ArrayList<>();
        statusEvents.add(new StatusEvent(1, DeviceStatus.ONLINE));
        statusEvents.add(new StatusEvent(3, DeviceStatus.OFFLINE));
        statusEvents.add(new StatusEvent(2, DeviceStatus.OFFLINE));
        statusEvents.add(new StatusEvent(4, DeviceStatus.ONLINE));
        statusEvents.add(new StatusEvent(4, DeviceStatus.OFFLINE));
        statusEvents.add(new StatusEvent(3, DeviceStatus.ONLINE));
        statusEvents.add(new StatusEvent(5, DeviceStatus.OFFLINE));
        statusEvents.add(new StatusEvent(1, DeviceStatus.OFFLINE));

        DeviceTrackerService service = new DeviceTrackerService(devices);
        statusEvents.forEach((statusEvent) -> {
            service.updateDeviceStatus(statusEvent);
        });

        System.out.println(service.getActiveDeviceCount());

        try (ScheduledExecutorService executorService = new ScheduledThreadPoolExecutor(1)) {
            Runnable task = () -> {
                service.checkHeartBeat();
            };
            try{
            executorService.scheduleAtFixedRate(task, 0, 2, TimeUnit.SECONDS);
              Thread.sleep(120000);
            }
            catch(Exception e){

            }finally{
                executorService.shutdown();
            }
        }
    }
}
