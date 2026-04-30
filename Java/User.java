import java.util.*;

public class User implements Comparable<User> {
    String name;
    int age;

    User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String toString() {
        // static class cant access non static variable
        return this.name + "-" + this.age;
    }

    public int compareTo(User user) {
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
        // list.sort(Comparator.comparing(u -> u.age));
        // Collections.sort(list);
        list.sort(null);
        System.out.println(list);
        System.out.println(user1.toString());
        System.out.println("Hi");
        List<User1> list1 = new ArrayList<>();
        list1.add(new User1(1,2,"Utk"));
        list1.add(new User1(2,5,"Aka"));
        list1.add(new User1(3,1,"Shu"));
        Collections.sort(list1,Comparator.comparing(User1::getSalary)
        .thenComparing(Comparator.comparingInt(User1::getAge).reversed()));
        System.out.println(list1);
    }
}

class User1 {
    int salary;
    int age;
    String name;

    User1(int salary, int age, String name) {
        this.salary = salary;
        this.age = age;
        this.name = name;
    }

    public int getSalary() {
        return salary;
    }
    public int getAge() {
        return age;
    }

    public String toString() {
        return name + "-" + salary + "-" + age;
    }
}