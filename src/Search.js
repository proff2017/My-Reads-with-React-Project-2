import React from 'react';
import { Link } from 'react-router-dom';
import NewBook from './NewBook';

class Search extends React.Component {
  render() {
    const { search } = this.props;
    return (
      //search area:
      /*
      Close refending you to the home page
      Or else search a new book and adding it to a shelf
      */
      <div className="search">
        <div className="search-bar">
          <Link to="/">Close</Link>
          <div className="search-input">
            <input
              onChange={ event => search(event.target.value)}
              type="text"
              placeholder="Find your book"/>
          </div>
        </div>
        <div className="results">
          <ol className="booksGrid">
            {this.props.foundBooks.length > 0 ? (
              this.props.foundBooks.map((book) => (
              <li key={book.id}>
                <NewBook
                  book={ book }
                  newUpdate={this.props.newUpdate}
                />
              </li>
          ))) : <li></li> }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search
