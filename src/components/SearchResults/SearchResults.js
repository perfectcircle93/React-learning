import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import {Link} from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';



class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    columns: PropTypes.array,
    lists:  PropTypes.array,
  }
  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component} >
        
        <div className={styles.cards}>
          <h2 className={styles.title}>CARDS</h2>
          {cards.map(cardData => (
            <div key={cardData.id} className={styles.wrapper}>
              <Card key={cardData.id} {...cardData} />
              <p>{ReactHtmlParser(`Column: ${cardData.columnName}, List: ${cardData.listName}`)}</p>
              {/*<Link className={styles.link} to={`/list/${cardData.listId}`}>
                <p>{ReactHtmlParser(`Column: ${cardData.columnName}, List: ${cardData.listName}`)}</p>
          </Link>*/}
            </div>
          ))}
        </div>
        
      </section >
    );
  }
}

export default SearchResults; 