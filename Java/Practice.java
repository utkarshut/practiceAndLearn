import java.util.ArrayList;
import java.util.Arrays;

public class Practice {
    static int x = 40;
    public static void main(String[] args) {
        int x = 50;
        System.out.println(x); // print 50 shadow value
        fun();
        multipleArgs(1, 4 ,56);
        fun(2);
        arrayData();
        multidimenshionArray();
        arrayList();
        int[] arr = {2,4,6,3,6,7,7};
        System.out.println(max(arr));
    }
    private static int max(int[] arr) {
        int max = 0;
        for(int i=0; i<arr.length; i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
        return max;
    }
    static  void fun(){
        System.out.println(x); // print 40 dont give 50 as it shadow only in local scope
    }
    static void multipleArgs(int ...v){
        System.out.println(Arrays.toString(v));
    }
    // METHOD OVERLOADING same function name with different argument or different argument type 
    // happens in compile time
    static void fun(int a){
        System.out.println("METHOD OVERLOADING" + (a+x));
    }
    static void arrayData(){
        int[] rollNum = new int[5]; // create heap memory object of 5 in run time
        System.out.println(rollNum);
        rollNum[0] = 1;
        //int[] roll = {1,2,34,5,"ff"}; ALL DATATYPE SHOULD be same in ARRAY of collection
 
        // Array object are in heap
        // Heap object are not continuous
        // Dynamic memory object
        // Internally array data object may not be continuous as depends on JVM
        // IN JAVA all the primitive data type store in stack memory but all the other string array stored
        // in heap memory
        for(int num: rollNum){
            System.out.println(num);
        }
    }
    static void multidimenshionArray(){
        int[][] multidimenshionArray = new int[2][]; // number of rows compulsory
        System.out.println(Arrays.toString(multidimenshionArray)); // store in heap as array of array
        int[][] array2 = {{12,5,7},{2, 4, 5}};
        System.out.println(Arrays.toString(array2));
        print(array2);
    }

    static void print(int[][] arr){
        for(int row = 0; row < arr.length; row++ ){
            for(int column = 0; column < arr[row].length ; column++){
                System.out.print(arr[row][column]+" ");
            }
            System.out.println();
        }
    }

    static void arrayList(){
        ArrayList<Integer> list =  new ArrayList<Integer>();
        list.add(2);
        list.add(4);
        list.add(5);
        list.add(5);
        System.out.println(list);
        System.out.println(list.contains(5));
        list.set(3, 8);
        list.remove(0);
        System.out.println(list.get(2));
        System.out.println(list);
        // INITIALLY array list has some fixed size when items get added it auto keep 
        // on increasing the size by double
    }
}
