package Practice;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world");
        Box box1 = new Box("box1");
        String val = (String)box1.getValue();
        System.out.println(val);
        System.out.println(val.getClass().getName());
    }
}