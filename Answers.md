1. What problem does the context API help solve?

Context API helps solve prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are the information sent to reducers. Actions includes a type property and a possible payload.
Reducers are functions that determine changes to state based on the actions it receives. These changes are pre-determined.
The store is an object set up to hold state. It is known as a single source of truth because it is a "master" state that is sent down to all children.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state stored on the app's global scope, and is best used when multiple components need that state. 
Component state is state stored on the individual component scope, and is best used when only specific components need that state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a function within a function that can be executed at a later time (when we call it). It allows us to perform asynchronous operations.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API state management is my favorite because of how simple it is to learn and utilize. The only concern I have is whether or not it can do all the cool things Redux can.
