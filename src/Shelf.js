import React from 'react';
import NewBook from './Book';

class Shelf extends React.Component {
  render() {
    const { books } = this.props;
    const gonnaRead = books.filter(book => book.shelf === "gonnaRead");
    const ReadingRN = books.filter( book => book.shelf === "ReadingRN");
    const dReading = books.filter(book => book.shelf === "dReading");

    //Dividing the page to 3 shelves to put each book back from the search page
    //Use react class book to add each book to the shelf we chose
    return (
      <div>
        <div className="shelf">
          <h1 className="shelf-title">Want to read</h1>
          <div className="books">
            <ol className="booksGrid">
              {gonnaRead.map( book => (
                <li key={book.id}>
                  <NewBook
                    books={ this.props.books }
                    book={ book }
                    newUpdate={this.props.newUpdate}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
        <div className="shelf">
          <h2 className="shelf-title">Currently reading</h2>
          <div className="books">
            <ol className="booksGrid">
              {ReadingRN.map( book => (
                <li key={book.id}>
                  <NewBook
                    books={ this.props.books }
                    book={ book }
                    newUpdate={this.props.newUpdate}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
        <div className="shelf">
          <h3 className="shelf-title">Read</h3>
          <div className="books">
            <ol className="bookGrid">
              {dReading.map( book => (
                <li key={book.id}>
                  <NewBook
                    books={ this.props.books }
                    book={ book }
                    newUpdate={this.props.newUpdate}
                  />
                </li>
              ))
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
