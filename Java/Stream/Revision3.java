import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.Future;
import java.util.stream.Collectors;

public class Revision3 {
    public static void main(String[] args) {

        int[] arr = { 1, 0, 0, 1, 0, 1 };

        System.out.println(Arrays.toString(Arrays.stream(arr).filter(f -> f != 1).toArray()));

        List<Employee> empList = new ArrayList<>();
        empList.add(new Employee("Utkarsh", "CSE", 1000));
        empList.add(new Employee("Akash", "MECH", 15000));
        empList.add(new Employee("Shubham", "CIVIL", 20000));
        empList.add(new Employee("CHOTU", "CIVIL", 25000));
        // Group employees by department, find highest salary per dept → Map>
        // Pattern: Collectors.groupingBy + maxBy

        System.out.println(empList.stream().collect(
                Collectors.groupingBy(c -> c.getDepartment(),
                        Collectors.collectingAndThen(
                                Collectors.maxBy(Comparator.comparing(Employee::getSalary)),
                                e -> e.map(Employee::getName).orElse("")))));

        // max salary
        System.out.println(empList.stream().map(Employee::getSalary).max(Integer::compare).orElse(0));
        // check uppercase
        System.out.println(empList.stream().filter(f -> Character.isUpperCase(f.getName().charAt(0))).toList());

        System.out.println(empList.stream()
                .map(m -> Character.toLowerCase(m.getName().charAt(0))
                        + m.getName().substring(1))
                .toList());
        // change uppercase
        // Given a list of strings, find all duplicates using streams (not loops)
        // Pattern: Collectors.groupingBy + filter count > 1

        List<String> list = List.of("RAM", "SHYAM", "SITA", "RAM");
        System.out.println(list.stream().collect(Collectors.groupingBy(c -> c, Collectors.counting()))
                .entrySet().stream()
                .filter(f -> f.getValue() > 1).map(Map.Entry::getKey).findFirst().orElse(""));

        // Flatten a List> and find the top 3 distinct values
        List<List<Integer>> numbers = List.of(
                List.of(10, 20, 30, 10),
                List.of(40, 50, 20),
                List.of(60, 70, 50, 80));
        System.out.println(numbers.stream().flatMap(List::stream).toList());
        System.out.println(
                numbers.stream()
                        .flatMap(List::stream)
                        .distinct()
                        .sorted(Comparator.reverseOrder())
                        .limit(3)
                        .toList());

        String input = "Aman:5000,Rahul:7000,Aman:8000,Neha:6000,Rahul:9000";
        System.out.println(Arrays.stream(input.split(","))
                .map(m -> m.split(":"))
                .collect(Collectors.groupingBy(c -> c[0], Collectors.averagingDouble(c -> Double.parseDouble(c[1])))));

        // Write a custom Comparator to sort a list of Employees by dept asc, then
        // salary desc

        Collections.sort(empList,
                Comparator.comparing(Employee::getDepartment).thenComparing(Employee::getSalary).reversed());
        System.out.println(empList);

        // Complete the CompletableFuture chain: fetch user, then fetch orders, combine
        // both
        CompletableFuture<String> user = CompletableFuture.supplyAsync(() -> {
            System.out.println("User Loaded");
            return "User Loaded";
        });

        CompletableFuture<String> order = CompletableFuture.supplyAsync(() -> {
            System.out.println("Order Created");
            return "Order Created";
        });

        CompletableFuture.allOf(user,order).join();

        int[][] nums = {{1,2,3},{4,5,6}};
        System.out.println(Arrays.deepToString(Arrays.stream(nums)
                .map(n-> Arrays.stream(n).boxed().sorted(Comparator.reverseOrder()).toArray())
                .toArray()));
 
    }

    static class Employee {
        String department;
        Integer salary;
        String name;

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Employee(String name, String department, Integer salary) {
            this.department = department;
            this.salary = salary;
            this.name = name;
        }

        public String getDepartment() {
            return department;
        }

        public void setDepartment(String department) {
            this.department = department;
        }

        public Integer getSalary() {
            return salary;
        }

        public void setSalary(Integer salary) {
            this.salary = salary;
        }

        @Override
        public String toString() {
            return "Employee: " + name + " Department " + department;
        }
    }
}
