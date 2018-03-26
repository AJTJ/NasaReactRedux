import axios from "axios";

export default function fetchData() {
   const apiKey = "3EJHHRTverYZUKzf5e6mzedjv7Cu1f8AONbDejFO";
   const endPoint = "https://api.nasa.gov/planetary/apod?api_key=";
   const request = axios.get(endPoint+apiKey);

   return { //return plain object with props
      type: "FETCH_DATA", //Action Type
      payload: request // Action Payload (cargo)
   }


}

//because our payload is the axios request we are making, we must install middleware (redux-promise) since redux doesnt know how to deal with asynchronous actions

//In the reducer, we are checking if the type:"FETCH_DATA" action was fired off, if so we return a new state

