import React, { Component } from "react";
import EnquiryList from "./EnquiryList";

const url = "http://localhost:6800/enquiries";

export class Enquiry extends Component {
  constructor() {
    super();
    this.state = {
      title: "List of Enquiries",
      data: [],
    };
  }

  componentDidMount() {
    fetch(url, { method: 'GET'})
      .then((res) => res.json())
      .then((data) => {
          console.log(data);
        this.setState({
          data: data
        });
      })
      .catch((err) => {
        console.log(JSON.stringify(err));
      });
  }
  render() {
    return (
      <div >
        <h1>{this.state.title}</h1>
        <EnquiryList enquiryList={this.state.data}/>
      </div>
  );
  }
}

export default Enquiry;
