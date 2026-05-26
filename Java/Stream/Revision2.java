package Stream;

import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Revision2 {

    static class Employee {
        Integer salary;
        String name;

        public Integer getSalary() {
            return salary;
        }

        public void setSalary(Integer salary) {
            this.salary = salary;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Employee(Integer salary, String name) {
            this.salary = salary;
            this.name = name;
        }

    }

    public static void main(String[] args) {
        String str = "asasasaswwwhuhwuhwoaymrphzyz";
        String str1 = "welcome utkarsh";
        List<Integer> list = List.of(1, 2, 3, 1, 21, 1, 2, 41, 5, 5, 6, 1);
        List<Integer> list1 = List.of(1, 2, 3);
        // remove duplicates

        System.out.println(list.stream()
                .distinct().toList());

        System.out.println(str.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(c -> c, Collectors.counting()))
                .entrySet()
                .stream()
                .map(Map.Entry::getKey)
                .map(String::valueOf)
                .collect(Collectors.joining("")));

        LinkedList<Employee> emp = new LinkedList<>();
        emp.add(new Employee(1000, "Utkarsh"));
        emp.add(new Employee(5000, "Akash"));

        System.out.println((emp.stream()
                .sorted(Comparator.comparing(Employee::getSalary)
                        .reversed())
                .map(Employee::getSalary).findFirst().orElse(null)));

        System.out.println(Arrays.stream(str1.split("")).reduce("", (p, n) -> n + p));
        System.out.println(Arrays.stream(str1.split(" ")).reduce("", (p, n) -> n + " " + p));

        System.out.println(Stream.concat(list.stream(), list1.stream()).toList());
        System.out.println(Stream.concat(list.stream(), list1.stream()).distinct().toList());

        System.out.println(list.stream().max(Integer::compare));

        System.out.println(emp.stream().max(Comparator.comparing(Employee::getSalary)).map(Employee::getSalary));

        int[][] arr = {{1,2,3},{4,5,6}};
        System.out.println(Arrays.deepToString(Arrays.stream(arr)
              .map(inner->Arrays.stream(inner).boxed().sorted(Comparator.reverseOrder()).mapToInt(Integer::intValue).toArray())
              .toArray()));
    }
}
