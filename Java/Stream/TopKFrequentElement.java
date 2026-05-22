package Java.Stream;

import java.util.Arrays;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class TopKFrequentElement {
// nums = [1,1,1,2,2,3]
// k = 2
    public static void main(String[] args) {
        int[] arr =  {1,1,1,2,2,3};
        int k = 2;
        Map<Integer,Long> map1 = Arrays.stream(arr).boxed().collect(Collectors.groupingBy(c->c,Collectors.counting()));
        // System.out.println(map1);
        // System.out.println(map1.entrySet().stream().sorted(Map.Entry.<Integer, Long>comparingByValue().reversed()).toList());
        
        Map<Integer,Integer> map = new HashMap<>();
        PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>(
            (a,b)-> a.getValue() - b.getValue()
        );
        for(int i=0;i < arr.length;i++){
            map.put(arr[i], map.getOrDefault(arr[i],    0)+1);
        }
        for(Map.Entry<Integer,Integer> item : map.entrySet()){
            pq.add(item);
            if (pq.size() > k) {
                pq.poll();
            }
        }
        System.out.println(pq.stream().map(Map.Entry::getKey).toList());
    }
}
