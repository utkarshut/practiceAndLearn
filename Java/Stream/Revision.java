package Java.Stream;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Revision {
    public static void main(String[] args) {
        String str = "programming";
        Map<Character, Long> map = str.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(c -> c, Collectors.counting()));
        System.out.println(map);

        // find duplicates
        List<Character> list = str.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(c -> c, Collectors.counting()))
                .entrySet()
                .stream()
                .filter(f -> f.getValue() > 1)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
        System.out.println(list);

        // . First Non-Repeating Character (again)
        String str1 = "swiss";
        Character ctCharacter = str1.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(c -> c, LinkedHashMap::new, Collectors.counting()))
                .entrySet()
                .stream()
                .filter(f -> f.getValue() == 1)
                .map(Map.Entry::getKey)
                .findFirst()
                .orElse(null);

        System.out.println(ctCharacter);

        // Remove Duplicate Numbers
        List<Integer> list1 = List.of(1, 2, 2, 3, 4, 4, 5);
        List<Integer> list2 = list1.stream().distinct().toList();
        System.out.println(list2);

        // Group Employees by Department ⭐ (Most important for senior interviews)

        List<Employee> empList = new ArrayList<>();
        empList.add(new Employee("ABC", "IT", 1000));
        empList.add(new Employee("DEF", "CSE", 2000));
        empList.add(new Employee("GHI", "MECH", 3000));
        empList.add(new Employee("JKL", "ELEC", 500));

        System.out.println(empList.stream()
                .collect(Collectors.groupingBy(c -> c.getDepartment(),
                        Collectors.mapping(Employee::getName, Collectors.toList()))));

        System.out.println(empList.stream()
                .sorted(Comparator.comparing(Employee::getSalary))
                .collect(Collectors.toList()));

        System.out.println(empList.stream()
                .max(Comparator.comparing(Employee::getSalary))
                .orElse(null));

        System.out.println(empList.stream()
                .max(Comparator.comparing(Employee::getSalary))
                .orElse(null));
        System.out.println(empList.stream()
                .map(Employee::getSalary)
                .max(Integer::compare)
                .orElse(null));

    }
}
