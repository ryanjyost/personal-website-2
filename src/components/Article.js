import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

export default class Article extends React.Component {
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
      const { article, i, width, height } = this.props;
      const { hover, hoverGithub, hoverLink, hoverNPM } = this.state;

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
               // border: '2px solid #f2f2f2',
               borderBottom: 'none',
               border: '1px solid #f2f2f2',
               // borderRadius: 5,
               backgroundColor: '#fff',
               width: projectWidth,
               minWidth: 300,
               margin: `20px ${projectMargin}px`,
               cursor: 'pointer',
               position: 'relative',
               paddingBottom: 30,
            }}
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
         >
            <a
               href={article.link}
               // target="_blank"
            >
               <Img
                  sizes={article.preview}
                  imgStyle={{
                     width: '100%',
                     height: 'auto',
                     opacity: 0.9,
                  }}
                  style={{
                     width: '100%',
                  }}
               />
               <div
                  className="article__link"
                  style={{
                     padding: '20px 20px',
                     lineHeight: '1.2',
                     borderTop: '1px solid #f2f2f2',
                  }}
               >
                  <div
                     className="article__link"
                     style={{
                        fontSize: 20,
                        width: '100%',
                        fontWeight: 400,
                        color: '#444',
                        textDecoration: 'none',
                     }}
                  >
                     {article.name}
                  </div>
                  <div
                     style={{
                        fontSize: 15,
                        fontWeight: 200,
                        padding: '5px 0px 15px 0px',
                        color: '#888',
                        textDecoration: 'none',
                        lineHeight: 1.2,
                        letterSpacing: '0.02em',
                     }}
                  >
                     {article.desc}
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
                  border: '1px solid #fcfcfc',
                  borderTop: '1px solid #eee',
               }}
            >
               <a
                  href={article.link}
                  target="_blank"
                  style={{
                     backgroundColor: hoverLink ? '#f2f2f2' : '#fcfcfc',
                     // border: '1px solid  #eee',
                     color: hoverLink ? '#888' : '#a4a4a4',
                     padding: '5px 10px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     flex: 1,
                     textDecoration: 'none',
                  }}
                  onMouseEnter={() => this.setState({ hoverLink: true })}
                  onMouseLeave={() => this.setState({ hoverLink: false })}
               >
                  <i
                     className={'fas fa-external-link-alt'}
                     style={{
                        fontSize: 20,
                        color: '#a4a4a4',
                        marginRight: 10,
                     }}
                  />Read in a New Tab
               </a>
            </div>
         </div>
      );
   }
}
