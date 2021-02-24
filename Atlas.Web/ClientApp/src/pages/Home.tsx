import * as React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

const Home = () => (
  <div>
    <NavMenu />
    <div className="section border-top-0 pb-0" style={{marginTop: "110px"}}>
      <div className="container clearfix">
          <div className="heading-block center">
              <h3>Latest Analysis</h3>
          </div>
      </div>
    </div>
    <Container>

    <div className="row posts-md col-mb-30">
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/uadkbyma/armenian-refugees.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554837880300000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">Displaced and refugees in Lebanon</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/4ymfmhxr/palestinian-camps.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554839772000000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">Palestinian refugee camps in Lebanon</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/vrpcs2di/oil-and-gas.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554828051770000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">The oil and gas sector</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/yufgpfew/governorates-and-districts.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554825183300000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">Governorates and districts</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/vvkeg2gy/2020-cabinet.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554822168500000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">The January 2020 government</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/cdspl1c2/2019-cabinet.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554815346000000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">The January 2019 government</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/ksnpt0gx/mikati-salam.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554807940970000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">Key political developments 2011-2018</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/14te2x45/syrian-refugees.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554840868270000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">Syrian refugees in Lebanon</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/bbkhbti4/palestinian-refugees.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554838845130000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">Palestinian refugees in Lebanon</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/yyfd0opg/syrian-settlements.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554841841830000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">Syrian refugee settlements in Lebanon</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/yk4c25r1/security-developments-2013-2020.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554847257770000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">Security developments 2013-2020</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6">
            <div className="entry">
                <div className="entry-image">
                    <a href="/"><img src="https://atlas-umbraco-prod.azurewebsites.net//media/rnmjom5z/security-forces.jpg?anchor=center&amp;mode=crop&amp;width=200&amp;height=150&amp;rnd=132554848195570000" alt="pic" /></a>
                </div>
                <div className="entry-title title-xs nott">
                    <h3><a href="blog-single.html">The security forces</a></h3>
                </div>
                <div className="entry-meta">
                    <ul>
                        <li><i className="icon-calendar3"></i> 01 03 2021</li>
                    </ul>
                </div>
                <div className="entry-content">
                    <p></p>
                </div>
            </div>
        </div>
      </div>
    </Container>
    <Footer />
  </div>
);

export default connect()(Home);
