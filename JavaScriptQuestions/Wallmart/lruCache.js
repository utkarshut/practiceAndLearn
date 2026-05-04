class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  // add
  // remove
  // move to head
  // check capacity
  add(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }
  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    let node = this.map.get(key);
    this.remove(node);
    this.add(node);
    return node.value;
  }
  put(key, value) {
    if (this.map.get(key)) {
      let node = this.map.get(key);
      this.remove(node);
      node.value = value;
      this.add(node);
    } else {
      let node = new Node(key, value);
      this.map.set(key, node);
      this.add(node);
      if (this.map.size > this.capacity) {
        let lru = this.tail.prev;
        this.remove(lru);
        this.map.delete(lru.key);
      }
    }
  }
  print() {
    let curr = this.head.next;
    let res = [];
    while (curr !== this.tail) {
      res.push(`${curr.key}:${curr.value}`);
      curr = curr.next;
    }
    console.log("Cache:", res.join(" -> "));
  }
}

let cache = new LRUCache(2);

cache.put(1, 1);
cache.print();

cache.put(2, 2);
cache.print();

console.log("get(1):", cache.get(1)); // 1
cache.print();

cache.put(3, 3); // removes 2
cache.print();

console.log("get(2):", cache.get(2)); // -1

cache.put(4, 4); // removes 1
cache.print();

console.log("get(1):", cache.get(1)); // -1
console.log("get(3):", cache.get(3)); // 3
console.log("get(4):", cache.get(4)); // 4
cache.print();
