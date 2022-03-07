class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) return null;
    const target = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = target.next;
    this.length--;
    return target.val;
  }

  size() {
    return this.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.size();
