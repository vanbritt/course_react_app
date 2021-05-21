import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Home from "./Home";
import Course from "./Course";
import CourseDetails from "./CourseDetails";
import AddEnquiry from "./AddEnquiry";
import Enquiry from "./Enquiry";
import NotFound from "./NotFound";

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
          <div className="container-fluid">
            <Link className="nav-link" to="/">
              Edureka
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/course">
                  Courses
                </Link>
                <Link className="nav-link" to="/enquiry">
                  Enquiries
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/course" component={Course} />
            <Route path="/course/:courseId" component={CourseDetails} />
            <Route exact path="/enquiry" component={Enquiry} />
            <Route path="/addEnquiry/:courseId" component={AddEnquiry} />
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
