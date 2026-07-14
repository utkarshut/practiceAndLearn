import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;

public class SlidingWindowRateLimiter {

    static class  RateLimiter {
        Integer maxLimit = 0;
        Queue<LocalDateTime> queue = new PriorityQueue<>(
            (a,b)-> a.compareTo(b)
        );

        RateLimiter(Integer maxLimit){
            this.maxLimit = maxLimit;
        }
        
        private void cleanUpExpired(){
            while (!queue.isEmpty() && Duration.between(queue.peek(), 
                LocalDateTime.now()).toSeconds() > 60 ) {
                queue.poll();
            }
        }
        public boolean allowRequest(){
            this.cleanUpExpired();
            if(queue.size()>= this.maxLimit){
                return false;
            }
            queue.offer(LocalDateTime.now());
            return true;
        }
        // if time within 60 sec add item in queue
        // keep only those in queue which are less than 60
        // else remove from queue expired one
        
    }
    public static void callAPI(Integer i){
        System.out.println(i+1+" Call API");
    }
    public static void main(String[] args) {
        RateLimiter rateLimiter = new RateLimiter(10);

        for(int i=0;i<13; i++){
          if(rateLimiter.allowRequest()){
           callAPI(i);
          }else{
           System.out.println("BLocked 429");
          }
        }
    }
}
