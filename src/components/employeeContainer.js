import React, { Component } from "react";
import Container from './container/container';
import SearchForm from './searchform/searchfrom';
import axios from "axios";
import SearchResults from "../components/SearchResults";
import CardContainer from "../components/CardContainer/CardContainer";
import Footer from "./footer";
const BASEURL = "https://randomuser.me/api/?results=30";


class EmployeeContainer extends Component{
  // declaring state
    state = {
        results :[],
        search : "",
        newResults :[]
    };
    // calling srach employee when page is ready so that page did not come blank.
    componentDidMount() {
        this.searchEmployee("");
      }
      // searchEmployee get the random user form the randomuser.me 
      searchEmployee = query =>{
          axios.get(BASEURL)
          .then(res=>//seeting the serult of api call to results state
          this.setState({results: res.data.results})
          
          ) // if error catches then console.log()
          .catch(err => console.log(err))
         
      };

    // handleInputchange change the search value of state on changing input
      handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        });
      };
      // sortResults is to sort the result in alphabetical order on the basis of first name of the user.
      sortResults = ()=>{
        const newList = this.state.results.sort(function (a,b){
          // comparing and arrenging results
          if (a.name.first.toLowerCase()<b.name.first.toLowerCase()) return -1;
          if (a.name.first.toLowerCase()>b.name.first.toLowerCase()) return 1;
          return 0; 
        })  // I think this is not necesary to set state again because I am duplicating the original array.
        // if it works don't touch it. 
          this.setState({results: newList})
         // console.log(newList)
      }

      handleFormSubmit = event => {
        event.preventDefault()
    }

      render(){
          return( 
            <>
              <Container >
                  <SearchForm 
                   value={this.state.search}
                  handleInputChange={this.handleInputChange}
                   handleFormSubmit={this.handleFormSubmit}
                   sortResults = {this.sortResults}
                   />
                   <CardContainer>
                   <SearchResults results={this.state.results} state = {this.state} />
                   </CardContainer>
                   
                  </Container>
                  <Footer />
                  </>
          );
      }
}
export default EmployeeContainer;