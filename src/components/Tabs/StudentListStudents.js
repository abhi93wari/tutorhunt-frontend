import React, { Component } from "react";

class StudentListStudents extends Component {

  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    const { student } = this.props;

    return (
      <div>
        {
          student.map((item) => {
            return (
              <div>Student name is : {this.state.name}</div>
            )
          })
        }
      </div>
    );
  }
}

export default StudentListStudents