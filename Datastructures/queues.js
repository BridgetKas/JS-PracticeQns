// Generate binary numbers using a queue
function findBinary(n) {
    let result = [];
    let myQueue = new Queue();
    let s1, s2;

    // Start with '1' in the queue
    myQueue.enqueue("1");

    // Loop to generate binary numbers up to 'n'
    for (let i = 0; i < n; i++) {
        // Dequeue the front element of the queue
        result.push(myQueue.dequeue());

        // Generate new binary numbers by appending '0' and '1' to the dequeued number
        s1 = result[i] + "0";
        s2 = result[i] + "1";
        
        // Enqueue the new binary numbers back into the queue
        myQueue.enqueue(s1);
        myQueue.enqueue(s2);

    }

    return result;
}

// Sort a queue
function sortStack(stack) {
    var tempStack = new Stack();
    var value;

    while (!stack.isEmpty()) {
        value = stack.pop();
        // If value is not none and larger, push it at the top of the temp_stack
        if (tempStack.isEmpty() || value >= tempStack.getTop()) {
            tempStack.push(value);
        } else {
            while (!tempStack.isEmpty() && value < tempStack.getTop()) {
                stack.push(tempStack.pop());
            }
            // Place value as the smallest element in tempStack                
            tempStack.push(value);
        }
    }
        // Transfer from tempStack => stack
    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }

    return stack;
}
