import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PrintPDF from "./PrintPDF";

class Cv1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 18,
      phone: "",
      postSubmit: false,
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  SubmitForm = () => {
      this.setState({
        postSubmit: true
      })
  }

  render() {
    return !this.state.postSubmit ? (
      <div className="container-fluid">
        <h1>Cv1</h1>
        <div className="row">
          <div className="col-lg-6">
            <h3>Nhap thong tin</h3>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Age"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-lg-6">
            <h3>Hien thi</h3>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
            <p>Phone: {this.state.phone}</p>
          </div>
          <button onClick={this.SubmitForm}>PDF</button>
        </div>
      </div>
    ) : (
      <PrintPDF
        name={this.state.name}
        age={this.state.age}
        phone={this.state.phone}
      />
    );
  }
}

export default Cv1;
