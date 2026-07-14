import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Test {
    public static void main(String[] args) {
        // Input: 1,0,1,0,1,0
        // Output: 1, 1, 1,0,0,0

        int[] inputArray = { 1, 0, 1, 0, 1, 0 };
        // int[] output = moveZerosToEnd(inputArray);
        // System.out.println(Arrays.toString(output));

        List<Integer> list = List.of(1, 0, 1, 0, 1, 0);
        List<Integer> output = moveZerosToEndWithStream(list);
        System.out.println(output);

    }
    /**
     * Move Zeros to end with Stream
     * @param list
     * @return
     */
    public static List<Integer> moveZerosToEndWithStream( List<Integer> list){
        List<Integer> listWithNonZeros = list.stream().filter(f -> f != 0).toList();
        List<Integer> listWithZeros = list.stream().filter(f -> f == 0).toList();

        List<Integer> output = Stream.concat(listWithNonZeros.stream(), listWithZeros.stream())
                .collect(Collectors.toList());
        return output;
    }

    /**
     * Move Zeros to end using two pointer
     * @param inputArray
     * @return
     */
    public static int[] moveZerosToEnd(int[] inputArray) {
        int left = 0;
        int right = 0;
        while (right < inputArray.length) {
            if (inputArray[right] != 0) {
                inputArray[left] = inputArray[right];
                left++;
            }
            right++;
        }
        while (left < inputArray.length) {
            inputArray[left] = 0;
            left++;
        }
        return inputArray;
    }
}
