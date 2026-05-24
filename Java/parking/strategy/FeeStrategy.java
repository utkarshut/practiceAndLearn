package parking.strategy;
import java.time.LocalDateTime;

public interface FeeStrategy {
    abstract Integer calculateFare( LocalDateTime entryTime,
            LocalDateTime exitTime);
}
