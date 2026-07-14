import java.time.Duration;
import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

public class RateLimiter {
    private final Integer maxRequest;
    private Queue<LocalDateTime>  queue = new PriorityQueue<>((a,b)->a.compareTo(b));

    RateLimiter(Integer maxRequest){
            this.maxRequest = maxRequest;
    }
    public void removeExpireRequest(){
        while (!queue.isEmpty()) {
            LocalDateTime top = queue.peek();
            if(Duration.between(top,LocalDateTime.now()).toSeconds() >= 60){
                queue.poll();
            }else{
                break;
            }
        }
    }
    public synchronized boolean allowRequest(){
        removeExpireRequest();
        if(queue.size() < maxRequest){
            queue.add(LocalDateTime.now());
            return true;
        }else{
           return false;
        }
    }

    public static void main(String[] args) {
        RateLimiter rateLimiter = new RateLimiter(2);
        int num = 1;
        while (num < 10) {
            System.out.println(rateLimiter.allowRequest());
            num++;
        }
    }

}
