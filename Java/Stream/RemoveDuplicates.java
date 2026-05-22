package Java.Stream;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class RemoveDuplicates {
    public static void main(String[] args) {
        String str = "ashjasoihwqeonmrlewmas";
        List<Integer> list = List.of(1, 2, 3, 112, 2, 1, 2, 2, 4, 3, 5, 6, 6, 7, 33, 2, 12, 21, 3, 44, 35);
        
        // remove duplicate mean keep one item

        String list1 = str.chars().mapToObj(c->(char)c)
            .distinct()
            .map(String::valueOf)
            .collect(Collectors.joining());
        System.out.println(list1);

        List<Integer> list2 = list.stream()
                                    .distinct()
                                    .collect(Collectors.toList());

        System.out.println(list2);
        // occur just once 
        String newStr = str.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.groupingBy(
                        c -> c,
                        LinkedHashMap::new,
                        Collectors.counting()))
                .entrySet().stream()
                .filter(f -> f.getValue() == 1)
                .map(Map.Entry::getKey)
                .map(String::valueOf)
                .collect(Collectors.joining());
        System.out.println(newStr);

        List<Integer> listans = list.stream()
                .collect(Collectors.groupingBy(c -> c, Collectors.counting()))
                .entrySet()
                .stream()
                .filter(f -> f.getValue() == 1)
                .map(Map.Entry::getKey)
                .toList();

        System.out.println(listans);

    }
}
