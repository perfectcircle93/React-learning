import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static PropTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
    }

    static defaultProps = {
      children: <p>I can do all the things!!!</p>,
    }

  render() {
    return (
      <div id="app">
        <section className={styles.component}>
          <Hero titleText={this.props.title} image={this.props.image}/>
          <div className={styles.description}>
              {this.props.children}
          </div>
        </section>
      </div>
    )
  }
}

export default List;