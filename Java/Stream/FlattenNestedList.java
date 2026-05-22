package Java.Stream;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class FlattenNestedList {
    public static void main(String[] args) {
        List<List<Integer>> list = List.of(List.of(1, 2, 3, 4), List.of(1, 2, 21, 2));
        int[][] arr = new int[][] { { 1, 2, 3, 4 }, { 12, 3, 4, } };

        System.out.println(
                list.stream().flatMap(List::stream).toList());

        int[][] ans = Arrays.stream(arr)
                .map(inner -> Arrays.stream(inner).sorted().toArray()).toArray(int[][]::new);

        System.out.println(
                Arrays.deepToString(ans));
    }
}
