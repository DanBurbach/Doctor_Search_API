import React, { Component } from "react";

class SearchIssue extends Component {
  state = {
    searchText: ""
  };

  IssueSearchChange = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  handleSubmitIssue = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchText);
    // event.currentTarget.reset();
  };

  render() {
    return (
      <div className="inquire_issue">
        <form id="issueSearch" onSubmit={this.handleSubmitIssue}>
          <h4>Enter your Medical Issue here:</h4>
          <input
            type="text"
            id="query"
            className="form-input"
            onChange={this.IssueSearchChange}
          />
          <h4>Please enter your location here:</h4>
          City:
          <input
            type="text"
            id="user_location_city"
            className="form-input"
            onChange={this.IssueSearchChange}
            value="Portland"
          />
          State:
          <select required id="user_location_state" className="form-input" defaultValue="or">
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
            <option value="or">Oregon</option>
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
          <button className="btn-info" type="submit" id="issueSubmit">
            Search Issue
          </button>
        </form>
      </div>
    );
  }
}

export default SearchIssue;
