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


// Postfix expression using a stack

function applyOperator(op, num1, num2) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return Math.floor(num1 / num2); // Integer division
        default:
            return null;
    }
}

function evaluatePostfix(exp) {
    const stack = new Stack();
    

    for (let char of exp) {
        if (!isNaN(char)) {
            // Push numbers onto the stack
            stack.push(parseInt(char));
        } else {
            // Operator encountered
            // Pop top two numbers from stack
            const right = stack.pop();
            const left = stack.pop();
            // Apply operator to operands and push result back to stack
            const result = applyOperator(char, left, right);
            stack.push(result);
        }
    }
    // Final result is at the top of the stack
    return stack.pop();
}
