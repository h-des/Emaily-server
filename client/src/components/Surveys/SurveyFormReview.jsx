import React from 'react';
import { connect } from 'react-redux';
import FIELDS from './formFields';
import * as actions from '../../actions/index';
import { withRouter } from 'react-router-dom';


const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {

  const renderContent = FIELDS.map(e => (
    <React.Fragment key={e.name}>
      <label style={{ fontSize: 16 }}>{e.label}</label>
      <div>
        {formValues[e.name]}
      </div>
    </React.Fragment>
  ))

  

  return (
    <div>
      <h5>Please confirm</h5>
      <React.Fragment>
        {renderContent}
      </React.Fragment>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <button
          className="red btn-flat left white-text"
          type="submit"
          onClick={onCancel}
        >
          Back
        <i className="material-icons right" style={{ verticalAlign: "middle" }}>chevron_left</i>
        </button>
        <button
          className="teal darken-1 btn-flat right white-text"
          type="submit"
          onClick={() => submitSurvey(formValues, history)}
        >
          Send
        <i className="material-icons right" style={{ verticalAlign: "middle" }}>mail_outline</i>
        </button>
      </div>
     

    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}


export default connect(mapStateToProps, actions)(withRouter(SurveyReview));