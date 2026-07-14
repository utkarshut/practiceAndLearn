import java.time.Duration;
import java.time.LocalDateTime;
import java.util.concurrent.TimeUnit;

public class RateLimiter {

    static class RateLimit {
        private Integer slidingWindowCounter;
        private LocalDateTime lastWindowTime;

        RateLimit(){
            this.slidingWindowCounter=0;
            this.lastWindowTime = LocalDateTime.now().minusSeconds(20);
        }

        public void resetCounter() {
            slidingWindowCounter = 1;
        }

        public void incrementCounter() {
            slidingWindowCounter += 1;
        }

        public Integer getSlidingWindowCounter() {
            return slidingWindowCounter;
        }

        public void setSlidingWindowCounter(Integer slidingWindowCounter) {
            this.slidingWindowCounter = slidingWindowCounter;
        }

        public LocalDateTime getLastWindowTime() {
            return lastWindowTime;
        }

        public void setLastWindowTime(LocalDateTime lastWindowTime) {
            this.lastWindowTime = lastWindowTime;
        }

    }

    static class RateLimitService {
        RateLimit rateLimit;
        Integer maxLimit;

        RateLimitService(Integer maxLimit) {
            rateLimit = new RateLimit();
            this.maxLimit = maxLimit;
        }

        public void updateRateCounter() {
            LocalDateTime now = LocalDateTime.now();
            if (Duration.between(rateLimit.getLastWindowTime(),now).toSeconds() > 59
             ) {
                rateLimit.resetCounter();
            } else {
                rateLimit.incrementCounter();
            }
        }

        public boolean isRateLimitAllowed() {
            return rateLimit.getSlidingWindowCounter() < this.maxLimit ? true : false;
        }
    }
    private static void callAPI(Integer i){
         System.out.println(i+ " API CALLED");
    }
    public static void main(String[] args) {
        RateLimitService service = new RateLimitService(10);
        for(int i=0; i < 12; i++){
            if(service.isRateLimitAllowed()){
                service.updateRateCounter();
                callAPI(i+1);
            }else{
                System.out.println("LIMIT REACHED 429");
            }
        }
    }
}
