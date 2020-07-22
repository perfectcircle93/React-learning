import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer.js';
import {settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import { DragDropContext } from 'react-beautiful-dnd';

class List extends React.Component {
    static PropTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      addColumn: PropTypes.func,
    }

    static defaultProps = {
      description: settings.defaultListDescription,
    }

    onDragEnd(result) {
      console.log(this.props);
      this.props.moveCard(result.draggableId, result.source.droppableId, result.destination.droppableId);
    }


    render() {
      const {title, image, description, columns, addColumn} = this.props;
      return (
        <div id="app">
          <section className={styles.component}>
            <Hero titleText={title} image={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            <div className={styles.columns}>
              <DragDropContext onDragEnd={(result) => { this.onDragEnd(result); }}>
                {columns.map(columnData => (
                  <Column key={columnData.id} {...columnData} />
                ))}
              </DragDropContext>
            </div>
            <div className={styles.creator}>
              <Creator text={settings.columnCreatorText} action={addColumn} />
            </div>
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
  addColumn: PropTypes.node,
  moveCard: PropTypes.node,
};


export default List;