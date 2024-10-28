// Inserion at tail
 
function insertAtTail(data) {
    let nodeElement = new Node(data)

    if(isEmpty){
        this.head = nodeElement
        return this
    }

    let currentNode = this.head
    while(currentNode.nextElement !== null) {
        currentNode = currentNode.nextElement
    }
    currentNode.nextElement = nodeElement
    return this

}

// Solution two
class LinkedList {
    constructor() {
        this.head = null;  // Initially, the list is empty
    }

    // Function to check if the list is empty
    isEmpty() {
        return this.head === null;
    }

    // Function to insert a new node at the tail of the list
    insertAtTail(data) {
        let nodeElement = new Node(data);  // Create a new node

        // If the list is empty, set the head to the new node
        if (this.isEmpty()) {
            this.head = nodeElement;
            return this;  // Return the updated list
        }

        // Traverse to the end of the list
        let currentNode = this.head;
        while (currentNode.nextElement !== null) {
            currentNode = currentNode.nextElement;
        }

        // Append the new node at the end of the list
        currentNode.nextElement = nodeElement;
        return this;  // Return the updated list
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.nextElement = null;  // Initially, the next node is null
    }
}


// Search in a singly linked list

class Node {
    constructor(data) {
        this.data = data;
        this.nextElement = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }
   

    isEmpty() {
        return this.head === null;
        return
    }

    // function that seacrhes for a particular item in the linked list
    searchForAnItem(data) {
        // Check if the list is empty
        if (this.isEmpty()) {
            return 'List is empty';
        }
    
        let currentNode = this.head;
    
        // Traverse through the list to find the item
        while (currentNode !== null) {
            if (currentNode.data === data) {
                return 'Item found';
            }
            currentNode = currentNode.nextElement;  // Move to the next node
        }
    
        // If the item is not found after traversing the list
        return 'Item not found in the list';
    }

    // function to delete a value once found in the linked list

    deleteValue(data) {
        if(this.isEmpty()) {
            return
        }
        let currentNode = this.head
        let firstNode = currentNode

        // loop through the list to find the node and delete it
        while(currentNode !== null) {
            if(currentNode.data === item){
                firstNode.nextElement = currentNode.nextElement
                return true
            }
            firstNode = currentNode
            currentNode = currentNode.nextElement
        }
        
        return 'Item not found'
    }

    linkedListLength() {
        let currentNode = this.head
        let length = 0

        while(currentNode !== null){
            linkedListLength++
            currentNode = currentNode.nextElement
        }
        return linkedListLength
    }

    reverseList(head) {
        let previousNode = null; // Maintain track of the previous node
        let currentNode = head; // The current node
        let nextNode = null; // The next node in the list
        // Reversal process
        while (current) {
          nextNode = currentNode.next;
          current.next = previousNode;
          previousNode = currentNode;
          currentNode = nextNode;
        }
        // Set the last element as the new head node
        head = previous;
      
        return head;

    }

    detectCycle(head) {
        let p1 = head;
        let p2 = head;
        while(p1!=null && p2!=null && p2.nextElement!=null){ 
            p1 = p1.nextElement // Moves one node at a time
            p2 = p2.nextElement.nextElement // Moves two nodes at a time
            if (p1 == p2){ // Loop exists
            return true;
            }
        }
        return false;
       
    }

    findMiddle(head) {
        let slow = head;
        let fast = head;
      
        while (fast !== null && fast.next !== null) {
          slow = slow.next;
          fast = fast.next.next;
        }
      
        return slow; // Slow pointer will be at the middle node
    }

    removeDuplicates(head) {
        if (!head) {
          return null;
        }
      
        //If list only has one node, leave it unchanged
        if (head.next == null) {
          return head;
        }
      
        let outerNode = head;
        while (outerNode != null) {
          let innerNode = outerNode; // Iterator for the inner loop
          while (innerNode != null) {
            if (innerNode.next != null && outerNode.data == innerNode.next.data) { //Duplicate found ahead
              innerNode.next = innerNode.next.next; // Remove duplicate
            } else {
              innerNode = innerNode.next; // Otherwise simply iterate ahead
            }
          }
          outerNode = outerNode.next;
        }
      
        return head;
      }
    
}