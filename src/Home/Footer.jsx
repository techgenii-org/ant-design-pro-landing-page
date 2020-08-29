import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
        <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Techgenii Product</h2>
              <div>
                <a href="http://scaffold.ant.design">Dockit</a>
                <span> - </span>
                <span>Dockit</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://motion.ant.design">Api Flow</a>
                <span> - </span>
                <span>Api Flow</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="http://library.ant.design/">MS Architect</a>
                <span> - </span>
                <span>MS Architect</span>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Techgenii Services</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                  DevOps
                </a>
              </div>
              <div>
                <a target="_blank " href="http://ant.design">
                  Digitalization
                </a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Solutioning</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24}>
          <div className="translate-button">
            <Button ghost size="small" >
              English
            </Button>
          </div>
        </Col>
        <Col lg={18} sm={24}>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © Techgenii</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
