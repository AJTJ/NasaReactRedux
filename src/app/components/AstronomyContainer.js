import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import axios from "axios";

class AstronomyContainer extends Component {
   constructor() {
      super();
      this.state = {
         astronomy: []
      }
   }

   componentDidMount() {
      //use nasa api in order to pull current astronomy information
      const apiKey = "3EJHHRTverYZUKzf5e6mzedjv7Cu1f8AONbDejFO";
      const endPoint = "https://api.nasa.gov/planetary/apod?api_key=";

      //use axios to grab todays astronomy information
      axios.get(endPoint+apiKey)
         .then(response => {

            this.setState({
               astronomy: response.data
            })

         })
         .catch(error => {
            console.log(error, "failed to fetch data")
         });

   
   }

   render() {
      //destructure state to the value of astronomy
      const { astronomy } = this.state;
      return (
         
         <AstronomyCard data={astronomy} />
         
      )
   }
}

export default AstronomyContainer;