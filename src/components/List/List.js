import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import propTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        title: propTypes.node,
        children: propTypes.node,
    }

  render() {
    return (
      <div id="app">
        <section className={styles.component}>
          <Hero titleText={this.props.title} />
          <div className={styles.description}>
              {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}

export default List;