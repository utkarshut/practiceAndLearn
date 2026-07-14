import java.util.HashMap;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class OrderService {
    private static ConcurrentHashMap<Integer, String> orderStatus = new ConcurrentHashMap<>();

    static class OrderProcessingService {
        private AtomicInteger totalOrder = new AtomicInteger(0);

        public void validateOrder(Integer orderId) {
            try {
                // Thread.sleep(1000);
                System.out.println(orderId + Thread.currentThread().getName() + " Validation Complete");
            } catch (Exception exception) {
            }
        }

        public void saveOrder(Integer orderId) {
            try {
                // Thread.sleep(1000);
                System.out.println(orderId + Thread.currentThread().getName() + " Save Complete");
            } catch (Exception exception) {
            }
        }

        public void sendEmail(Integer orderId) {
            try {
                // Thread.sleep(1000);
                System.out.println(orderId + Thread.currentThread().getName() + " Mail Sent");
            } catch (Exception exception) {
            }
        }

        public void sendSms(Integer orderId) {
            try {
                // Thread.sleep(1000);
                System.out.println(orderId + Thread.currentThread().getName() + " Message Sent");
            } catch (Exception exception) {
            }
        }

        public void processOrder(Integer orderId) {

            totalOrder.incrementAndGet();
            orderStatus.put(orderId, "SUCCESS");
            System.out.println(
                    "Processed Order "
                            + orderId
                            + " Total="
                            + totalOrder.get());
        }

    }

    public static void main(String[] args) {
        OrderProcessingService processOrder = new OrderProcessingService();
        ExecutorService executors = Executors.newFixedThreadPool(3);

        for (int i = 1; i <= 10000; i++) {
            int orderId = i;
            executors.submit(
                    () -> {
                        processOrder.validateOrder(orderId);
                        processOrder.saveOrder(orderId);
                        processOrder.processOrder(orderId);
                        CompletableFuture<String> emailFuture = CompletableFuture.supplyAsync(()->{
                           processOrder.sendEmail(orderId);
                           return "EMAIL SENT";
                        });
                        CompletableFuture<String> smsFuture = CompletableFuture.supplyAsync(()->{
                           processOrder.sendSms(orderId);
                           return "SMS SENT";
                        });
                        //CompletableFuture.allOf(emailFuture,smsFuture).join();
                        String messageEmail = emailFuture.join();
                        String messageSMS = smsFuture.join();
                        System.out.println(messageEmail+" "+messageSMS);
                    });
        }
        executors.shutdown();
        try {
            executors.awaitTermination(
                    1,
                    TimeUnit.MINUTES);
            System.out.println(
                    orderStatus.size());

        } catch (Exception e) {
            // TODO: handle exception
        }
    }
}
