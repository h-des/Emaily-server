import React from 'react';
import './../styles/landing.css';
import { Link } from 'react-router-dom';

const Landing = ({props}) => (
  <div className="row">
    <section className="section top">
      <div className="row valign-wrapper" style={{minHeight: "80vh"}}>
        <div className="col m6 s12 ">
          <h2>Emaily</h2>
          <p className="">Odit totam blanditiis officia saepe voluptatum sed quaerat aspernatur. Sint
            delectus quis eum sequi. Officia ex commodi. Error saepe nihil exercitationem
            suscipit quia non eum deleniti et. Repellat dolor laboriosam et qui sunt enim
            error. Temporibus adipisci adipisci delectus. Vel consectetur omnis. Ad nulla
            molestiae occaecati animi illo dicta sed. Voluptatem perspiciatis consequatur
            animi rerum qui quod iusto. In quia atque dicta culpa cupiditate adipisci rerum
            velit assumenda. Explicabo iste molestiae earum qui velit aperiam quia cum fuga.
            Et qui voluptate debitis id veritatis aliquid possimus corrupti. Ut enim
            reiciendis sequi. Quia nam distinctio omnis aut. Sit id officiis nesciunt
            recusandae.</p>
        </div>
        <div className="col m6 s12 center hide-on-small-only">
          <a className="btn z-depth-3" href="/auth/google">Start now!</a>
        </div>
      </div>
    </section>
    <section className="section pricing center">
      <div className="row center">
        <h3>Pricing</h3>
        <Pricing/>
      </div>
    </section>
    <section className="section team center">
      <h3>Team</h3>
      <div className="row">
        <div className="col offset-m2 s12 m4 ">
          <div className="card white z-depth-4">
            <div className="card-content center">
              <span className="card-title">CTO</span>
              <div className="row">
                <div className="col s4 offset-s4">
                  <img src="images/avatar.bmp" alt="" className="circle responsive-img"/>
                </div>
              </div>
              <p>
                Qui harum voluptatibus nihil veniam repellendus. Laborum velit odit aliquid sed
                eos ratione accusamus facere dolorum. Minus itaque voluptatem sequi aut natus
                sed. Animi eius natus ea aliquid. Ipsam reiciendis assumenda eos at quia
                consectetur.
              </p>
            </div>
            <div className="card-action center">
              <button className="btn">Contact</button>
            </div>
          </div>
        </div>
        <div className="col s12 m4">
          <div className="card white z-depth-4">
            <div className="card-content center">
              <span className="card-title">CEO</span>
              <div className="row">
                <div className="col s4 offset-s4">
                  <img src="images/avatar.bmp" alt="" className="circle responsive-img"/>
                </div>
              </div>
              <p>
                Qui harum voluptatibus nihil veniam repellendus. Laborum velit odit aliquid sed
                eos ratione accusamus facere dolorum. Minus itaque voluptatem sequi aut natus
                sed. Animi eius natus ea aliquid. Ipsam reiciendis assumenda eos at quia
                consectetur.
              </p>
            </div>
            <div className="card-action center">
              <button className="btn">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

const Pricing = () => (
  <div className="col s12 m10 offset-m1">
    <div className="card white z-depth-5">
      <div className="card-content ">
        <table className="centered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Free</th>
              <th>Premium - 30$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Campaigns</td>
              <td>1</td>
              <td>20</td>
            </tr>
            <tr>
              <td>Contacts</td>
              <td>100</td>
              <td>20000</td>
            </tr>
            <tr>
              <td>Mails</td>
              <td>1000</td>
              <td>40000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)

export default Landing;