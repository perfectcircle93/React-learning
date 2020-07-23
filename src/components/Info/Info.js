import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';

const Info = props => (
  <Container>
    <Hero title={props.title} image={props.image} />
    <h2>{props.containerTitle}</h2>
    <p>{props.containerText}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  containerTitle: PropTypes.string,
  containerText: PropTypes.string,
};

Info.defaultProps = {
  title: settings.info.title,
  image: settings.info.image,
  containerTitle: settings.info.containerTitle,
  containerText: settings.info.containerText,
};

export default Info; 