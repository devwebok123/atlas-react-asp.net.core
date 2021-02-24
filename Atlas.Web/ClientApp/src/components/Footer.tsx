import * as React from 'react';
import { Container } from 'reactstrap';

const Footer = () => (
  <footer id="footer" className="dark">
    <div id="copyrights">
        <Container>
            <div className="row col-mb-30">
                <div className="col-md-6 text-center text-md-left">
                    Copyrights © 2021 Altlas Assistance.<br />
                    <div className="copyright-links">
                        <a href="/">Terms of Use</a> / <a href="/">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  </footer>
);

export default Footer;
