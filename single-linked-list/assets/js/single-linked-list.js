/** 
 Author : Build Rise Shine 

  Created : 2023 

  Script : Single Linked List 

  Description : Implementation of single Linked List Data Structure

    The LinkedList class represents a custom implementation of a singly linked list data structure 
    in JavaScript. It provides methods to perform various operations on the linked list, such as adding 
    elements to the end or beginning, removing elements from the end or beginning, accessing elements 
    by index, updating elements, inserting elements at a specific index, and reversing the linked list. 
    
    The linked list is a linear data structure consisting of nodes, where each node contains a value and 
    a reference to the next node. The example demonstrates how to create an instance of the LinkedList 
    class and perform basic linked list operations on it.

  (c) Copyright by BRS Studio. 
**/

// Class for creating a Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Class for Linked List
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // add to end
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove from end
  pop() {
    if (!this.head) return undefined;
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // add to beginning
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // remove from beginning
  shift() {
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    temp.next = null;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(index, value) {
    let nodeToUpdate = this.get(index);
    if (nodeToUpdate) {
      nodeToUpdate.value = value;
      return true;
    }
    return false;
  }

  // based on given index
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  // based on index
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const before = this.get(index - 1);
    const temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  // reverse the LL
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

// Implementation
let myLinkedList = new LinkedList(25);

myLinkedList.push(50);
myLinkedList.push(21);
myLinkedList.push(11);
myLinkedList.push(33);
// myLinkedList.pop();
// myLinkedList.unshift(44)
// myLinkedList.shift()
myLinkedList.reverse()

console.log(myLinkedList);
// const llIndex = myLinkedList.get(3);
// console.log(llIndex);
