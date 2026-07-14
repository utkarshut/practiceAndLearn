
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

public class Practice {
    
    private static record Employees(String name, Integer salary, String department) {
    };

    // Find Duplicate Elements
    public static void main(String[] args) {
        List<Integer> list = List.of(1, 1, 2, 3, 4, 3, 2, 1);
        Map<Integer, Long> map = list.stream()
                .collect(Collectors.groupingBy(c -> c, LinkedHashMap::new, Collectors.counting()));
        Stream<Map.Entry<Integer, Long>> mapEntryStream = map.entrySet().stream().filter(f -> f.getValue() > 1);
        System.out.println(mapEntryStream.map(c -> c.getKey()).toList());

        // First Non-Repeated Character
        String str = "Programming";

        Map<Character, Long> strMap = str.chars().mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(c -> c, LinkedHashMap::new, Collectors.counting()));
        System.out.println(strMap
                .entrySet()
                .stream()
                .filter(f -> f.getValue() == 1)
                .map(c -> c.getKey())
                .map(String::valueOf)
                .collect(Collectors.joining()));

        // reverse each word
        String str1 = "Hello World";
        String res = Arrays.stream(str1.split(" "))
                .map(word -> word.chars()
                        .mapToObj(c -> (char) c)
                        .map(String::valueOf)
                        .reduce("", (curr, prev) -> prev + curr))
                .collect(Collectors.joining(" "));

        System.out.println(res);

        // Group Employees By Department
        ArrayList<Employees> emp = new ArrayList<>();
        emp.add(new Employees("RAM", 1000, "CSE"));
        emp.add(new Employees("SHTAM", 500, "CSE"));
        emp.add(new Employees("Maesg", 5000, "ECE"));

        Map<String, List<Employees>> empMap = emp.stream().collect(
                Collectors.groupingBy(
                        c -> c.department(), Collectors.toList()));

        Integer maxSalary = emp.stream().map(Employees::salary).sorted(Comparator.reverseOrder()).skip(2).findFirst().orElse(-1);

        Employees empMax = emp.stream().max(Comparator.comparingInt(Employees::salary)).orElse(null);

        // partition by salary > 2500
        Map<Boolean,List<Employees>> empPartition = emp.stream().collect(Collectors.partitioningBy(c -> c.salary() > 2500));
        System.out.println(empPartition);

        System.out.println(empMax);

        // count occurance of word

        String occur = "java spring java kafka spring";
        System.out.println(Arrays.stream(occur.split(" ")).collect(Collectors.groupingBy(c->c,Collectors.counting())));

        // fltten nestes list
        //**IMPORTANT**
        List<List<Integer>> listf = List.of(List.of(1,2), List.of(3,4), List.of(5));
        System.out.println(listf.stream().flatMap(m->m.stream()).toList());  

        System.out.println(emp.stream().sorted(Comparator.comparing(Employees::name).reversed().thenComparing(Employees::salary)).toList());
        
        LruCache<Integer, String> cache = new LruCache<>(3);
        cache.put(1, "A");
        cache.put(2, "B");
        cache.put(3, "C");
        cache.get(1);
        System.out.println(cache);
    }
}
