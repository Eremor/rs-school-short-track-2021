const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.currentNode = null;
    this.lastNode = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);

    if (this.currentNode) {
      this.lastNode.next = node;
      this.lastNode = node;
    } else {
      this.currentNode = node;
      this.lastNode = node;
    }

    this.length++;
  }

  dequeue() {
    const deleteElement = this.currentNode;

    if (this.size > 0) {
      this.currentNode = this.currentNode.next;
      this.length--;
    }

    return deleteElement.value;
  }
}

module.exports = Queue;
