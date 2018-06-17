import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { Motion, spring, presets } from 'react-motion';
import { withPrefix } from 'gatsby-link/index';

export default class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         didMount: false,
         currentMessage: `Hi, I'm Ryan. Glad you made it to my website.`,
         isFirstPath: true,
         visitedPortfolio: false,
         visitedSkills: false,
         visitedResume: false,
         transitioning: false,
      };

      this.transition = null;
      this.timeout1 = null;
      this.portfolio2 = null;
   }

   componentDidMount() {
      setTimeout(
         function() {
            this.setState({ didMount: true });
         }.bind(this),
         500
      );
   }

   transitionMessage(message) {
      clearTimeout(this.transition);
      this.setState({ transitioning: true });

      this.transition = setTimeout(
         function() {
            this.setState({
               currentMessage: message,
               transitioning: false,
            });
         }.bind(this),
         500
      );
   }

   portfolioMessage() {
      if (this.state.visitedPortfolio) {
         this.transitionMessage(`Explore my portfolio of apps and projects.`);
      } else {
         this.transitionMessage(
            `I'm always working on fun, challenging side projects.`
         );

         this.timeout1 = setTimeout(
            function() {
               this.transitionMessage(
                  `Here are some of the things I've built.`
               );
            }.bind(this),
            3000
         );
      }
   }

   skillsMessage() {
      if (this.state.visitedSkills) {
         this.transitionMessage(
            `Check out my growing arsenal of skills, tools and experience.`
         );
      } else {
         this.transitionMessage(
            `Building awesome things requires the right skills and experience for the job.`
         );

         this.timeout1 = setTimeout(
            function() {
               this.transitionMessage(
                  `These are some of the tools I use to bring my and other's ideas to life.`
               );
            }.bind(this),
            4000
         );
      }
   }

   articlesMessage() {
      if (this.state.visitedArticles) {
         this.transitionMessage(
            `I've published a handful of tutorials on Hacker Noon and my own blog.`
         );
      } else {
         this.transitionMessage(
            `As a self-taught developer, I've benefited from tons of free material.`
         );

         this.timeout1 = setTimeout(
            function() {
               this.transitionMessage(
                  `So I create my own content whenever I think it can help the community.`
               );
            }.bind(this),
            4000
         );
      }
   }

   resumeMessage() {
      if (this.state.visitedResume) {
         this.transitionMessage(`Scroll down to see where I've been.`);
      } else {
         this.transitionMessage(
            `I initially learned how to program in my spare time while working in finance.`
         );

         this.timeout1 = setTimeout(
            function() {
               this.transitionMessage(
                  `Now I'm a professional developer - and loving every minute of it. `
               );
            }.bind(this),
            4000
         );
      }
   }

   componentWillReceiveProps(nextProps) {
      const path = nextProps.location.pathname;

      if (this.props.location.pathname !== path || this.state.isFirstPath) {
         clearTimeout(this.timeout1);
         this.timeout1 = null;
         clearTimeout(this.transition);
         this.transition = null;

         switch (path) {
            case '/portfolio':
               this.setState({ visitedPortfolio: true });
               this.portfolioMessage();
               break;
            case '/skills':
               this.setState({ visitedSkills: true });
               this.skillsMessage();
               break;
            case '/writing':
               this.setState({ visitedArticles: true });
               this.articlesMessage();
               break;
            case '/about':
               this.setState({ visitedResume: true });
               this.resumeMessage();
               break;
            case '/':
               this.setState({ currentMessage: '' });
               break;
            default:
               break;
         }
      }

      this.setState({ isFirstPath: false });
   }

   render() {
      const {
         headshot,
         showSidebar,
         showSidebarWide,
         isHome,
         height,
         width,
         location,
         isMobile,
      } = this.props;
      const { didMount } = this.state;
      const currentPath = location.pathname;
      const buttons = [
         {
            text: 'ryanjyost@gmail.com',
            icon: 'fas fa-envelope',
            link: 'mailto:ryanjyost@gmail.com',
         },
         {
            text: 'GitHub',
            icon: 'fab fa-github',
            link: 'https://github.com/ryanjyost',
         },
         {
            text: 'LinkedIn',
            icon: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/ryan-yost-b5b2bb65/',
         },
         {
            text: '@ryanjyost',
            icon: 'fab fa-twitter',
            link: 'https://twitter.com/ryanjyost',
         },
         {
            text: 'Resume',
            icon: 'fas fa-cloud-download-alt',
         },
      ];

      const renderHome = () => {
         const renderButton = btn => {
            return (
               <a
                  className={'contactBtn'}
                  key={btn.text}
                  href={
                     btn.text === 'Resume' ? withPrefix('resume.pdf') : btn.link
                  }
                  style={{
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     backgroundColor: '#f2f2f2',
                     // WebkitBoxShadow: '0 2px 4px #d8d8d8, 0 2px 2px #d8d8d8',
                     transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
                     border: '1px solid #f2f2f2',
                     padding: '5px 20px',
                     borderRadius: 50,
                     fontSize: 16,
                     color: '#333746',
                     fontWeight: '400',
                     letterSpacing: '0.02em',
                     margin: '10px 10px',
                  }}
                  download={btn.download}
               >
                  <i
                     className={btn.icon}
                     style={{ marginRight: 10, fontSize: 20 }}
                  />
                  {btn.text}
               </a>
            );
         };
         return (
            <div
               style={{
                  padding: showSidebar ? '0px 50px' : '0px 10px',
                  marginBottom: 100,
                  maxWidth: 700,
               }}
            >
               <div
                  style={{
                     fontSize: 20,
                     // display: 'flex',
                     // alignItems: 'baseline',
                     // flexWrap: 'wrap',
                     // textAlign: 'justify',
                     letterSpacing: '0.02em',
                     fontWeight: '400',
                     lineHeight: 1.5,
                     color: '#f2f2f2',
                  }}
               >
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                     <Img
                        title="Headshot"
                        alt="Ryan Yost Headshot"
                        sizes={headshot.sizes}
                        style={{
                           height: isMobile ? 50 : 70,
                           width: isMobile ? 50 : 70,
                           borderRadius: '9999px',
                           border: '2px solid #A1DEDA',
                           marginRight: 15,
                        }}
                     />
                     <span
                        style={{
                           fontSize: isMobile ? 26 : 36,
                           fontWeight: 'bold',
                        }}
                     >
                        Hi, I'm Ryan.&nbsp;
                     </span>{' '}
                  </div>
                  <div style={{ marginTop: 5 }}>
                     I'm a{' '}
                     <strong
                        style={{
                           fontSize: 24,
                           fontWeight: 'bold',
                           color: '#fff',
                        }}
                     >
                        web developer
                     </strong>{' '}
                     who's all about creating unique, responsive{' '}
                     <strong
                        style={{
                           fontSize: 24,
                           fontWeight: 'bold',
                           color: '#fff',
                        }}
                     >
                        web apps
                     </strong>, rooted in fundamental{' '}
                     <strong
                        style={{
                           fontSize: 24,
                           fontWeight: 'bold',
                           color: '#fff',
                        }}
                     >
                        UI design principles
                     </strong>{' '}
                     and built with{' '}
                     <strong
                        style={{
                           fontSize: 24,
                           fontWeight: 'bold',
                           color: '#fff',
                        }}
                     >
                        modern tech
                     </strong>.
                  </div>
                  <div
                     style={{
                        marginTop: 30,
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                     }}
                  >
                     {buttons.map(btn => {
                        return renderButton(btn);
                     })}
                  </div>
               </div>
               {/*Seamlessly responsive web design <br /> pulsating arrows to next*/}
               {/*section, contact icons in sidebar*/}
            </div>
         );
      };

      return (
         <Motion
            defaultStyle={{
               opacity: 0,
               height: 0,
               width: 0,
               imgSize: 80,
               message: 1,
            }}
            style={{
               opacity: spring(didMount ? 1 : 0),
               message: spring(this.state.transitioning ? 0 : 1),
               height: spring(isHome ? height : showSidebar ? 60 : 60, {
                  ...presets.stiff,
                  ...{ precision: 0.9 },
               }),
               width: spring(showSidebar && !isHome ? width : width),
               imgSize: spring(isHome ? 80 : showSidebar ? 50 : 50, {
                  ...presets.stiff,
                  ...{ precision: 0.1 },
               }),
            }}
         >
            {style => (
               <div style={{ position: 'fixed', zIndex: 1000 }}>
                  <div
                     style={{
                        height: style.height,
                        position: 'relative',
                        width: width,
                        display: 'flex',
                        padding: showSidebar
                           ? '20px 15px 20px 25px'
                           : '10px 15px 10px 15px',
                        alignItems: showSidebar ? 'flex-start' : 'center',
                        justifyContent: isHome ? 'center' : 'center',
                        backgroundColor: isHome ? 'rgba(67,178,170,1)' : '#fff',
                        // background: isHome
                        //    ? 'linear-gradient(-45deg, rgba(204,232,230,1) 0%, rgba(67,178,170,1) 100%)'
                        //    : '#fff',
                        overflowWrap: 'break-word',
                        //position: 'fixed',
                        marginTop: 0,
                        zIndex: 100,
                        flexDirection: isHome || showSidebar ? 'column' : 'row',
                        WebkitBoxShadow:
                           '1px 7px 13px -11px rgba(136,136,136,1)',
                     }}
                  >
                     {isHome ? (
                        renderHome()
                     ) : (
                        <div
                           style={{
                              display: 'flex',
                              alignItems: 'center',
                              maxWidth: 1000,
                              width: '100%',
                              backgroundColor: '#fff',
                              overflowWrap: 'break-word',
                              height: style.height,
                           }}
                        >
                           <Img
                              title="Headshot"
                              alt="Ryan Yost Headshot"
                              sizes={headshot.sizes}
                              style={{
                                 height: style.imgSize,
                                 width: style.imgSize,
                                 borderRadius: '9999px',
                                 border: '2px solid #f2f2f2',
                                 marginRight: showSidebar ? 0 : 10,
                                 opacity: style.opacity,
                              }}
                           />
                           <div
                              className={'message'}
                              style={{
                                 // backgroundColor: '#f1f1f1',
                                 height: 30,
                                 opacity: style.opacity,
                                 display: 'flex',
                                 alignItems: 'center',
                                 flexDirection: 'column',
                                 justifyContent: 'center',
                                 padding: '12px',
                                 borderRadius: '8px',
                                 //border: '1px solid #f2f2f2',
                                 // WebkitBoxShadow: '1px 7px 13px -11px rgba(136,136,136,1)',
                                 wordWrap: 'break-word',
                                 overflowWrap: 'break-word',
                                 lineHeight: 1.2,
                                 position: 'relative',
                                 textAlign: 'left',
                                 // maxWidth: 400,
                              }}
                           >
                              <span
                                 style={{
                                    fontSize:
                                       this.state.currentMessage.length > 70 &&
                                       !showSidebar
                                          ? 14
                                          : 16,
                                    color: '#555',
                                    opacity: style.message,
                                    lineHeight: 1.3,
                                 }}
                              >
                                 {this.state.currentMessage}
                              </span>
                           </div>
                        </div>
                     )}
                  </div>

                  <Link
                     to="/portfolio"
                     style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'absolute',
                        bottom: '70px',
                        zIndex: 1300,
                        padding: showSidebar ? '0px 70px' : '0px 25px',
                        fontSize: 18,
                        color: '#d8d8d8',
                     }}
                  >
                     <i
                        className={'fas fa-hand-point-right'}
                        style={{ marginRight: 10, fontSize: 20 }}
                     />
                     <div>Check out what I've built (so far)</div>
                  </Link>

                  {/*{width < 500 ? (*/}
                  {/*<div*/}
                  {/*style={{*/}
                  {/*position: 'absolute',*/}
                  {/*bottom: '45px',*/}
                  {/*width: '100%',*/}
                  {/*color: '#d8d8d8',*/}
                  {/*zIndex: 1300,*/}
                  {/*display: 'flex',*/}
                  {/*alignItems: 'center',*/}
                  {/*fontSize: 12,*/}
                  {/*letterSpacing: '0.02em',*/}
                  {/*fontWeight: '300',*/}
                  {/*}}*/}
                  {/*>*/}
                  {/*<div*/}
                  {/*style={{*/}
                  {/*flex: 0.2,*/}
                  {/*textAlign: 'center',*/}
                  {/*flexDirection: 'column',*/}
                  {/*justifyContent: 'center',*/}
                  {/*}}*/}
                  {/*>*/}
                  {/*<div>About Me</div>*/}
                  {/*<i className="fas fa-angle-down" />*/}
                  {/*</div>*/}
                  {/*<div*/}
                  {/*style={{*/}
                  {/*flex: 0.2,*/}
                  {/*textAlign: 'center',*/}
                  {/*flexDirection: 'column',*/}
                  {/*justifyContent: 'center',*/}
                  {/*}}*/}
                  {/*>*/}
                  {/*<div>Writing</div>*/}
                  {/*<i className="fas fa-angle-down" />*/}
                  {/*</div>*/}
                  {/*<div*/}
                  {/*style={{*/}
                  {/*flex: 0.2,*/}
                  {/*textAlign: 'center',*/}
                  {/*flexDirection: 'column',*/}
                  {/*justifyContent: 'center',*/}
                  {/*}}*/}
                  {/*/>*/}
                  {/*<div*/}
                  {/*style={{*/}
                  {/*flex: 0.2,*/}
                  {/*textAlign: 'center',*/}
                  {/*flexDirection: 'column',*/}
                  {/*justifyContent: 'center',*/}
                  {/*}}*/}
                  {/*>*/}
                  {/*<div>Portfolio</div>*/}
                  {/*<i className="fas fa-angle-down" />*/}
                  {/*</div>*/}
                  {/*<div*/}
                  {/*style={{*/}
                  {/*flex: 0.2,*/}
                  {/*textAlign: 'center',*/}
                  {/*flexDirection: 'column',*/}
                  {/*justifyContent: 'center',*/}
                  {/*}}*/}
                  {/*>*/}
                  {/*<div>Skills</div>*/}
                  {/*<i className="fas fa-angle-down" />*/}
                  {/*</div>*/}
                  {/*</div>*/}
                  {/*) : null}*/}
               </div>
            )}
         </Motion>
      );
   }
}
