import React, { Component } from "react";

import SearchIssue from "../SearchIssue";
import IssueResults from '../IssueResults';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true
    };
  }

  // componentDidMount () {
  //   this.performDoctorSearch();
  // }

  performDoctorSearch = (
    query = 'query', 
    location = ('user_location_state' + "-" + 'user_location_city'),
    api_key = process.env.API_KEY) => {
    fetch(
      `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&skip=0&limit=10&location=${location}&sort=best-match-asc&user_key=${api_key}`
    )    
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({
          results: responseData.results,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  }

  render() {
    return (
      <div className="mainSearch">
        <SearchIssue onSearch={this.performDoctorSearch} />
        <div>
          {this.state.loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              <IssueResults results={this.state.results} />
            </ul>
          )}
        </div>
      </div>
    );
  }
}
export default Main;