import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>
      default:
        return (
          <React.Fragment>
            <li>
              <button onClick={()=>this.props.addCredits()} style={{marginRight: 10}}className="btn">
                Add credits
                </button>
            </li>
            <li>
              Credits: {this.props.auth.credits}
              <img style={{
                verticalAlign: "middle",
                borderRadius: "50%",
                margin: "0px 10px 0px 10px"
              }}
                alt="profile"
                src={this.props.auth.img} />
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            style={{ marginLeft: 20 }}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,actions)(Header);
