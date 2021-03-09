import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import Header from './Header';
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import Notes from './Notes.js'
import './Reviews.css'

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentURL: '', url: '', title: '', authors: [], cover: '', description: ''};
    this.updateState = this.updateState.bind(this)
      console.log("current url is: " + this.state.currentURL)
  }

  updateState(childData){
    console.log("button clicked")
    this.setState({currentURL: childData})
  }

  // fetchpage(){
  //   const baseUrl = `http://localhost:3000/books/${this.state.result}`
  // this.state.result &&  axios.get(baseUrl).then((response) => {
  //      const info = (response.data)
  //      console.log(info)
  //
  //
  // }
  // )
  //
  // }
  componentDidMount() {
    const currentPath = window.location.pathname
    const result = currentPath.slice(9);
    console.log(result)
    this.setState({url: result})

    const baseUrl = `http://localhost:8080/books/${result}`
    axios.get(baseUrl).then((response) => {
      const info = (response.data)
      console.log(info)

      const titleResponse = info["title"]
      const authorsResponse = info["authors"]
      console.log(authorsResponse)
      const coverResponse = info["cover"]
      const descriptionResponse = info["description"]

      this.setState({title: titleResponse})
      this.setState({authors: authorsResponse})
      this.setState({cover: coverResponse})
      this.setState({description: descriptionResponse})

    })

  }



 render() {
console.log('this is working', this.props.params)
  // let categoryId = this.props.match.params.categoryId;

  return (
  <div className="">



<div className="reviewsContainer">
   <div className="bookPage">
    <h1> {this.state.title}</h1>
    By: {this.state.authors.map((author) =>
      <h3 key={author}> {author}, </h3>
    )}
    <p> {this.state.description}</p>
    {<img src={ this.state.cover } />}
   </div>
    <div className="notesPage">
      <Notes dataFromParent = {this.state.title}/>
    </div>
  </div>
  </div>
  )
 }
}
export default Reviews;

function Profile(props) {
  const [currentURL, setCurrentURL] = useState();
  const [title, setTitle] = useState();
  const [authors, setAuthors] = useState([]);
  const [cover, setCover] = useState();
  const [description, setDescription] = useState();
  const [info, setInfo] = useState();

  const [fact, setFact] = useState(null);
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    let counter = 0;
    console.log(counter++)
    const searchParams = new URLSearchParams(location.search);
    console.log(currentPath)

    const result = currentPath.slice(9);
    console.log(result)
      setCurrentURL(result)

  }, []);
console.log(currentURL)
 console.log(props.dataToUpdte("heyhey"))

      // this.setState({booktitle: event.target.value});

      const baseUrl = `http://localhost:3000/books/${currentURL}`
      // currentURL && axios.get(baseUrl).then((response) => {
      //    const info = (response.data)
      //    console.log(info)
      //
      //    const titleResponse = info["title"]
      //    const authorsResponse = info["authors"]
      //    const coverResponse = info["cover"]
      //    const descriptionResponse = info["description"]
      //
      //    setTitle(titleResponse)
      //    setAuthors(authorsResponse)
      //    setCover(coverResponse)
      //    setDescription(descriptionResponse)
      //
      // }, (error) => {
      //   console.log(error)
      // })


  //     function toStop(){
  //       if(currentURL !== null){
  //         setChecher(false)
  //       }
  //     }
  // if(currentURL !== null){
    // console.log("there is data in there")
    // useEffect(() => {
    // currentURL && axios.get(baseUrl)
    //         .then((response) => {
    //           const info = (response.data)
    //           console.log(info)
    //           setInfo(info)
    //         });
    //
    //   }, [])
  // }

   // useEffect(() => {
   //  currentURL &&   axios.get(baseUrl)
   //          .then((response) => {
   //            const info = (response.data)
   //            console.log(info)
   //            // setInfo(info)
   //          });
   //
   //      },[])



      function deleteBook(e) {
        // const baseUrl = `http://localhost:3000/books/${currentURL}`
        // axios.delete(baseUrl).then((response) => {
        // //    const info = (response.data)
        // //    console.log(info)
        // //    const titleResponse = info["title"]
        // //    const authorsResponse = info["authors"]
        // //    const coverResponse = info["cover"]
        // //    const descriptionResponse = info["description"]
        // //
        // //    setTitle(titleResponse)
        // //    setAuthors(authorsResponse)
        // //    setCover(coverResponse)
        // //    setDescription(descriptionResponse)
        // //
        // }, (error) => {
        //   console.log(error)
        // })
//         axios({
//   method: 'DELETE',
//   url: 'baseUrl',
//   headers: { 'Content-Type': 'application/json' },
// }).then((result) => result.json());
   // clearing the values

 }

  return (
    <div>

      <h1>{title}</h1>

      {authors.map((author) =>
        <h3 key={author}>By: {author} </h3>
      )}
      <p>{description}</p>
      {<img src={cover} />}

    </div>

  );
}
