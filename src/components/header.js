import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { Motion, spring, presets } from 'react-motion';
import AnimateHeight from 'react-animate-height';
import Menu from './Menu';

export default class Header extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         didMount: false,
      };
   }

   componentDidMount() {
      setTimeout(
         function() {
            this.setState({ didMount: true });
         }.bind(this),
         2000
      );
   }

   render() {
      const {
         headshot,
         showSidebar,
         isHome,
         height,
         width,
         location,
      } = this.props;
      const { didMount } = this.state;
      const currentPath = location.pathname;

      const renderMessage = () => {
         if (currentPath === '/') {
            return (
               <span style={{ fontSize: showSidebar ? 18 : 14, color: '#555' }}>
                  Hi, I'm Ryan. I'm a web developer.
               </span>
            );
         } else {
            return (
               <span style={{ fontSize: showSidebar ? 18 : 14, color: '#555' }}>
                  Hi, I'm Ryan. I'm a web developer.
               </span>
            );
         }
      };

      return (
         <Motion
            defaultStyle={{
               opacity: 0,

               height: 0,
               width: 0,
               imgSize: 80,
            }}
            style={{
               opacity: spring(didMount ? 1 : 0),
               height: spring(isHome ? height : showSidebar ? 200 : 60, {
                  ...presets.stiff,
                  ...{ precision: 0.9 },
               }),
               width: spring(showSidebar && !isHome ? 100 : width),
               imgSize: spring(isHome ? 80 : showSidebar ? 60 : 45, {
                  ...presets.stiff,
                  ...{ precision: 0.1 },
               }),
            }}
         >
            {style => (
               <div
                  style={{
                     height: style.height,
                     width: style.width,
                     display: 'flex',
                     padding: showSidebar
                        ? '20px 15px 20px 15px'
                        : '10px 15px 10px 15px',
                     alignItems: 'center',
                     justifyContent: 'center',
                     backgroundColor: showSidebar ? 'rgb(17, 17, 17)' : '#fff',
                     overflowWrap: 'break-word',
                     position: showSidebar ? 'relative' : 'fixed',
                     zIndex: 100,

                     // flexDirection: showSidebar || isHome ? 'column' : 'row',
                     flexDirection: 'row',
                     WebkitBoxShadow: !showSidebar
                        ? '1px 7px 13px -11px rgba(136,136,136,1)'
                        : 'none',
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
                        marginTop: showSidebar ? 10 : 0,
                        //border: '1px solid #f2f2f2',
                        // WebkitBoxShadow: '1px 7px 13px -11px rgba(136,136,136,1)',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        lineHeight: 1.2,
                        position: showSidebar ? 'absolute' : 'relative',
                        textAlign: showSidebar ? 'center' : 'left',
                        // maxWidth: 400,
                     }}
                  >
                     {renderMessage()}
                  </div>

                  {showSidebar && isHome ? (
                     <Menu
                        headshot={headshot}
                        showSidebar={showSidebar}
                        isHome={isHome}
                     />
                  ) : null}
               </div>
            )}
         </Motion>
      );
   }
}
