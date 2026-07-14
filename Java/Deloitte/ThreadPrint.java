
public class ThreadPrint {
    // Print Odd-Even Using Two Threads
    private static final Object lock = new Object();
    private static int number = 1;
    static Thread t1;
    static Thread t2;

    public static void main(String[] args) {
        try {
            t2 = new Thread(() -> {
                while (number <= 10){
                    synchronized (lock) {
                        if (number % 2 == 0) {
                            System.out.println(number);
                            try {
                                lock.wait();
                            } catch (Exception e) {

                            }
                        }
                     number++;
                     lock.notifyAll();
                    }
                }
            });
            t1 = new Thread(() -> {
                while (number <= 10){
                    synchronized (lock) {
                        if (number % 2 != 0) {
                            System.out.println(number);
                            try {
                                lock.wait();
                            } catch (Exception e) {

                            }
                        }
                        number++;
                     lock.notifyAll();
                    }
                }
            });
            t1.start();
            t2.start();

        } catch (Exception e) {

        }
    }
}
