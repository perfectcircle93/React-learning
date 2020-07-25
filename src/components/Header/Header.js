import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';    
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Search from '../Search/SearchContainer';


class Header extends React.Component {
    static propTypes = {
      toHome: PropTypes.string,
      toInfo: PropTypes.string,
      toFAQ: PropTypes.string,
      icon: PropTypes.node,
      classNameActive: PropTypes.string,
    }
      static defaultProps = {
        toHome: settings.navbar.toHome,
        toInfo: settings.navbar.toInfo,
        toFAQ: settings.navbar.toFAQ,
        icon: settings.navbar.icon,
        classNameActive: settings.navbar.classNameActive,
      }

      render() {
        const {toHome, toInfo, toFAQ, icon, classNameActive} = this.props;
        return (
          <header className={styles.component}>
            <Container>
              <div className={styles.wrapper}>
                <Link to={toHome} className={styles.logo}>
                  <Icon name={icon} />
                </Link>
                <Search />
                <nav>
                  <NavLink exact to={toHome} activeClassName={classNameActive}>Home</NavLink>
                  <NavLink exact to={toInfo} activeClassName={classNameActive}>Info</NavLink>
                  <NavLink exact to={toFAQ} activeClassName={classNameActive}>FAQ</NavLink>
                </nav>
              </div>
            </Container>
          </header>
        );
      }
}

export default Header;
