import {connect} from 'react-redux';
import Home from './Home';
import {createAction_moveCard} from '../../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
  title: state.app.title,
  subtitle: state.app.title,
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  moveCard: payload => dispatch(createAction_moveCard(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);