// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
function ListNode(val, next) {
	this.val = val || 0;
	this.next = next || null;
}

class LinkedList {
	constructor(head) {
		this.head = head || null;
	}

	addNode(node) {
		if (!this.head) {
			this.head = node;
		} else {
			let curr = this.head;
			while (curr.next) {
				curr = curr.next;
			}
			curr.next = node;
		}
	}

	printList() {
		let curr = this.head;
		while (curr) {
			console.log(curr.val);
			curr = curr.next;
		}
	}
}

var addTwoNumbers = function (l1, l2) {
	console.log(l1);
	console.log(l2);
};

let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);

let node1 = new ListNode(2);
let node2 = new ListNode(5);
// node1.next = node2;

let list = new LinkedList(node1);
list.addNode(node2);

addTwoNumbers(list, [5, 6, 4]);

// console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
// console.log(addTwoNumbers([2,4,3]))
