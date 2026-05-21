package Logger;
import java.time.LocalDateTime;

public class LogEntry {
    private final LogLevel level;
    private final LocalDateTime timestamp;
    private final String message;
    LogEntry(LogLevel level, LocalDateTime timestamp, String message){
      this.level = level;
      this.message = message;
      this.timestamp = timestamp;
    }
    public LocalDateTime getLogDateTime() {
        return timestamp;
    }
    public String getLogMessage() {
        return message;
    }
    public LogLevel getLogLevel() {
        return level;
    }
    @Override
    public String toString() {
        return "[" + timestamp + "] [" + level + "] " + message;
    }
}
