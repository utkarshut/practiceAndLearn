import java.util.Arrays;
import java.util.Comparator;

public class Test {
    public static void main(String[] args) {
        // Program to find the second highest number from the following array-
        int[] numbers = { 10, 5, 56, 56, 50, 20, 30, 40, 50 };
        int[] sortedNumbers = Arrays.stream(numbers)
                .boxed()
                .distinct()
                .sorted(Comparator.reverseOrder())
                .mapToInt(Integer::intValue)
                .toArray();
        if (sortedNumbers.length > 1) {
            System.out.println(sortedNumbers[1]);
        } else {
            System.out.println(-1);
        }
    }
}