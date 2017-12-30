import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './Surveys/SurveyList';

const Dashboard = () => {
  return (
    <React.Fragment>
      <SurveyList/>
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons large">add</i>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;