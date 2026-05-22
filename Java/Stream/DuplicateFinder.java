package Java.Stream;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class DuplicateFinder {
    public static void main(String[] args) {
        String str = "asasasaswwwhuhwuhwoaymrphzyz";
        List<Integer> list = List.of(1,2,3,1,21,1,2,41,5,5,6,1);
    
        List<Character> ansList = str.chars()  
            .mapToObj(c -> (char)c)
            .collect(Collectors.groupingBy(c->c,Collectors.counting()))
            .entrySet()
            .stream()
            .map(Map.Entry:: getKey)
            .toList();
        System.out.println(ansList);


       Map<Integer,Long> listAns = list.stream().collect(Collectors.groupingBy(
        c->c, Collectors.counting()
       ));
       System.out.println(listAns);
    }
}
