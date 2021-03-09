import React from 'react';
import axios from 'axios';

class NoteMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: this.props.data, review: '', reloadReviews: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      console.log(this.state.title + "this is the line of the code")
  }


  handleChange(event) {
  this.setState({review: event.target.value});
}

    handleSubmit(event) {
      alert('An essay was submitted: ' + this.state.review);
      event.preventDefault();

      console.log("button clicked")
        // this.setState({booktitle: event.target.value});
        fetch('http://localhost:3000/notes/' , {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(this.state)
  })
  .then((result) => result.json())
  .then((info) => { console.log(info); })
    }

 render() {

  return (
  <div className="">
  <h3> form</h3>

  <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
  </div>
  )
 }
}
export default NoteMaker;
