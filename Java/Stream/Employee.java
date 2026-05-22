package Java.Stream;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class Employee {
    private String name;
    private String department;
    private Integer salary;

    Employee(String name, String department, Integer salary){
          this.name = name;
          this.salary = salary;
          this.department = department;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
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
         return "Employee{" +
            "name='" + name + '\'' +
            ", department='" + department + '\'' +
            ", salary=" + salary +
            '}';
    }

    public static void main(String[] args) {
        List<Employee> empList = new ArrayList<>();
        empList.add(new Employee("Akash", "CSE", 14000));
        Employee emp = new Employee("Utkarsh", "IT", 1100);
        empList.add(emp);

        System.out.println(empList.stream()
                .collect(Collectors.groupingBy(c->c.getDepartment(),Collectors.toList())));
        System.out.println(empList.stream()
                .collect(Collectors.groupingBy(c->c.getDepartment(),Collectors.counting())));
        System.out.println(empList.stream()
                .collect(Collectors.groupingBy(c->c.getDepartment(),
                Collectors.mapping(Employee::getName, Collectors.toList()))));
        System.out.println(empList.stream()
                .collect(Collectors.groupingBy(c->c.getDepartment(),
                Collectors.summingInt(Employee::getSalary))));
        System.out.println(empList.stream()
                 .mapToInt(Employee::getSalary)
                .max().orElse(-1));
        System.out.println(empList.stream()
                .max(Comparator.comparingInt(Employee::getSalary)));
        System.out.println(empList.stream()
                .mapToInt(Employee::getSalary)
                .skip(1)
                .max().orElse(-1));
        System.out.println(empList.stream()
                .map(Employee::getSalary)
                .distinct()
                .sorted(Comparator.reverseOrder())
                .skip(1)
                .findFirst().orElse(-1));

        // which emp has second max salary
        System.out.println(empList.stream()
                .sorted(Comparator.comparingInt(Employee::getSalary).reversed())
                .skip(1)
                .findFirst().orElse(null));

        
    }
}
