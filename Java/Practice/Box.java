package Practice;
public class Box {
    private Object object;

    Box(Object object){
        this.object = object;
    }

    public Object getValue(){
        return this.object;
    }
}
