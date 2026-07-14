import java.util.HashMap;
import java.util.Map;

public class Lru<K,V> {
    private final Map<K, Node<K, V>> cache;
    private final Node<K, V> head;
    private final Node<K, V> tail;
    private int capacity;
    static class Node<K, V> {
       K key;
       V value;
       Node<K, V> prev;
       Node<K, V> next;
        Node(K key, V value){
           this.key = key;
           this.value = value;
        }
    }
    Lru(int capacity){
        this.capacity = capacity;
        this.cache = new HashMap<>();
        head = new Node<>(null, null);
        tail = new Node<>(null,null);
        head.next = tail;
        head.prev = null;
        tail.next = null;
        tail.prev = head;
    }
    private void moveToEnd(Node<K,V> node){
        Node<K,V> currentlast = tail.prev;

        currentlast.next = node;
        node.prev = currentlast;
   
        node.next = tail;
        tail.prev = node;
    }

    private void removeNode(Node<K,V> node){
        Node<K,V> prev = node.prev;
        Node<K,V> next = node.next;

        prev.next = next;
        next.prev = prev;
    }

    public V get(K key){
        Node<K, V> node = cache.get(key);
        if (node == null) {
            return null;
        }
        this.removeNode(node);
        this.moveToEnd(node);

        return node.value;
    }
   
    public void put(K key, V value){
        Node<K, V> existing = cache.get(key);

        if(existing != null){
            existing.value = value;
            moveToEnd(existing);
            return;
        }
       Node<K, V> newNode = new Node<>(key, value);
       cache.put(key, newNode);
       this.moveToEnd(newNode);

       if (cache.size() > capacity) {

            Node<K, V> lruNode = head.next;

            removeNode(lruNode);

            cache.remove(lruNode.key);
        }

    }

    public void printCache() {
        Node<K, V> curr = head.next;

        while (curr != tail) {
            System.out.print("(" + curr.key + "," + curr.value + ") ");
            curr = curr.next;
        }

        System.out.println();
    }

    public static void main(String[] args) {

        Lru<Integer, String> cache = new Lru<>(3);

        cache.put(1, "A");
        cache.put(2, "B");
        cache.put(3, "C");

        cache.printCache();

        cache.get(1);

        cache.printCache();

        cache.put(4, "D");

        cache.printCache();
    }


}
