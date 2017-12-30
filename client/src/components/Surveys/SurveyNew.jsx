import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  constructor(props){
    super(props);
    this.state={ showFormReviev: false, }
  }


  render() {
    return (
      <div>
        {this.state.showFormReviev 
        ? 
        <SurveyReview onCancel={()=> this.setState({showFormReviev: false})}/> 
        :
        <SurveyForm onSurveySubmit={()=> this.setState({showFormReviev: true})}/>  }
       </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
