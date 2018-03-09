import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './Surveys/SurveyNew';
import Footer from './Footer';
import '../index.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Route exact path='/' render={()=>(this.props.auth ? (<Redirect to="/surveys"/>) : (<Landing/>))} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route path='/surveys/new' component={SurveyNew} />
            <Footer />
          </React.Fragment>
        </BrowserRouter>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps, actions)(App);
