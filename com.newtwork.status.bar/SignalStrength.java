import java.util.LinkedList;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

public class SignalStrength {
    static class SignalTracker {
        int latestSignal;
        // Queue capacity depends on expected throughput and processing latency.
        // Maximum 100 signals can wait in memory before consumer processes them.
        ArrayBlockingQueue<Integer> queue = new ArrayBlockingQueue<>(100);
        int maxCount;
        Queue<Integer> slidingWindow = new LinkedList<>();
        int sum;

        SignalTracker(int previousSignalCount) {
            maxCount = previousSignalCount;
        }

        public void updateSignal(int signal) {
            if (signal < 0 || signal > 100) {
                throw new IllegalArgumentException("Invalid Signal");
            }
            if (slidingWindow.size() == maxCount) {
                sum -= slidingWindow.poll();
            }
            slidingWindow.offer(signal);
            sum += signal;
        }

        public int getAverageBar() {
            this.latestSignal = sum / slidingWindow.size();
            return sum / slidingWindow.size();
        }

        public int currentBars() {
            if (this.latestSignal <= 20) {
                return 0;
            } else if (this.latestSignal <= 40) {
                return 1;
            } else if (this.latestSignal <= 60) {
                return 2;
            } else if (this.latestSignal <= 80) {
                return 3;
            } else {
                return 4;
            }
        }

        // Consumer
        public void consumeSignal()
                throws InterruptedException {

            while (true) {

                int signal = queue.take();

                updateSignal(signal);

                System.out.println(
                        "Consumed: "
                                + signal
                                + " Avg="
                                + getAverageBar()
                                + " Bars="
                                + currentBars());
            }
        }

        // Producer
        public void produceSignal(int signal)
                throws InterruptedException {

            queue.put(signal);

            System.out.println(
                    "Produced: " + signal);
        }

    }

    public static void main(String[] args) {
        SignalTracker sTracker = new SignalTracker(5);
        int[] stream = {
                12, 45, 87, 65
        };
        for (int i = 0; i < stream.length; i++) {
            // sTracker.updateSignal(stream[i]);

        }
        // consumer
        Thread consumer = new Thread(() -> {
            try {
                sTracker.consumeSignal();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        consumer.start();

        // producer
        Thread producer = new Thread(
                () -> {
                    int[] input = {
                            12, 45, 87, 65
                    };
                    for (int signal : input) {

                        try {
                            sTracker.produceSignal(signal);
                            Thread.sleep(1000);
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }

                    }
                });
        producer.start();
        sTracker.getAverageBar();
    }
}
