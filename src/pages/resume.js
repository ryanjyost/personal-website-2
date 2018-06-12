import React from 'react';
import Img from 'gatsby-image';
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
      const { data, showSidebar, height, width } = this.props;
      const { hover } = this.props;

      return (
         <Motion
            defaultStyle={{
               top: -800,
               height: 0,
            }}
            style={{
               top: spring(
                  this.props.location.pathname === '/resume' ? 70 : -800,
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
                     display: 'flex',
                     // flexWrap: 'wrap',
                     flexDirection: 'column',
                     //alignItems: 'stretch',
                     padding: '20px 10px 80px 10px',
                     justifyContent: 'center',
                     overflow: 'auto',
                     marginTop: style.top,
                  }}
               >
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
                        href={withPrefix('resume.pdf')}
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
                  <div style={{ padding: '50px 10px' }}>
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
                              maxWidth: 500,
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
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
                                 }}
                              >
                                 Design, develop and maintain intuitive,
                                 highly-visual web applications that increase
                                 employee productivity
                              </li>
                              <li
                                 style={{
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
                                 }}
                              >
                                 Spearheaded creation of a new React Native
                                 tablet app for warehouse employees
                              </li>
                              <li
                                 style={{
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
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
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
                                 }}
                              >
                                 Enhance development workflows and application
                                 architecture; vet and incorporate new tools and
                                 libraries
                              </li>
                              <li
                                 style={{
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
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
                              maxWidth: 500,
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
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
                                 }}
                              >
                                 Design, develop and maintain intuitive,
                                 highly-visual web applications that increase
                                 employee productivity
                              </li>
                              <li
                                 style={{
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
                                 }}
                              >
                                 Spearheaded creation of a new React Native
                                 tablet app for warehouse employees
                              </li>
                              <li
                                 style={{
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
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
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
                                 }}
                              >
                                 Enhance development workflows and application
                                 architecture; vet and incorporate new tools and
                                 libraries
                              </li>
                              <li
                                 style={{
                                    padding: '5px 0px',
                                    borderBottom: '1px solid #e5e5e5',
                                 }}
                              >
                                 Communicate with and collaborate on the
                                 company’s internal, RESTful APIs
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
