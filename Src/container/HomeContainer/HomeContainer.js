import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeComponent from '../../component/HomeComponent';
// import { MessengerAction, SearchJobAction } from '../../redux/actions/Action';

export class HomeContainer extends Component {
  render() {
    return <HomeComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

