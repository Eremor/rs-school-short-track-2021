/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.index = 0;
    this.stack = {};
  }

  push(element) {
    const index = ++this.index;
    this.stack[index] = element;
  }

  pop() {
    let deleteElement;

    if (this.index) {
      deleteElement = this.stack[this.index];

      delete this.stack[this.index];
      this.index--;
    }

    return deleteElement;
  }

  peek() {
    return this.stack[this.index];
  }
}

module.exports = Stack;
