import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}>My first react app</h1>
          <h2 className={styles.subtitle}>Hello world!</h2>
          <List title={[' Star Wars ', <sup key='1'>soon!</sup>]}>
            <p>I'm planning on doing all these things sooner, rather than later!</p>
          </List>
        </main>
      </div>
    )
  }
}

export default App;
