package Logger;

import java.time.LocalDateTime;

public class Main {
    public static void main(String[] args) {
        Logger logger = Logger.getInstance();
        
        // ── Log some messages ──────────────────────────
        logger.debug("Application started");
        logger.info("User logged in");
        logger.error("Database connection failed");
        logger.error("Null pointer exception");
        
        System.out.println("\n─── All Logs ───────────────────────");
        logger.getAllLogs().forEach(System.out::println);
        
        
        // ── Filter by Level only ───────────────────────
        LogFilter warnFilter = new LogFilter.Builder()
            .level(LogLevel.INFO)
            .build();
        
        System.out.println("\n─── WARN Logs Only ─────────────────");
        logger.filter(warnFilter).forEach(System.out::println);
        
        
        // ── Filter by DateTime Range ───────────────────
        LogFilter timeFilter = new LogFilter.Builder()
            .from(LocalDateTime.now().minusMinutes(5))
            .to(LocalDateTime.now())
            .build();
        
        System.out.println("\n─── Last 5 min Logs ────────────────");
        logger.filter(timeFilter).forEach(System.out::println);
        
        
        // ── Filter by BOTH level + time ────────────────
        LogFilter combinedFilter = new LogFilter.Builder()
            .level(LogLevel.ERROR)
            .from(LocalDateTime.now().minusHours(1))
            .to(LocalDateTime.now())
            .build();
        
        System.out.println("\n─── ERROR in last 1 hour ───────────");
        logger.filter(combinedFilter).forEach(System.out::println);
    }
}
