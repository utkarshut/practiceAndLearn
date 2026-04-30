import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class AsyncExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        // 1. Start an async task
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            // This runs in a separate thread
            return "Hello, ";
        }, executor);
        
        // 2. Chain another task (non-blocking)
        future.thenApply(s -> s + "Async World!")
        
        // 3. Finally, do something with the result
        .thenAccept(System.out::println);

        System.out.println("Main thread is free to do other things!");

        // Graceful shutdown
        executor.shutdown();
    }
}