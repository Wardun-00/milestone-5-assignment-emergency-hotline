# JavaScript Questions and Answers

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById: gets a single element using its ID. IDs are unique.  
getElementsByClassName: gets all elements with a certain class. Returns a collection.  
querySelector: gets the first element that matches a CSS selector.  
querySelectorAll: gets all elements that match a CSS selector

2. How do you create and insert a new element into the DOM?

First, create a new element using document.createElement.  
Then, add text or attributes if needed.  
Finally, put it inside a parent element using appendChild or insertBefore.

3. What is Event Bubbling and how does it work?

Event bubbling means an event starts at a child element and goes up to its parent elements.  
It goes from inside to outside

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is when you put an event listener on a parent element to handle events on its children.  
It is useful when you add new elements later and don’t want to add separate listeners for each.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault(): stop the normal action of an event, like stopping a link from opening.  
stopPropagation()- stop the event from going up to parent elements
