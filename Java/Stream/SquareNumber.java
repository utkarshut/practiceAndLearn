package Java.Stream;

import java.util.List;
import java.util.stream.Collectors;

public class SquareNumber {
    public static void main(String[] args) {
        List<Integer> list  = List.of(1,2,2,3,4,5,5,6,6);
        System.out.println(
            list.stream()
                .map(m -> m*m)
                .collect(Collectors.toList())
        );
    }
}
