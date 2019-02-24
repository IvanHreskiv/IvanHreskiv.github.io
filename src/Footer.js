import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
      <div>

      <section id="lab_social_icon_footer">
        <div className="container">
                <div className="text-center center-block">
                        <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                        <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                        <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                        <a href="mailto:#"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
            </div>
        </div>
        </section>
      </div>
    );
  }
}
