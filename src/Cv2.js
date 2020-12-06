import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pdf from 'react-to-pdf';

const ref = React.createRef();

class Cv2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 18,
      phone: ""
    };
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  SubmitForm = () => {
  }

  render() {
    return (
        <div className="container-fluid">
        <h1>Cv2</h1>
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
          <div className="col-lg-6" ref={ref}>
            <h3>Hien thi</h3>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
            <p>Phone: {this.state.phone}</p>
          </div>
          <Pdf targetRef={ref} filename= 'post.pdf'>
            {({toPdf}) => <button onClick={toPdf}>Capture as PDF</button>}
        </Pdf>
        </div>
      </div>
    )
        
    
      
  }
}

export default Cv2;
