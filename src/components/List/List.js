import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
//import Creator from '../Creator/Creator.js';

class List extends React.Component {
    static PropTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
    }

    static defaultProps = {
      description: settings.defaultListDescription,
    }


    render() {
      const {title, image, description, columns} = this.props;
      return (
        <div id="app">
          <section className={styles.component}>
            <Hero titleText={title} image={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
            {/*<div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
              </div>*/}
          </section>
        </div>
      );
    }
}

List.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.node,
  columns: PropTypes.node,
};


export default List;