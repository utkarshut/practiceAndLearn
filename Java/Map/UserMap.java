
import java.util.Map;
import java.util.HashMap;
public class UserMap{
    private static Map<String, Integer> map = new HashMap<>();
    private Map<String,Integer> map2 = new HashMap<>();
    UserMap(){
       // static should be access directly not this.map as it's single for class
       map.put("A",10);
       this.map2.put("A", 100);
    }
    public static void main(String[] args){
        // static need object class
        new UserMap();
        UserMap.map.compute("A",(k,v)-> v+5);
        System.out.println(UserMap.map);
        UserMap user = new UserMap();
        user.map2.computeIfAbsent("B",(k)->5);
        user.map2.computeIfPresent("C",(k,v)->5);
        System.out.println(user.map2);
    }
}