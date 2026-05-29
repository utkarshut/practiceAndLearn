import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.stream.Collectors;

public class Revision5 {
    public static void main(String[] args) {
        String str = "asxhashn8x";
        System.out.println(String.join("",str.chars().mapToObj(c->(char)c)
                    .collect(Collectors.groupingBy(c->c,LinkedHashMap::new,Collectors.counting()))
                    .keySet().stream().map(String::valueOf).collect(Collectors.joining()))
                );

       int[] arr = {123,45,6,6,4,2,3};
       //remove distinct
        System.out.println(Arrays.stream(arr).boxed().distinct().collect(Collectors.toList()));
       // sum 
        System.out.println(Arrays.stream(arr).sum());
       // max
        System.out.println((Arrays.stream(arr).boxed().max(Integer::compare).orElse(-1)));

        
    }
}
