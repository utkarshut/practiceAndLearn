package Java.Stream;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class FrequencyCounter {
    public static void main(String[] args) {

        String str = "asdasdsadasdwwvtyyy";
        List<Integer> list = List.of(1,2,1,2,1,2,33,4,5,3,1,2);
        //1. Frequency Counter
       HashMap<Character,Long> s = str.chars()
            .mapToObj(c -> (char)c)
            .collect(Collectors.groupingBy(c->c,HashMap::new,Collectors.counting()));

       System.out.println(s);

       Map<Integer,Long> map = list.stream()
            .collect(Collectors.groupingBy(c->c,Collectors.counting()))
            .entrySet()
            .stream()
            .filter(f -> f.getValue() == 1)
            .collect(Collectors.toMap(e -> e.getKey(),
            e -> e.getValue()));
       System.out.println(map);


       Integer ans = list.stream()
            .collect(Collectors.groupingBy(c->c,Collectors.counting()))
            .entrySet()
            .stream()
            .filter(f -> f.getValue() == 1)
            .map(Map.Entry::getKey)
            .findFirst()
            .orElse(null);
       System.out.println(ans);
    }
}
