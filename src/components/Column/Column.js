import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';
import { Droppable } from 'react-beautiful-dnd';

class Column extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
      addCard: PropTypes.func,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }


    render() {
      const {title, icon, cards, addCard, id} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title}
            <span className={styles.icon}><Icon name={icon}/></span>
          </h3>
          <div>
            <Droppable droppableId={id}>
              {provided => (
                <div className={styles.cards}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {cards.map(cardData => (
                    <Card key={cardData.id} {...cardData} />
                  ))}

                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div>
            <Creator text={settings.cardCreatorText} action={addCard} />
          </div>
        </section>
      );
    }

}

Column.propTypes = {
  title: PropTypes.node,
  icon: PropTypes.node,
  cards: PropTypes.node,
  addCard: PropTypes.node,
  id: PropTypes.string,
};
  

export default Column;