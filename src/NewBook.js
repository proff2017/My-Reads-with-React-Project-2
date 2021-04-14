import React from 'react';
import Choose from './Chooser';

class NewBook extends React.Component {
  /*
  Definig the info if the book and it's details and avatar 
  */
  render() {
    const { book } = this.props;
    const author = book.authors ? book.authors : "NotFound";
    const picture = book.imageLinks && book.imageLinks.thumbnail;
    return (
        <div className="book">
          <div>
          <div className="cover" style={{ width: 128, height: 193, backgroundImage: `url(${picture})` }}></div>
            <Choose
              newUpdate={this.props.newUpdate}
              book={ book }
              books={ this.props.books }
              selectorCheck={this.props.selectorCheck}
            />
          </div>
          <div className="Title">{book.title}</div>
          <div className="The-Author">{author}</div>
        </div>
    )
  }
}

export default NewBook
