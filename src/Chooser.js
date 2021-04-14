import React from 'react';
//Here the class to catogery the book to the shelf we want 

class Choose extends React.Component {
  /*
  on changing the value of the book it will be auto rendered to the new shelf we chose
  */
  render() {
    const { newUpdate, book } = this.props;

    return (
      <div className="catogery">
        <select
          value={book.shelf}
          onChange={(event) => newUpdate(book, event.target.value)}
        >
          <option value="gonnaRead">Want to Read</option>
          <option value="ReadingRN">Currently Reading</option>
          <option value="dReading">Read</option>
          <option value="none" selected>None</option>
        </select>
      </div>
    )
  }
}

export default Choose
