import React from 'react'
// import * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI';
import './App.css'
import Search from './Search';
import Shelf from './Shelf';
import { Route, Link } from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    books: [],
    foundBooks: [],
    isLoading: true,
  }

 fetch() {
    BooksAPI.getAll().then( books => {
      this.setState({
        books,
        isLoading: false,
      })
    });
 }
 componentDidMount() {
 	this.fetch();
 }


 newUpdate = (newBook, shelf) => {
  BooksAPI.update(newBook, shelf).then( response => {
    newBook.shelf = shelf
  })

  let newBooks = this.state.books.filter( book => book.id !== newBook.id )
  newBooks.push(newBook);
  this.setState({ books: newBooks })
   this.setState({ foundBooks: [] })
  this.componentDidMount()
}

  search = (inserted) => {
    if (inserted.length !== 0) {
      BooksAPI.search(inserted).then( foundBooks => {
        let results = [];
          for (const foundBook of foundBooks) {
            for (const book of this.state.books) {
                if (foundBook.id === book.id) {
                  foundBook.shelf = book.shelf
                }
            }
            results.push(foundBooks)
          }
          return results
      }).then((foundBooks) => {
        this.setState((prevState) => ({ foundBooks }))
      }).catch(foundBooks => this.setState({ foundBooks: [] }))
    } else {
      this.setState({ foundBooks: [] })
    }
  }
  
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={ () => (
          <div className="list">
            <div className="list-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books">
                <Shelf
                  books={this.state.books}
                  newUpdate={this.newUpdate}
                />
            </div>
            <div>
              <Link to="/search">New book</Link>
            </div>
          </div>
        )} />

        <Route path="/search" render={ () => (
          <Search
            foundBooks={this.state.foundBooks}
            search={this.search}
            newUpdate={this.newUpdate}
          />
        )}
        />
        </div>
    )
  }
}

export default BooksApp
