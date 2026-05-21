package Logger;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class InMemoryLogStore implements LogStore{
    // Simple list to store all logs
    private final List<LogEntry> logs = new ArrayList<>();

    @Override
    public void save(LogEntry entry) {
         logs.add(entry);
    }

    @Override
    public List<LogEntry> getAll() {
         return new ArrayList<>(logs); // return copy, not original
    }

    @Override
    public List<LogEntry> filter(LogFilter filter) {
        
        return logs.stream()
                    .filter(log -> 
                            filter.getLevel() == null ||
                            log.getLogLevel() == filter.getLevel()
                        )
                    .filter(log ->
                            filter.getFromTime() == null ||
                            log.getLogDateTime().isAfter(filter.getFromTime())
                    )
                    .filter(log ->
                            filter.getToTime() == null ||
                            log.getLogDateTime().isBefore(filter.getToTime())
                    )                 
                    .collect(Collectors.toList());
    }
}
