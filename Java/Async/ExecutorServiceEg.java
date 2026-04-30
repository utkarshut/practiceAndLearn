import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ExecutorServiceEg {
    static void callPrint() {
        ExecutorService executorService = Executors.newFixedThreadPool(5);
        
        for (int i = 0; i < 5; i++) {
            final int val = i;
            executorService.submit(() -> {
                try {
                    // Simulate work
                    Thread.sleep(100);
                    System.out.println("Task " + val + " finished");
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }

        // 1. Stop accepting new tasks
        executorService.shutdown();
        
        try {
            // 2. Wait a specific time for existing tasks to finish
            if (!executorService.awaitTermination(5, TimeUnit.SECONDS)) {
                // 3. If they don't finish, force them to stop
                executorService.shutdownNow();
            }
        } catch (InterruptedException e) {
            executorService.shutdownNow();
        }
    }

    public static void main(String[] args) {
        callPrint();
        System.out.println("All tasks done or timed out.");
    }
}