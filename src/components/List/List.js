import React from 'react';
import styles from './List.scss';

class List extends React.Component {
  render() {
    return (
      <div id="app">
        <section className={styles.component}>
          <h2 className={styles.subtitle}>Star Wars</h2>
        </section>
      </div>
    )
  }
}

export default List;