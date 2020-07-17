import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
//import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {

    static propTypes = {
      title: PropTypes.node.isRequired,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }


    render() {
      const {title, icon} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title}
            <span className={styles.icon}><Icon name={icon}/></span>
          </h3>
          {/*<div>
            {this.state.cards.map(({ key, ...cardsProps }) => (
              <Card key={key} {...cardsProps} />
            ))}
          </div>
          <div>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
            </div>*/}
        </section>
      );
    }

}

Column.propTypes = {
  title: PropTypes.node,
  icon: PropTypes.node,
};
  

export default Column;