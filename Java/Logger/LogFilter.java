package Logger;

import java.time.LocalDateTime;

public class LogFilter {
    private LogLevel levelType;
    private LocalDateTime fromDateTime;
    private LocalDateTime toDateTime;

    private LogFilter(){}

    public static class Builder {
        private LogFilter filter = new LogFilter();
        public Builder level(LogLevel levelType){
            filter.levelType = levelType;
            return this;
        }
        public Builder from(LocalDateTime fromDateTime){
            filter.fromDateTime = fromDateTime;
            return this;
        }
        public Builder to(LocalDateTime toLocalDateTime){
            filter.toDateTime = toLocalDateTime;
            return this;
        }
        public LogFilter build(){
            return filter;
        }
        
    }
     // Getters
    public LogLevel getLevel() { return levelType; }
    public LocalDateTime getFromTime() { return fromDateTime; }
    public LocalDateTime getToTime() { return toDateTime; }

}
