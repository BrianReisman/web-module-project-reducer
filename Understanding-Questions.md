# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick handler function invoked the dispatch function passing it the action with the payload of the number
* The action returns an object with the type of ADD_ONE.
* When this action object reaches the reducer the switch statement sends it to the appropriate case which returns an object that will be state
* The object is an exact copy of state, but the state's total: property is what it was + 1.
* That whole object because the state.

* TotalDisplay shows the total plus 1.
