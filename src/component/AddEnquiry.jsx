import React, { Component } from "react";
import axios from 'axios'
const url = "http://localhost:6800/enquiries";
const course_url = "http://localhost:6800/courses";

class AddEnquiry extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      courseId:this.props.match.params.courseId,
      courseName: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  componentDidMount(){
    axios.get(`${course_url}/${this.state.courseId}`).then(res => {
      console.log(res);
      this.setState({
        courseName: res.data.name
      })
    })
  }
  registerSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(this.state))
    axios.post(url,this.state).then(res => {
      console.log(res);
      alert("Enquiry Sent");
      this.setState({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    })
   // console.log(JSON.stringify(this.state));

    console.log("Submit button called");
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div class="register">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <h1 class="display-4 text-center">Inquiry Form</h1>
              <p class="lead text-center">We'll get in touch with you shortly</p>
              <form onSubmit={this.registerSubmit}>
                <div class="form-group m-1">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Full Name"
                    name="name"
                    required
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group m-1">
                  <input
                    type="email"
                    class="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group m-1">
                  <input
                    type="phone"
                    class="form-control form-control-lg"
                    placeholder="Phone"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.onChange}
                  />
                </div>
                <div class="form-group m-1">
                  <label htmlFor="message" className="form-label">
                         Leave Your message
                  </label>
                  <textarea
                    class="form-control"
                    id="message"
                    name="message"
                    onChange={this.onChange}
                    rows="3"
                    value= {this.state.message}
                  >
                   
                  </textarea>
                </div>

                <input type="submit" class="btn btn-primary btn-block mt-4" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEnquiry;
