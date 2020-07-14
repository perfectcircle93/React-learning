import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';


const Column = props => (
    <section className={styles.component}>
        <h3 className={styles.title}>{props.columnTitle}</h3>
    </section>
);

Column.PropTypes = {
    columnTitle: PropTypes.node.isRequired,
};

export default Column;