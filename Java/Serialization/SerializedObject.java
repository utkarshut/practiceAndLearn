import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.io.Serializable;

public class SerializedObject {
    static class Student implements Serializable{
   private Integer studentId;
   private String name;

   public Student(Integer var1, String var2) {
      this.studentId = var1;
      this.name = var2;
   }

   public Integer getStudentId() {
      return this.studentId;
   }

   public void setStudentId(Integer var1) {
      this.studentId = var1;
   }

   public String getName() {
      return this.name;
   }

   public void setName(String var1) {
      this.name = var1;
   }
}
    public static void main(String[] args) {
        try {
            Student student = new Student(1, "Utkarsh");
            FileOutputStream file  = new FileOutputStream("Foo.txt");
            ObjectOutputStream out = new ObjectOutputStream(file);
            out.writeObject(student);
            out.close();
            file.close();

            FileInputStream fileIn = new FileInputStream("Foo.txt");
            ObjectInputStream in = new ObjectInputStream(fileIn);
            Student student2 = (Student)in.readObject();
            System.out.println(student2.getName());

        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
