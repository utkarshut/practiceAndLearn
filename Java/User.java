import java.util.*;
public class User implements Comparable<User>{
    String name;
    int age;
    User(String name , int age){
     this.name = name;
     this.age = age;
    }
    public String toString(){
        // static class cant access non static variable 
        return this.name+"-"+this.age;
    }
    public int compareTo( User user){
          return user.age - this.age;
    }

    public static void main(String args[]){
        User user1 = new User("Utkarsh",30);
        User user2 = new User("Akash",31);
        List<User> list = new ArrayList<>();
        list.add(new User("A", 30));
        list.add(new User("B", 20));
        list.add(new User("C", 25));
        // Collections.sort(list, comparator);
        //list.sort(Comparator.comparing(u -> u.age));
        // Collections.sort(list);
        list.sort(null);
        System.out.println(list);
        System.out.println(user1.toString());
        System.out.println("Hi");
    }
}