import React from 'react';
import { ReactComponent as BrownFooterLogo } from '../../assets/svg/brown-logo-footer.svg';
import '../styles/custom.scss';

let currentYear = new Date().getFullYear()

const BrownFooter = () => (
  <footer id="brown-footer" className="d-print-none">
      <div className="marginator">
        <section>
          <BrownFooterLogo />
          <div id="give-to-brown">
           <a href="http://giving.brown.edu" className="giving-footer">Giving to Brown</a>
          </div>
        </section>

        <div id="brown-contact">
          <ul className="contact-location">
            <li className="city-state-country i-destination">Providence, Rhode Island 02912, USA</li>
            <li className="telephone i-phone"><a href="tel:14018631000">401-863-1000</a></li>
            <li className="contact i-devices"><a href="http://www.brown.edu/contact" accessKey="9">Contact Us</a></li>
            <li className="maps i-map"><a href="http://www.brown.edu/Facilities/Facilities_Management/maps/#building/">Maps</a></li>
            <li className="directions i-split"><a href="http://www.brown.edu/about/visit/driving-directions">Directions</a></li>
          </ul>
        </div>

        <div id="social-media">
          <ul>
            <li>
              <a href="https://www.facebook.com/BrownUniversity" title="Facebook"><i className="i-facebook" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/BrownUniversity"><i className="i-twitter" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="http://www.youtube.com/brownuniversity"><i className="i-youtube" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="http://instagram.com/brownu"><i className="i-instagram" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="http://itunes.apple.com/institution/brown-university/id381076688#ls=1"><i className="i-apple" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://plus.google.com/100931085598361161047/posts"><i className="i-google-plus" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/edu/school?id=19348&amp;trk=tyah"><i className="i-linkedin" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://www.snapchat.com/add/brown-u"><i className="i-snapchat" aria-hidden="true"></i></a>
            </li>
          </ul>

          <div className="social-link">
            <a href="http://www.brown.edu/about/social-media/" title="Get Connected to the Brown Community">All Social Media</a>
          </div>
        </div>
      </div>

      <div id="footer-copyright" className="clearfix">
        <div className="marginator">
          <p><span className="copyright">&copy; { currentYear } Brown University</span> | <a href="#" id="back-to-top" className="link-top">Back to top <span className="icon i-arrow-up-line"></span></a></p>
        </div>
      </div>
    </footer>
)

export default BrownFooter
