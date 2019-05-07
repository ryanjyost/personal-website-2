import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

export default class Project extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         hover: false,
         hoverGithub: false,
         hoverLink: false,
         hoverNPM: false,
      };
   }

   render() {
      const { project, i, height, width } = this.props;
      const { hover, hoverGithub, hoverLink, hoverNPM } = this.state;

      const npm = 'npm' in project ? project.npm : null;
      const link = 'link' in project ? project.link : null;
      const projectMargin = 10;

      let projectWidth = '100%';

      if (width > 1000) {
         projectWidth = `calc(33% - ${projectMargin * 6 + 20}px)`;
      } else if (width > 700) {
         projectWidth = `calc(50% - ${projectMargin * 4 + 20}px)`;
      } else {
         projectWidth = `calc(100% - ${projectMargin + 20}px)`;
      }
      return (
         <div
            key={i}
            style={{
               // WebkitBoxShadow: hover
               //   ? '1px 10px 26px -11px rgba(70,70,70,1)'
               //   : '1px 10px 13px -11px rgba(136,136,136,1)',
               WebkitBoxShadow: hover
                  ? '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
                  : '0 2px 4px rgba(0,0,0,0.05), 0 0px 0px rgba(0,0,0,0.22)',
               transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
               backgroundColor: '#fff',
               width: projectWidth,
               minWidth: 300,
               margin: `20px ${projectMargin}px`,
               cursor: 'pointer',
               position: 'relative',
               paddingBottom: 30,
               border: '2px solid #e5e5e5',
            }}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
         >
            <a
               href={project.link}

               // target="_blank"
            >
               <Img
                  sizes={project.preview}
                  imgStyle={{
                     width: '100%',
                     height: 'auto',
                     opacity: 0.9,
                  }}
                  style={{
                     width: '100%',
                     // borderTopRightRadius: 5,
                     //borderTopLeftRadius: 5,
                  }}
               />
               <div
                  className="project__link"
                  style={{
                     padding: '20px 20px',
                     lineHeight: '1.2',
                     borderTop: '1px solid #f2f2f2',
                  }}
               >
                  <div
                     className="project__link"
                     style={{
                        fontSize: 20,
                        width: '100%',
                        fontWeight: 400,
                        color: '#444',
                        textDecoration: 'none',
                     }}
                  >
                     {project.name}
                  </div>
                  <div
                     style={{
                        fontSize: 15,
                        fontWeight: '400',
                        padding: '5px 0px 15px 0px',
                        color: '#888',
                        textDecoration: 'none',
                        lineHeight: 1.2,
                        letterSpacing: '0.02em',
                     }}
                  >
                     {project.desc}
                  </div>
                  <div
                     style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                     }}
                  >
                     {project.skills.map((skill, i) => {
                        return (
                           <div
                              key={i}
                              className="project__link"
                              style={{
                                 backgroundColor: '#fcfcfc',
                                 display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'space-between',
                                 marginRight: 4,
                                 marginBottom: 4,
                                 // WebkitBoxShadow:
                                 //   '1px 7px 13px -11px rgba(136,136,136,1)',
                                 padding: '5px 7px 5px 7px',
                                 borderRadius: 3,
                                 color: '#666',
                                 letterSpacing: '0.02em',
                                 fontSize: 14,
                                 border: '1px solid #f2f2f2',
                              }}
                           >
                              {skill}
                           </div>
                        );
                     })}
                  </div>
               </div>
            </a>
            <div
               style={{
                  display: 'flex',
                  textDecoration: hover ? 'none' : 'none',
                  position: 'absolute',
                  width: '100%',
                  bottom: 0,
                  borderTop: '1px solid #eee',
               }}
            >
               <a
                  href={project.github}
                  // target="_blank"
                  style={{
                     backgroundColor: hoverGithub ? '#f2f2f2' : '#fcfcfc',
                     borderRight: '1px solid  #eee',
                     color: hoverGithub ? '#888' : '#a4a4a4',
                     padding: '5px 10px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     //borderBottomLeftRadius: 5,
                     flex: !npm && !link ? 1 : 0.5,
                     textDecoration: 'none',
                  }}
                  onMouseEnter={() => this.setState({ hoverGithub: true })}
                  onMouseLeave={() => this.setState({ hoverGithub: false })}
               >
                  <i
                     className={'fab fa-github'}
                     style={{
                        fontSize: 20,
                        color: '#a4a4a4',
                        marginRight: 10,
                     }}
                  />Github
               </a>
               {npm ? (
                  <a
                     href={project.npm}
                     // target="_blank"
                     style={{
                        backgroundColor: hoverNPM ? '#f2f2f2' : '#fcfcfc',
                        borderRight: '1px solid  #eee',
                        color: hoverNPM ? '#888' : '#a4a4a4',
                        padding: '5px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 0.5,
                        textDecoration: 'none',
                     }}
                     onMouseEnter={() => this.setState({ hoverNPM: true })}
                     onMouseLeave={() => this.setState({ hoverNPM: false })}
                  >
                     <i
                        className={'fab fa-npm'}
                        style={{
                           fontSize: 20,
                           color: '#a4a4a4',
                           marginRight: 10,
                        }}
                     />npm
                  </a>
               ) : null}
               {link ? (
                  <a
                     href={project.link}
                     target="_blank"
                     style={{
                        backgroundColor: hoverLink ? '#f2f2f2' : '#fcfcfc',
                        // border: '1px solid  #eee',
                        color: hoverLink ? '#888' : '#a4a4a4',
                        padding: '5px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 0.5,
                        textDecoration: 'none',
                        // borderBottomRightRadius: 5,
                     }}
                     onMouseEnter={() => this.setState({ hoverLink: true })}
                     onMouseLeave={() => this.setState({ hoverLink: false })}
                  >
                     <i
                        className={'fas fa-external-link-alt'}
                        style={{
                           fontSize: 16,
                           color: '#a4a4a4',
                           marginRight: 10,
                        }}
                     />Visit
                  </a>
               ) : null}
            </div>
         </div>
      );
   }
}
