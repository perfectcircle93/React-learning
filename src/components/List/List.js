import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
    static PropTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    static defaultProps = {
      description: settings.defaultListDescription,
    }

  render() {
    return (
      <div id="app">
        <section className={styles.component}>
          <Hero titleText={this.props.title} image={this.props.image}/>
          <div className={styles.description}>
              {ReactHtmlParser(this.props.description)}
          </div>
          <div className={styles.columns}>
            {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
            ))}
          </div>
        </section>
      </div>
    )
  }
}

export default List;