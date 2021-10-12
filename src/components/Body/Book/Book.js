import React, { Component } from "react";
import axios from "axios";
import booksInfo from "../../../data/Info";
import BookList from "./BookList";

export default class Book extends Component {
  //creating a state with books array
  state = {
    books: booksInfo 
  };

  //change with input box
  changeWithInput =(event , index) =>{
    const books_obj = {
      ...this.state.books[index]
    }
    books_obj.subtitle = event.target.value;
    const updateBook = [ ...this.state.books];
    updateBook[index] = books_obj;
    this.setState({
      books:updateBook
    })

  }
  //delete book 
  deleteBook = index =>{
    //spread operator used for clone object
    const updateBook = [...this.state.books]
    updateBook.splice(index, 1);
    this.setState({
      books:updateBook
    })

  }

  render() {
    console.log(this.state.books)
    const book = this.state.books.map((item, index) => {
      return <BookList  
        key={index} 
        name={item.bookName} 
        author={item.author} 
        details={item.description} 
        site={item.website} 
        subtitle={item.subtitle} 
        delBook={()=>this.deleteBook(index)}
        changeWithInput = {  event =>this.changeWithInput(event, index)}
        />;
    });
    return (
      <div className="container">
        <div className="row">
          {book}
        </div>
      </div>
    );
  }
}
