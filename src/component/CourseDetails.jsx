import React, { Component } from 'react'
const url = "http://localhost:6800/courses";

export class CourseDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            detaildata: JSON
        }

    }
    componentDidMount(){
        console.log(this.props.match.params.courseId);
        fetch(`${url}/${this.props.match.params.courseId}`, { method: 'GET'})
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          this.setState({
            detaildata: data
          });
        })
        .catch((err) => {
          console.log(JSON.stringify(err));
        });


    }
    render() {
        return (
            <div className="row">
            <div className="col-md-6">
                    <h1>{this.state.detaildata.name}</h1>
                    <img src={this.state.detaildata.img} alt={this.state.detaildata.name} className="img-responsive"/>
            </div>
            <div className="col-md-6">
                <h2>Description</h2>
                <p>{this.state.detaildata.description}</p>
            </div>

        </div>
        )
    }
}

export default CourseDetails
