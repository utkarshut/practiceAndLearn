import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Test {
    static int[] arr = {1,2,3,4,5};
    static int[][] arr2 = {{1,2,3,4,5},{12,49}};
    record Employee(String name, Integer salary){};

    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee("Utk", 1000));
        employees.add(new Employee("Akash", 2000));
        employees.stream()
                .collect(Collectors.groupingBy(Employee::name,Collectors.counting()))
                .forEach((name,count)->System.out.println(name+" "+count));
        // Arrays.stream(arr).forEach(System.out::println);
        Arrays.stream(arr2)
                .flatMapToInt(Arrays::stream)
                .boxed()
                .collect(Collectors.toList())
                .forEach(System.out:: println);
        
        // System.out.println(Arrays.stream(arr).max().getAsInt());
    }
}
