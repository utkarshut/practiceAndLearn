package Java.Stream;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class EvenOdd {
    public static void main(String[] args) {
        List<Integer> list  = List.of(1,2,1,2,3,1,33,1,3);
        System.out.println(
            list.stream().filter(f->f % 2 == 0).distinct().toList()
        );
       Map<Boolean, List<Integer>> res =  list.stream().distinct().collect(Collectors.partitioningBy(n-> n%2 ==0));
       System.out.println(res);
    }
}
