import java.util.LinkedHashMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FindFirstNotRepeatingChar{
    

    public static void main(String[] args) {
        String str = "aabbcdde";
        Character found = str.chars()
            .mapToObj(c->(char)c)
            .collect(Collectors.groupingBy(c->c,LinkedHashMap::new,Collectors.counting()))
            .entrySet()
            .stream()
            .filter(f->f.getValue() == 1)
            .map(Map.Entry::getKey)
            .findFirst()
            .orElse(null);

        System.out.println(found);
    }
}