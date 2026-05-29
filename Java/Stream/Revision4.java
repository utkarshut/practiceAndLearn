package Stream;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Revision4 {
    static class Employee {
        Integer empId;
        String name;
        Integer salary;

        public Integer getEmpId() {
            return empId;
        }

        public void setEmpId(Integer empId) {
            this.empId = empId;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Integer getSalary() {
            return salary;
        }

        public void setSalary(Integer salary) {
            this.salary = salary;
        }

        public Employee(Integer empId, String name, Integer salary) {
            this.empId = empId;
            this.name = name;
            this.salary = salary;
        }

        @Override
        public String toString() {
            return this.getName() + " " + this.getEmpId() + " " + this.getSalary();
        }

    }

    public static void main(String[] args) {
        Map<String, List<Integer>> map = new HashMap<>();
        map.put("GREEN", List.of(1, 2, 3));
        map.put("Red", List.of(1, 5, 8, 8));
        map.entrySet().stream()
                .collect(Collectors.groupingBy(
                        Map.Entry::getKey,
                        Collectors.summingInt(e -> e.getValue().stream().mapToInt(Integer::intValue).sum())));
        map.entrySet().stream()
                .collect(Collectors.groupingBy(m -> m.getKey(),
                        Collectors.summingInt(e -> e.getValue().stream().mapToInt(Integer::intValue).sum())));

        List<Employee> empList = new ArrayList<>();
        empList.add(new Employee(1, "Utkarsh", 1000));
        empList.add(new Employee(1, "AKash", 300));
        empList.add(new Employee(1, "Subham", 5000));
        empList.add(new Employee(1, "Chotu", 5000));

        System.out.println(empList.stream()
        .sorted(Comparator.comparingInt(Employee::getSalary).reversed())
        .map(Employee::getSalary).distinct().skip(1).findFirst().orElse(-1));

        System.out.println(empList.stream().collect(
                Collectors.groupingBy(c -> c.getName(), Collectors.summingInt(Employee::getSalary))));
        System.out.println(empList.stream().collect(
                Collectors.groupingBy(c -> c.getSalary(), Collectors.mapping(Employee::getName, Collectors.toList()))));

        int[] arr = { 1, 1, 2, 3, 4, 52, 43, 3 };
        int[][] toSort = { { 1, 1, 2, 3, 4, 52, 43, 3 }, { 2, 4, 2, 323, 3, 45, 3 } };
        int max = Arrays.stream(arr).boxed().max(Comparator.comparingInt(Integer::intValue)).orElse(-1);
        int output = Arrays.stream(arr).boxed().sorted(Comparator.reverseOrder()).findFirst().orElse(-1);
        int[][] out = Arrays.stream(toSort)
                .map(m -> Arrays.stream(m).boxed().sorted(Comparator.reverseOrder()).mapToInt(Integer::intValue).toArray()).toArray(
                    int[][]::new
                );
        String str = "asxaiuhquwnqdcunue";
        List<Character> list =
            str.chars().mapToObj(c->(char)c).collect(Collectors.groupingBy(c->c,Collectors.counting()))
            .entrySet().stream().map(Map.Entry::getKey).toList();
       // System.out.println(String.join("", list));

       System.out.println(Arrays.deepToString(out));
    }
}
