package Logger;

import java.time.LocalDateTime;
import java.util.List;

class Logger {
    // Singleton instance
    private static Logger instance;

    private final LogStore store;

    // Private constructor
    private Logger(LogStore store) {
        this.store = store;
    }

    // Get single instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(new InMemoryLogStore());
        }
        return instance;
    }

    public void debug(String message) {
        log(LogLevel.DEBUG, message);
    }

    public void info(String message) {
        log(LogLevel.INFO, message);
    }

    public void error(String message) {
        log(LogLevel.ERROR, message);
    }

      // Core method
    private void log(LogLevel level, String message) {
        LogEntry entry = new LogEntry(level, LocalDateTime.now(), message);
        store.save(entry);
        System.out.println(entry); // also print to console
    }
     // ─── FILTER METHODS ────────────────────────────────────
    
    public List<LogEntry> filter(LogFilter filter) {
        return store.filter(filter);
    }
    
    public List<LogEntry> getAllLogs() {
        return store.getAll();
    }

}