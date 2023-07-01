class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* Linked List */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /* Check if the list is empty */
  isEmpty() {
    return this.size === 0;
  }

  /* To get the size of the list */
  getSize() {
    return this.size;
  }

  /* To add node at the first */
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  /* To add node at the end */
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) this.head = node;
    else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  /* To insert element at certain index */
  insert(value, index) {
    if (index < 0 || index > this.size) return false;
    if (index === 0) this.prepend(value);
    else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
      return true;
    }
  }

  /* To remove node from particular index */
  removeFrom(index) {
    if (index < 0 || index > this.size) return null;
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  /* Get all the nodes from this list */
  print() {
    if (this.isEmpty()) console.log("List is empty!");
    else {
      let list = "";
      const getValue = (node) => {
        if (node) {
          list += `${node.value}->`;
          return getValue(node.next);
        }
      };
      getValue(this.head);
      console.log("List : ", list);
    }
  }
}

const list = new LinkedList();

list.prepend(20);
list.prepend(30);
list.append(40);
list.insert(60, 0);
console.log(list.print());
console.log(list.removeFrom(2));
console.log(list.print());
console.log(list.insert(50, 2));
