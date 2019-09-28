import React, { Component } from "react";

// import { Doctor } from "./doctor.js";
// import { positiveResultIssue, positiveResultName } from "./BDApi";

// const doctors = new Doctor;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      loading: true
    };
  }

  componentDidMount () {
    this.performDoctorSearch();
  }


  performDoctorSearch = (query = 'query', location = ('user_location_state') + "-" + ('user_location_city')) => {
    fetch(
      `https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&skip=0&limit=10&location=${location}&sort=best-match-asc&user_key=${process.env.exports.apiKey}`
    )
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        results: responseData.data,
        loading: false
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  // issueSubmit (event) {
  //   event.preventDefault();
  //   // $(".doctor_result").text("");
  //   const query = ("#query").val();
  //   const location_full =
  //     ("#user_location_state").val() + "-" + ("#user_location_city").val();
  //   const location = location_full.toLowerCase();
  //   const promiseDoctor = doctors.findDoctorIssue(query, location);
  //   positiveResultIssue(query, location, promiseDoctor);
  // }

  // nameSubmit (event) {
  //   event.preventDefault();
  //   // $(".doctor_result").text("");
  //   const first_name = ("#first_name").val();
  //   const last_name = ("#last_name").val();
  //   const location_full =
  //     ("#user_location_state").val() + "-" + ("#user_location_city").val();
  //   const location = location_full.toLowerCase();
  //   const promiseDoctor = doctors.findDoctorName(first_name, last_name, location);
  //   positiveResultName(first_name, last_name, location, promiseDoctor);
  // }

  render() {
    return (
      <div>
        <div className="inquire_issue">
          <form id="issueSearch">
            <h4>Enter your Medical Issue here:</h4>
              <input type="text" id="query" className="form-input" onChange="this.value=''"/>
              <h4>Please enter your location here:</h4>
              City:
              <input type="text" id="user_location_city" className="form-input" onChange="this.value=''" value="portland"/>
              State:
              <select required id="user_location_state" className="form-input">
                <option value="al">Alabama</option>
                <option value="ak">Alaska</option>
                <option value="az">Arizona</option>
                <option value="ar">Arkansas</option>
                <option value="ca">California</option>
                <option value="co">Colorado</option>
                <option value="ct">Connecticut</option>
                <option value="de">Delaware</option>
                <option value="fl">Florida</option>
                <option value="ga">Georgia</option>
                <option value="hi">Hawaii</option>
                <option value="id">Idaho</option>
                <option value="il">Illinois</option>
                <option value="in">Indiana</option>
                <option value="ia">Iowa</option>
                <option value="ks">Kansas</option>
                <option value="ky">Kentucky</option>
                <option value="la">Louisiana</option>
                <option value="me">Maine</option>
                <option value="md">Maryland</option>
                <option value="ma">Massachusetts</option>
                <option value="mi">Michigan</option>
                <option value="mn">Minnesota</option>
                <option value="ms">Mississippi</option>
                <option value="mo">Missouri</option>
                <option value="mt">Montana</option>
                <option value="ne">Nebraska</option>
                <option value="nv">Nevada</option>
                <option value="nh">New Hampshire</option>
                <option value="nj">New Jersey</option>
                <option value="nm">New Mexico</option>
                <option value="ny">New York</option>
                <option value="nc">North Carolina</option>
                <option value="nd">North Dakota</option>
                <option value="oh">Ohio</option>
                <option value="ok">Oklahoma</option>
                <option value="or" selected>Oregon</option>
                <option value="pa">Pennsylvania</option>
                <option value="ri">Rhode Island</option>
                <option value="sc">South Carolina</option>
                <option value="sd">South Dakota</option>
                <option value="tn">Tennessee</option>
                <option value="tx">Texas</option>
                <option value="ut">Utah</option>
                <option value="vt">Vermont</option>
                <option value="va">Virginia</option>
                <option value="wa">Washington</option>
                <option value="wv">West Virginia</option>
                <option value="wi">Wisconsin</option>
                <option value="wy">Wyoming</option>
              </select>
            <button className="btn-info" id="issueSubmit">Search Issue</button>
          </form>
          </div>

          {/* <form>
            <div id="nameSearch">
              <h6>(Optional: Search by Doctor's Name and Location):</h6>
              First Name:
                <input type="text" id="first_name" className="form-input" onChange="this.value=''"/>
              Last Name:
                <input type="text" id="last_name" className="form-input" onChange="this.value=''"/>
                <button className="btn-info" id="nameSubmit">Search Name</button>
            </div>
          </form> */}

          <div className="result_area">
            <div className="doctor_result">
              <ul></ul>
            </div>
            <div className="error_message">
              <ul></ul>
            </div>
          </div>
        </div>
      );
  }
}
export default Main;