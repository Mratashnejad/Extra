import React from 'react';
import { Row, Col, Button } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Extra Shifts</h2>
              <div>
                <a target="_blank " href="https://github.com/ant-design/ant-design-pro">
                  Ant Design Pro GitHub
                </a>
              </div>
              <div>
                <a target="_blank " href="http://ant.design">
                  Shop
                </a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Ant Design Mobile</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span> - </span>
                Ant Design of Angular
              </div>
              <div>
                <a target="_blank " href="https://github.com/websemantics/awesome-ant-design">
                  Awesome Ant Design
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Shopping</h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
                <span> - </span>
                <span>test</span>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Courses</h2>
              <div>
                <a href="#">
                  test 2
                </a>
              </div>
              
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                FAQ
              </h2>
              <div>
                <a target="_blank" rel="noopener" href="http://ant.design/">Ant Design</a>
                <span> - </span>
                <span>frequently questions</span>
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
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              test footer menu
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              test footer menu
            </a>
          </span>
          {/* <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span> */}
          <span style={{ marginRight: 12 }}>Copyright © Mr.atashnejad</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;