import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Main {

    enum RouterStatus {
        GREEN, YELLOW, RED, OFFLINE
    }

    enum Link {
        UP, DOWN
    }

    enum RouterPriority {
        CORE, REGIONAL, EDGE
    }

    static class Router {
        Integer routerId;
        String routerLocation;

        public Router(Integer routerId, String routerLocation) {
            this.routerId = routerId;
            this.routerLocation = routerLocation;
        }

        RouterStatus routerStatus;
        LocalDateTime lastReportedDateTime;
    }

    static class RouterReport {
        Integer routerId;
        double latency;
        double packetLoss;
        double cpu;
        Link link;
        LocalDateTime timestamp;
        RouterPriority routerPriority;

        public RouterPriority getRouterPriority() {
            return routerPriority;
        }

        public void setRouterPriority(RouterPriority routerPriority) {
            this.routerPriority = routerPriority;
        }

        public RouterReport(Integer routerId, double latency, double packetLoss, double cpu, Main.Link link,
                LocalDateTime timestamp, RouterPriority routerPriority) {
            this.routerId = routerId;
            this.latency = latency;
            this.packetLoss = packetLoss;
            this.cpu = cpu;
            this.link = link;
            this.timestamp = timestamp;
            this.routerPriority = routerPriority;
        }

        public Integer getRouterId() {
            return routerId;
        }

        public double getLatency() {
            return latency;
        }

        public double getPacketLoss() {
            return packetLoss;
        }

        public double getCpu() {
            return cpu;
        }

        public Link getLink() {
            return link;
        }

        public LocalDateTime getTimestamp() {
            return timestamp;
        }
    }

    static interface RuleConfig {
        abstract RouterStatus calculateStatus(RouterReport report);
    }

    static class RuleConfigService implements RuleConfig {

        @Override
        public RouterStatus calculateStatus(RouterReport report) {
            // store in variable
            double latency = report.getLatency();
            double packetLoss = report.getPacketLoss();
            double cpu = report.getCpu();

            if (report.getLink() == Link.DOWN ||
                    latency > 300 ||
                    packetLoss > 3 ||
                    cpu > 90) {

                return RouterStatus.RED;
            }

            if ((latency >= 100 && latency <= 300) ||
                    (packetLoss >= 1 && packetLoss <= 3) ||
                    (cpu >= 70 && cpu <= 90)) {

                return RouterStatus.YELLOW;
            }

            return RouterStatus.GREEN;
        }

        public Integer getWeightScoreForRouter(RouterPriority routerPriority) {
            switch (routerPriority) {
                case RouterPriority.CORE:
                    return 10;
                case RouterPriority.EDGE:
                    return 1;
                case RouterPriority.REGIONAL:
                    return 5;
                default:
                    return 0;
            }
        }
    }

    static class RouterService {
        List<Router> routers;
        List<RouterReport> routerReports;
        Map<RouterStatus, List<Integer>> routerStausMap = new HashMap<>();
        RuleConfigService configService;

        RouterService(List<Router> routers, List<RouterReport> routerReports) {
            this.routers = routers;
            this.routerReports = routerReports;
            this.configService = new RuleConfigService();
        }

        public Map<RouterStatus, List<Integer>> processRouterReport() {
            for (int i = 0; i < routerReports.size(); i++) {
                RouterReport currentReport = routerReports.get(i);
                RouterStatus status = configService.calculateStatus(currentReport);
                Integer score = configService.getWeightScoreForRouter(currentReport.getRouterPriority());
                routerStausMap.computeIfAbsent(status, k -> new ArrayList<>()).add(score);
            }
            return routerStausMap;
        }

        public void getCurrentStatus() {
            Map<RouterStatus, Integer> currentScore = new HashMap<>();
            for (RouterStatus status : this.routerStausMap.keySet()) {
                List<Integer> statusScore = this.routerStausMap.get(status);
                int score = statusScore.stream().collect(Collectors.summingInt(Integer::intValue));
                currentScore.put(status, score);
            }
            System.out.println(currentScore);
            RouterStatus maxStatus = currentScore.entrySet().stream()
                    .max(Map.Entry.comparingByValue())
                    .map(Map.Entry::getKey).orElse(null);
            System.out.println(maxStatus);
        }

    }

    public static void main(String[] args) {
        System.out.println("HIII");

        List<Router> routers = new LinkedList<>();
        List<RouterReport> routerReports = new LinkedList<>();

        routers.add(new Router(1, "BETTIAH"));
        routers.add(new Router(2, "MOTIHARI"));
        routers.add(new Router(3, "MUZAFFERPUR"));
        routers.add(new Router(4, "PATNA"));
        routers.add(new Router(5, "GAYA"));

        routerReports.add(
                new RouterReport(
                        1,
                        100,
                        3,
                        40,
                        Link.UP,
                        LocalDateTime.now(),
                        RouterPriority.CORE));
        routerReports.add(
                new RouterReport(
                        1,
                        300,
                        1,
                        40,
                        Link.UP,
                        LocalDateTime.now().plusSeconds(10),
                        RouterPriority.EDGE));
        routerReports.add(
                new RouterReport(
                        2,
                        100,
                        3,
                        40,
                        Link.DOWN,
                        LocalDateTime.now(),
                        RouterPriority.EDGE));
        routerReports.add(
                new RouterReport(
                        3,
                        100,
                        1,
                        70,
                        Link.UP,
                        LocalDateTime.now(),
                        RouterPriority.EDGE));

        RouterService service = new RouterService(routers, routerReports);
        Map<RouterStatus, List<Integer>> routerReport = service.processRouterReport();
        service.getCurrentStatus();
        System.out.println(routerReport);
    }
}