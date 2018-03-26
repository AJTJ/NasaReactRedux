import React, { Component } from "react";
import AstronomyCard from "./AstronomyCard";
import { connect } from "react-redux";
import fetchData from "../../actions/fetch_data";
// import axios from "axios";

class AstronomyContainer extends Component {
   // constructor() {
   //    super();
   //    this.state = {
   //       astronomy: []
   //    }
   // }

   componentDidMount() {
      // //use nasa api in order to pull current astronomy information
      // const apiKey = "3EJHHRTverYZUKzf5e6mzedjv7Cu1f8AONbDejFO";
      // const endPoint = "https://api.nasa.gov/planetary/apod?api_key=";

      // //use axios to grab todays astronomy information
      // axios.get(endPoint+apiKey)
      //    .then(response => {

      //       this.setState({
      //          astronomy: response.data
      //       })

      //    })
      //    .catch(error => {
      //       console.log(error, "failed to fetch data")
      //    });

      // console.log(this.props.astronomy);
      this.props.fetchData();

   
   }

   render() {
      //destructure state to the value of astronomy
      // const { astronomy } = this.state;
      return (
         
         <AstronomyCard data={this.props.astronomy} />
         
      )
   }
}

//connect react with redux

//@params mapStateToProps (necessity)

//@params mapDispatchtoProps (optional)

function mapStateToProps(state) {
   return { astronomy: state.astronomy };
}

export default connect(mapStateToProps, { fetchData })(AstronomyContainer);

// Import the connect method from react-redux and at the bottom export the method. Connect() accepts two arguments, mapStateToProps and mapDispatchToProps

// mapStateToProps 
// Does exactly what it says. It maps the redux state to react props.

// mapDispatchToProps 
// Converts our redux actions into react props.

// Why is our first argument inside the connect a null?

// The connect method expects a mapStateToProps function to be passed. But we haven’t written it yet. So we pass a temporary null.

// mapStateToProps
// mapStateToProps is a special function which maps Redux state to React props. In this case we fetch the data and from the container and pass it down to a child via props.

// mapDispatchToProps
// mapDispatchToProps lets us map our actions to props. In this case it is fetching our data.