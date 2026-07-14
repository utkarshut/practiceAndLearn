import java.lang.reflect.Array;
import java.util.Arrays;

public class Rotate {
    public static void main(String[] args) {
        int[] input = {1,2,3,4,5,6,7};
        int k = 3;
        rotateByK(input,k);
    }
    public static void rotateByK(int[] input, int k){
        int[] temp = new int[input.length];
        int left = 0;
        int right = 0;
        while (right < input.length) {
             temp[left] = input[(right+k)%input.length];
             left++;
             right++;
        }
        System.out.println(Arrays.toString(temp));
    }
}
