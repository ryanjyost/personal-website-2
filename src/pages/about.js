import React from 'react';

import Link from 'gatsby-link';
import { withPrefix } from 'gatsby-link';
import Project from '../components/project';
import { Motion, spring, presets } from 'react-motion';

export default class ResumePage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         hover: false,
      };
   }

   render() {
      const { data, showSidebar, height, width, isMobile } = this.props;
      const { hover } = this.props;

      return (
         <Motion
            defaultStyle={{
               top: -800,
               height: 0,
            }}
            style={{
               top: spring(
                  this.props.location.pathname === '/about' ||
                  !('action' in this.props.location)
                     ? 70
                     : -800,
                  { ...presets.stiff, ...{ precision: 0.9 } }
               ),
               // height: spring(
               //   this.props.location.pathname === '/portfolio' ? 300 : 0,
               //   {
               //     ...presets.stiff,
               //     ...{ precision: 0.9 },
               //   }
               // ),
            }}
         >
            {style => (
               <div
                  style={{
                     // display: 'flex',
                     // flexDirection: 'column',
                     //alignItems: 'stretch',
                     padding: showSidebar
                        ? '20px 10px 50px 70px'
                        : '20px 10px 50px 10px',
                     justifyContent: 'center',
                     // overflow: 'scroll',
                     marginTop: isMobile ? 70 : style.top,
                     // position: 'relative',
                     // width: width,
                  }}
               >
                  {/*<div style={{ maxWidth: 600 }}>*/}
                  {/*I started working at a financial advisory firm in Chicago*/}
                  {/*right after graduation, in the summer of 2015.<br />*/}
                  {/*Not long after, I began to build a Wordpress site to share*/}
                  {/*and discuss interesting articles, books and podcasts with*/}
                  {/*my virtual book club. I became absolutely enthralled with*/}
                  {/*customizing the design, implementing knew functionality and*/}
                  {/*simply building something from nothing.<br />*/}
                  {/*After a couple years built a portfolio of fun and*/}
                  {/*challenging projects, learning as much as I could along the*/}
                  {/*way. I also became a CERTIFIED FINANCIAL PLANNER&#8482;*/}
                  {/*certificant.*/}
                  {/*</div>*/}
                  {/* Download */}
                  <div
                     style={{
                        display: 'flex',
                        justifyContent: 'center',
                        height: 50,
                     }}
                     // onMouseEnter={() => this.setState({ hover: true })}
                     // onMouseLeave={() => this.setState({ hover: false })}
                  >
                     <a
                        href={withPrefix('ryanjyost_resume.pdf')}
                        style={{
                           display: 'flex',
                           justifyContent: 'center',
                           alignItems: 'center',
                           backgroundColor: hover ? '#f2f2f2' : '#fcfcfc',
                           WebkitBoxShadow:
                              '0 2px 4px #d8d8d8, 0 2px 2px #d8d8d8',
                           transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
                           width: 300,
                           border: '1px solid #f2f2f2',
                           height: 40,
                           borderRadius: 50,
                        }}
                        download
                        onMouseEnter={() => this.setState({ hover: true })}
                        onMouseLeave={() => this.setState({ hover: false })}
                     >
                        Download My Resume{' '}
                        <i
                           className={'fas fa-cloud-download-alt'}
                           style={{ marginLeft: 10, fontSize: 20 }}
                        />
                     </a>
                  </div>

                  {/* History */}
                  <div style={{ padding: '30px 10px' }}>
                     {/* Server Central */}
                     <div
                        style={{
                           display: 'flex',
                           alignItems: 'stretch',
                           justifyContent: 'center',
                           marginBottom: 20,
                        }}
                     >
                        <div
                           style={{
                              flex: 0.2,
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              display: 'flex',
                              fontSize: 12,
                              color: '#fff',
                              fontWeight: '400',
                              letterSpacing: '0.03em',
                           }}
                        >
                           <div style={{ flex: 0.1 }}>
                              <div
                                 style={{
                                    backgroundColor: '#A1DEDA',
                                    //padding: '10px 10px',
                                    borderRadius: 9999,
                                    height: 50,
                                    width: 50,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                 }}
                              >
                                 Today
                              </div>
                           </div>
                           <div
                              style={{
                                 height: '100%',
                                 backgroundColor: '#e5e5e5',
                                 width: 2,
                                 flex: 0.8,
                              }}
                           />
                           <div
                              style={{
                                 backgroundColor: '#A1DEDA',
                                 //padding: '10px 10px',
                                 borderRadius: 9999,
                                 height: 50,
                                 width: 50,
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                              }}
                           >
                              <div>Jan</div>
                              <div>2018</div>
                           </div>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              padding: '10px 0px 10px 20px',
                              maxWidth: 600,
                           }}
                        >
                           <h5 style={{ marginBottom: 2 }}>
                              Front End Web Developer
                           </h5>
                           <h6
                              style={{
                                 color: '#999',
                                 fontStyle: 'italic',
                                 fontWeight: '400',
                                 marginBottom: 15,
                              }}
                           >
                              ServerCentral
                           </h6>
                           <ul
                              style={{
                                 listStyle: 'none',
                                 padding: '0px 0px 0px 0px',
                                 color: '#888',
                                 fontWeight: '400',
                                 fontSize: 14,
                              }}
                           >
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Design, develop and maintain intuitive,
                                 highly-visual web applications that increase
                                 employee productivity
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Spearheaded creation of a new React Native
                                 tablet app for warehouse employees
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Build bespoke, efficient workflows and
                                 functionality that touch all aspects of the
                                 business, e.g.) hardware/infrastructure
                                 administration in datacenters around the world,
                                 customer billing, managed services, etc.
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Enhance development workflows and application
                                 architecture; vet and incorporate new tools and
                                 libraries
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Communicate with and collaborate on the
                                 company’s internal, RESTful APIs
                              </li>
                           </ul>
                        </div>
                     </div>

                     {/* BRF */}
                     <div
                        style={{
                           display: 'flex',
                           alignItems: 'stretch',
                           justifyContent: 'center',
                           marginBottom: 20,
                        }}
                     >
                        <div
                           style={{
                              flex: 0.2,
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              display: 'flex',
                              fontSize: 12,
                              color: '#fff',
                              fontWeight: '400',
                              letterSpacing: '0.03em',
                           }}
                        >
                           <div
                              style={{
                                 backgroundColor: '#A1DEDA',
                                 //padding: '10px 10px',
                                 borderRadius: 9999,
                                 height: 50,
                                 width: 50,
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                              }}
                           >
                              <div>Dec</div>
                              <div>2017</div>
                           </div>
                           <div
                              style={{
                                 height: '100%',
                                 backgroundColor: '#e5e5e5',
                                 width: 2,
                                 flex: 0.8,
                              }}
                           />
                           <div
                              style={{
                                 backgroundColor: '#A1DEDA',
                                 //padding: '10px 10px',
                                 borderRadius: 9999,
                                 height: 50,
                                 width: 50,
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                              }}
                           >
                              <div>Jun</div>
                              <div>2015</div>
                           </div>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              padding: '10px 0px 10px 20px',
                              maxWidth: 600,
                           }}
                        >
                           <h5 style={{ marginBottom: 2 }}>
                              Analyst &rarr; Associate
                           </h5>
                           <h6
                              style={{
                                 color: '#999',
                                 fontStyle: 'italic',
                                 fontWeight: '400',
                                 fontSize: 15,
                                 marginBottom: 15,
                              }}
                           >
                              Brownson, Rehmus & Foxworth, Financial &
                              Investment Advisors
                           </h6>
                           <ul
                              style={{
                                 listStyle: 'none',
                                 padding: '0px 0px 0px 0px',
                                 color: '#888',
                                 fontWeight: '400',
                                 fontSize: 14,
                              }}
                           >
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Utilized my mornings, nights and weekends to
                                 learn and gain experience in web development
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Became a CERTIFIED FINANCIAL PLANNER™
                                 professional
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Developed complex, bespoke materials in Excel
                                 based on client needs, goals and feedback
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Created a data aggregation and organization
                                 tool that enhanced the efficiency of our
                                 investment performance and tracking processes
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Managed a large, diverse range of data
                                 resources and channeled them into client-ready
                                 deliverables
                              </li>
                           </ul>
                        </div>
                     </div>

                     {/* Michigan */}
                     <div
                        style={{
                           display: 'flex',
                           alignItems: 'stretch',
                           justifyContent: 'center',
                           marginBottom: 20,
                        }}
                     >
                        <div
                           style={{
                              flex: 0.2,
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              display: 'flex',
                              fontSize: 12,
                              color: '#fff',
                              fontWeight: '400',
                              letterSpacing: '0.03em',
                           }}
                        >
                           <div
                              style={{
                                 backgroundColor: '#A1DEDA',
                                 //padding: '10px 10px',
                                 borderRadius: 9999,
                                 height: 50,
                                 width: 50,
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                              }}
                           >
                              <div>May</div>
                              <div>2015</div>
                           </div>
                           <div
                              style={{
                                 height: '100%',
                                 backgroundColor: '#e5e5e5',
                                 width: 2,
                                 flex: 0.8,
                              }}
                           />
                           <div
                              style={{
                                 backgroundColor: '#A1DEDA',
                                 //padding: '10px 10px',
                                 borderRadius: 9999,
                                 height: 50,
                                 width: 50,
                                 display: 'flex',
                                 flexDirection: 'column',
                                 alignItems: 'center',
                                 justifyContent: 'center',
                              }}
                           >
                              <div>Sep</div>
                              <div>2011</div>
                           </div>
                        </div>
                        <div
                           style={{
                              display: 'flex',
                              flexDirection: 'column',
                              padding: '10px 0px 10px 20px',
                              maxWidth: 600,
                           }}
                        >
                           <h5 style={{ marginBottom: 2 }}>Student</h5>
                           <h6
                              style={{
                                 color: '#999',
                                 fontStyle: 'italic',
                                 fontWeight: '400',
                                 fontSize: 15,
                                 marginBottom: 15,
                              }}
                           >
                              University of Michigan, College of Literature,
                              Science & the Arts
                           </h6>
                           <ul
                              style={{
                                 listStyle: 'none',
                                 padding: '0px 0px 0px 0px',
                                 color: '#888',
                                 fontWeight: '400',
                                 fontSize: 14,
                              }}
                           >
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 BA in Economics
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 BA in German
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 GPA: 3.88/4.0; Graduated with High Distinction
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Spent every summer interning in a
                                 finance-related role.
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Washed dishes in the dining halls and delivered
                                 pizza for a local shop.
                              </li>
                              <li
                                 style={{
                                    padding: '8px 0px',
                                 }}
                              >
                                 Notable courses completed: Statistics,
                                 Multivariable Calculus, Game Theory,
                                 Mathematical Statistics, Econometrics, Formal
                                 Logic
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </Motion>
      );
   }
}
