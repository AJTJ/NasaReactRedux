# Chapter 5!

https://medium.com/@wesharehoodies/simple-beginner-guide-for-webpack-2-0-from-scratch-part-v-495dba627718

## How to start

```bash
npm install
```

```
npm run start
```

```
npm run production
```

```
npm run build
```


Notes//

-Class Based Component will carry the state
-We need state because we need a way to save what's happening with our dynamic application 

E.g.
we have a counter with a starting number at zero. The initial state is zero. The user clicks on the button. Hmm… what next? How are we gonna fit the pieces together and more importantly increment or decrement the number? We need some kind of dynamic mechanism to represent our actions and convert it into representational feedback/data. We call it State. Once you use state — you can’t live without it. 💪


Redux 
-a predictable state container for javascript apps
-we let redux to manage the state of our app and React to handle the presentation UI (User Interface). It decouples state responsibilities from React

-in order to use redux, you need to install redux for its whole functionality library
-you will need to install react-redux to use as the glue for react and redux

The Store 
- Redux terminology
- A store is a big object {} which holds the state of our application.
- Brings our actions and reducers together
- has  the following responsiblities
   - Holds application state
   - Allows access to state via getState()
   - Allows state to be updated via dispatch(ac tion)
   - Registers listeners via subscribe(listener)
   - Handles unregistering of listeners via the function returned by subscribe(listener)
- the Provider expects only one prop, which is the store property

- In this project, we import the store and pass it as a prop to the Provider

Reducers
- Handle the logic that will happen to the state.
- Let’s say a user clicks a button, what happens next are the following steps:

1. An action type called "BUTTON_CLICKED" launches off an action with the payload. The action returns a plain object.
2. All reducers will be invoked. The reducer with the type "BUTTON_CLICKED" will be further invoked to return the new state. The payload is passed by the action . All reducers by default return the state.
3. The store listens for any changes in the reducers and holds the new state.
4. The store passes the new state to our React views.
5. React updates the view.