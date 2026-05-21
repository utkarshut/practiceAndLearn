package Logger;

import java.util.List;

public interface LogStore {
    void save(LogEntry entry);
    List<LogEntry> getAll();
    List<LogEntry> filter(LogFilter filter);
}
