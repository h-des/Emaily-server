import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './formFields';

//for simplyfing the 'renderFields' function



class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => {
      return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
    });
  }

  render() {
    return (
      <React.Fragment>
        <form  onSubmit={this.props.handleSubmit(this.props.onSurveySubmit) }>
          {this.renderFields()}
          <div style={{ maxWidth: 800, margin: "0 auto" }}>
            <Link className="red btn-flat left white-text" to="/surveys">
              Cancel
          </Link>
            <button className="teal btn-flat right white-text" type="submit">
              Next
            <i className="material-icons right" style={{ verticalAlign: "middle" }}>chevron_right</i>
            </button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

function validate(values) {
  const errors = {};
  
  errors.recipients = validateEmails(values.recipients || '');

  FIELDS.forEach(({label, name})=> {
    if(!values[name]) {
      errors[name]= `You must provide a ${label}`;
    }
  });


  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
