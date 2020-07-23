import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

const FAQ = props => (
  <Container>
    <Hero title={props.title} image={props.image} />
    <h2>{props.question1}</h2>
    <p>{props.answer1}</p>
    <h2>{props.question2}</h2>
    <p>{props.answer2}</p>

  </Container>
);

FAQ.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  question1: PropTypes.string,
  answer1: PropTypes.string,
  question2: PropTypes.string,
  answer2: PropTypes.string,
};

FAQ.defaultProps = {
  title: settings.FAQ.title,
  image: settings.FAQ.image,
  question1: settings.FAQ.question1,
  answer1: settings.FAQ.answer1,
  question2: settings.FAQ.question2,
  answer2: settings.FAQ.answer2,
};


export default FAQ;