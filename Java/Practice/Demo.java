

// measure 
// first non repeating character 

import java.util.LinkedHashMap;
import java.util.Map;

public class Demo {
   
    
    public static void main(String[] args) {
        int[] characterCount = new int[26];

        // option 1 
        //for loop char count of every item
        // for loop to the string 
        // check if that char is have 1 in my char count

        // option 2
        // two pointer 
        // left right-> while 

        // option 3 store in linkedhasmap

        Map<Character,Integer> map = new LinkedHashMap<>();
        String str = "measure";
        for(int i=0;i< str.length();i++){
            Character c = str.charAt(i);
            map.put(c, map.getOrDefault(c, 0)+1);
        }

        System.out.println(map.keySet());
        
    }
}