import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Wipro {
    public static void main(String[] args) {
        String s = "Hello";
        String out = s.chars().mapToObj(c->(char)c).map(String::valueOf).reduce("",(prev,curr)->curr+prev);
        System.out.println(out);

        List<Integer> list = List.of(1,2,3,4,4,4);
        System.out.println(
            list.stream().reduce(0,(p,c)->c+p)
        );
        System.out.println(
            list.stream().sorted(Comparator.reverseOrder()).findFirst()
        );
        int[] arr = {1,2,3,4};
        System.out.println(Arrays.stream(
            arr
        ).boxed().sorted(Comparator.reverseOrder()).findFirst());

        System.out.println(
            list.stream().distinct().collect(Collectors.toList())
        );
        
    }
}
