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

packages installed:
- react
- react-redux
- redux-devtools
- redux-promise

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

- in src/reducders/index.js, we import combineReducers from Redux
- combineRedux melts all of our reducers into one
- we need just one reducer as the Store counterpart accepts only one reducer as an argument, the rootReducer
- Now we have a constant called rootReducer which we can export
- Reducers have two arguments,

1. The current state which we initially set to an empty Object {}
2. An action

Actions
- payloads of information that send data from your application to your store.
- they are the only source of information for the store
- The action will return a plain object which contains the following:

1. Action type
it’s for the reducer to recognize our action.
2. Payload
in this case the data we fetched from the endpoint.

because our payload is the axios request we are making, we must install middleware (redux-promise) since redux doesnt know how to deal with asynchronous actions

- actions and reducers are connected by default by Redux

Connecting React with Redux

- Import the connect method from react-redux and at the bottom export the method. Connect() accepts two arguments, mapStateToProps and mapDispatchToProps

- mapStateToProps 
Does exactly what it says. It maps the redux state to react props.

- mapDispatchToProps 
Converts our redux actions into react props.

- Why is our first argument inside the connect a null?

- The connect method expects a mapStateToProps function to be passed. But we haven’t written it yet. So we pass a temporary null.

- mapStateToProps
mapStateToProps is a special function which maps Redux state to React props. In this case we fetch the data and from the container and pass it down to a child via props.

- mapDispatchToProps
mapDispatchToProps lets us map our actions to props. In this case it is fetching our data.

Implementing Actions

Here’s three things we need to do to call our action and finally get our data.

1. Import the action from src/actions/fetch_data.js.
2. Pass our action as an argument inside the connect function.
3. Call the action inside a React lifecycle method. In this case it is ComponentDidMount().