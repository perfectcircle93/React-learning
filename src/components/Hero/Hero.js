import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHtmlParser(props.title)}</h2>
    <img className={styles.image} src={props.image}></img>
  </header>
);

Hero.PropTypes = {
  title: PropTypes.node.isRequired,
};

Hero.propTypes = {
  title: PropTypes.node,
  image: PropTypes.node,
};

  
export default Hero;