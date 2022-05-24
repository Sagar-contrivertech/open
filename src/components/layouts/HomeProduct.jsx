import React , {useContext, useState} from 'react'
import '../layout-styles/Homeproduct.css';
import { Tabs , Tab , Row , Col , Nav} from 'react-bootstrap';
// import { productshow } from './Hero';
function HomeProduct() {
  const [key, setKey] = useState('home');
  const [show , setshow] = useState(true);
  
  return (
      <div className="homeproduct">
      <div className="container">
        <div className="heading-homeproduct">
          <p>All Product</p>
        </div>
        <div className="homeproduct-content">

          <Tab.Container id="left-tabs-example" defaultActiveKey="home">
              <Row>
                <Col sm={12}>
                  <Nav variant="pills" className="flex-row" >
                    <Nav.Item>
                      <Nav.Link eventKey="home" onClick={() => setKey("home")}>individual
                        {key === "home" ? <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282597/HomeProduct/badges_small_bgmowf.png" /> : <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/badges_small-3_mh5dwn.png" />}
                       </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="profile" onClick={() => setKey("profile")}>Corporate {key === "profile" ?  <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282597/HomeProduct/badges_small-2_xkf0uh.png" /> :  <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282597/HomeProduct/badges_small-1_n5oasy.png" />} </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={12}>
                  <Tab.Content>
                    <Tab.Pane eventKey="home" >
                      <div className="Individual-boxs">
                        <div className="individual-box">
                          <div className="con-icon">
                            <div className="icon individual-icon">
                              <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282595/HomeProduct/MOTOR_pml3vf.png" alt="" srcset="" />
                              {/* hello1 */}
                            </div>
                          </div>
                          <p className='heading-individual-icon'>Car Insurance</p>
                        </div>
                        <div className="individual-box">
                          <div className="con-icon">
                            <div className="icon individual-icon">
                              <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39575_hiuwf1.png" alt="" srcset="" />
                              {/* hello2 */}
                            </div>
                          </div>
                          <p className='heading-individual-icon'>Health  Insurance</p>
                        </div>
                        <div className="individual-box">
                          <div className="con-icon">
                            <div className="icon individual-icon">
                              <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39577_nraecs.png" alt="" />
                              {/* hello3 */}
                            </div>
                          </div>
                          <p className='heading-individual-icon'>Life  Insurance</p></div>
                        <div className="individual-box">
                          <div className="con-icon">
                            <div className="icon individual-icon">
                              <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39578_seyqi2.png" alt="" />
                              {/* hello4 */}
                            </div>
                          </div>
                          <p className='heading-individual-icon'>Travel  Insurance</p>
                        </div>
                      </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="profile">
                      <div className="Individual-boxs">
                    <div className="individual-box">
                      <div className="con-icon">
                        <div className="icon individual-icon">
                          <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39593_szqrlz.png" alt="" srcset="" />
                          {/* hello1 */}
                        </div>
                      </div>
                      <p className='heading-individual-icon'>Employee Insurance</p>
                    </div>
                    <div className="individual-box">
                      <div className="con-icon">
                        <div className="icon individual-icon">
                          <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39589_vsk2rz.png" alt="" srcset="" />
                          {/* hello2 */}
                        </div>
                      </div>
                      <p className='heading-individual-icon'>Fire  Insurance</p>
                    </div>
                    <div className="individual-box">
                      <div className="con-icon">
                        <div className="icon individual-icon">
                          <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39590_fakcje.png" alt="" />
                          {/* hello3 */}
                        </div>
                      </div>
                      <p className='heading-individual-icon'>Marine  Insurance</p></div>
                    <div className="individual-box">
                      <div className="con-icon">
                        <div className="icon individual-icon">
                          <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39616_wajfol.png" alt="" />
                          {/* hello4 */}
                        </div>
                      </div>
                      <p className='heading-individual-icon'>Liability  Insurance</p>
                    </div>
                    <div className="individual-box">
                      <div className="con-icon">
                        <div className="icon individual-icon">
                          <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39591_lvni8u.png" alt="" />
                          {/* hello4 */}
                        </div>
                      </div>
                      <p className='heading-individual-icon'>Engineering  Insurance</p>
                    </div>
                  </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

          {/* this is old one  */}
          {/* <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            >
            
            <Tab eventKey="home" title={"Individual"}>
                <div className="Individual-boxs">
                  <div className="individual-box">
                    <div className="con-icon">
                      <div className="icon individual-icon">
                        <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282595/HomeProduct/MOTOR_pml3vf.png" alt="" srcset="" />
                        {/* hello1 *
                      </div>
                    </div>
                    <p className='heading-individual-icon'>Car Insurance</p>
                  </div>
                  <div className="individual-box">
                    <div className="con-icon">
                      <div className="icon individual-icon">
                        <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39575_hiuwf1.png" alt="" srcset="" />
                        {/* hello2 *
                      </div>
                    </div>
                    <p className='heading-individual-icon'>Health  Insurance</p>
                  </div>
                  <div className="individual-box">
                    <div className="con-icon">
                      <div className="icon individual-icon">
                        <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39577_nraecs.png" alt="" />
                        {/* hello3 
                      </div>
                    </div>
                    <p className='heading-individual-icon'>Life  Insurance</p></div>
                  <div className="individual-box">
                    <div className="con-icon">
                      <div className="icon individual-icon">
                        <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39578_seyqi2.png" alt="" />
                        {/* hello4 *
                      </div>
                    </div>
                    <p className='heading-individual-icon'>Travel  Insurance</p>
                  </div>
                </div>
            </Tab>
            <Tab eventKey="profile" title="Corporate">
            <div className="Individual-boxs">
                  <div className="individual-box">
                    <div className="con-icon">
                      <div className="icon individual-icon">
                      <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282595/HomeProduct/MOTOR_pml3vf.png" alt="" srcset="" />
                        {/* hello1 *
                      </div>
                    </div>
                    <p className='heading-individual-icon'>Car Insurance</p>
                  </div>
                  <div className="individual-box">
                    <div className="con-icon">
                      <div className="icon individual-icon">
                        {/* hello2 
                        <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39575_hiuwf1.png" alt="" srcset="" />
                      </div>
                    </div>
                    <p className='heading-individual-icon'>Health  Insurance</p>
                  </div>
                  <div className="individual-box">
                    <div className="con-icon">
                      <div className="icon individual-icon">
                        {/* hello3 
                        <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39577_nraecs.png" alt="" />
                      </div>
                    </div>
                    <p className='heading-individual-icon'>Life  Insurance</p></div>
                  <div className="individual-box">
                    <div className="con-icon">
                      <div className="icon individual-icon">
                        {/* hello4 
                        <img src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653282596/HomeProduct/Group_39578_seyqi2.png" alt="" />
                      </div>
                    </div>
                    <p className='heading-individual-icon'>Travel  Insurance</p>
                  </div>
                </div>
            </Tab>
          </Tabs> */}
        </div>
      </div>
    </div>
   
  )
}

export default HomeProduct