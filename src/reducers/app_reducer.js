export default function(state = {}, action) {
   //Reducers have two arguments -- the current state and the action

   //Reducers will always return the next state


   // we are adding switch() statement which will check what actions were fired off and act accordingly
   switch(action.type) {
      case "FETCH_DATA":
         const newState = Object.assign({}, ...state, action.payload.data)

         return newState;
         
      default:

         return state;
   }

}

//In the reducer, we are checking if the type:"FETCH_DATA" action was fired off, if so we return a new state

//we are using the spread operator, we pass our state inside a new array with the action.payload which is the requested data