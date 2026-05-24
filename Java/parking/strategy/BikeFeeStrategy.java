package parking.strategy;

import java.time.Duration;
import java.time.LocalDateTime;

public class BikeFeeStrategy implements FeeStrategy {

    @Override
    public Integer calculateFare(LocalDateTime entryTime, LocalDateTime exitTime) {
        long hours = Math.max(1,Duration.between(entryTime, exitTime).toHours());
        return (int) (50 * hours);
    }
    
}
