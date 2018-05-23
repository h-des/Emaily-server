import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
       <footer className="page-footer teal darken-3">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Emaily</h5>
                <p className="grey-text text-lighten-4">Accusantium maiores et cupiditate quae.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Social</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Facebook</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Twitter</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
             2018 H-DES
            <a className="grey-text text-lighten-4 right" href="https://github.com/h-des">GitHub</a>
            </div>
          </div>
        </footer>
    )
  }
}
