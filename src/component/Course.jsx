import React, { Component } from "react";
import CourseList from "./CourseList";

const url = "http://localhost:6800/courses";
export class Course extends Component {
  constructor() {
    super();
    this.state = {
      title: "Course Details",
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
      <div className="row">
        <h1>{this.state.title}</h1>
        <CourseList courseList={this.state.data} />
      </div>
    );
  }
}

export default Course;
