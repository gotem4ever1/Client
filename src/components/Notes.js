import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import ReviewForm from './ReviewForm'
import NoteMaker from './NoteMaker'
import './Notes.css'


class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', reviewsInfo: [''], reviews: [] , button: false ,formRenderer: false};
    this.handleBackEnd = this.handleBackEnd.bind(this)
    this.makeReview = this.makeReview.bind(this)
    this.settinPage = this.settinPage.bind(this)
    this.getbutton = this.getbutton.bind(this)
console.log(this.state.reviews)
  }


  handleBackEnd() {
    console.log("button clicked reviews")
    const url = '6041f5e00914901cdc48b5c7'
      // this.setState({booktitle: event.target.value});
      const baseUrl = `http://localhost:8080/reviews/`
      axios(baseUrl).then((response) => {
         const info = (response.data)
         console.log(info)
           info.map((book) => {
             console.log(book.title)
             console.log(this.props.dataFromParent)
             if (book.title === this.props.dataFromParent){
               console.log(book.review)
               this.setState({reviewsInfo: book})
               this.setState({title: book.title})
               // this.setState({reviews: book.review})
               this.state.reviews.push(book.review)
               this.setState({button: true})
             }else{
               this.setState({title: this.props.dataFromParent})
               this.setState({button: true})
             }
           })

      })
  }
  getNotesBackEnd() {
    console.log("button clicked reviews")
    const url = '6041f5e00914901cdc48b5c7'
      // this.setState({booktitle: event.target.value});
      const baseUrl = `http://localhost:8080/notes/`
      axios(baseUrl).then((response) => {
         const info = (response.data)
         console.log(info)
           // info.map((book) => {
           //   console.log(book.title)
           //   console.log(this.props.dataFromParent)
           //   if (book.title === this.props.dataFromParent){
           //     console.log(book.review)
           //     this.setState({reviewsInfo: book})
           //     this.setState({title: book.title})
           //     // this.setState({reviews: book.review})
           //     this.state.reviews.push(book.review)
           //     this.setState({button: true})
           //   }else{
           //     this.setState({title: this.props.dataFromParent})
           //     this.setState({button: true})
           //   }
           // })

      })
  }

settinPage(){
  this.setState({title: this.props.dataFromParent } )
}

componentDidMount(){
// this.setState({title: this.props.dataFromParent } )
this.settinPage()
}

getbutton(){
  this.setState({button: true})
}
makeReview(){
    this.setState({formRenderer: true})
}

 render() {

  return (
  <div className="Notes-Container">
  <h1> Notes </h1>
  <h4>{this.props.dataFromParent}</h4>

  <div className="button-button-display">
  <button onClick={this.handleBackEnd} className="button1">Reviews</button>
  <button onClick={this.getNotesBackEnd} className="button2">Notes</button>
  </div>

<div className="create-review-notes">
{this.state.button ?
  <button onClick={this.makeReview}>Create Review</button>
:null}


  <div>
  {this.state.reviews.map((review) =>
    <p key={review}> {review} </p>
  )}
  </div>

  {this.state.formRenderer ? <ReviewForm data = {this.state.title}/> :null}
  </div>
  </div>
  )
 }
}
export default Notes;
