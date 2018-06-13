import React, { Component } from 'react';
import Link from 'gatsby-link';
import { Motion, spring, presets } from 'react-motion';

export default class Sidebar extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const {
         showSidebar,
         isHome,
         width,
         sidebarWidth,
         showSidebarWide,
      } = this.props;

      const activeStyle = {
         color: 'white',
         backgroundColor: '#43B2AA',
         fontWeight: '400',
         borderBottomRightRadius: showSidebarWide ? 50 : 50,
         borderTopRightRadius: showSidebarWide ? 50 : 50,
         width: showSidebarWide ? '105%' : '125%',
      };
      const inactiveButtonStyle = {
         padding: showSidebarWide ? '12px 20px 12px 30px' : '10px 0px',
         margin: showSidebarWide ? '0px' : '5px 0px',
         color: '#a4a4a4',
         width: '100%',
         fontWeight: '100',
         textAlign: showSidebar && !showSidebarWide ? 'center' : 'left',
      };
      return (
         <div
            style={{
               background: '#333746',
               position: 'fixed',
               height: '100vh',
               width: sidebarWidth,
               zIndex: 1100,
               display: 'flex',
               flexDirection: 'column',
            }}
         >
            {showSidebarWide ? (
               <div style={{ padding: '20px 0px 0px 20px' }}>
                  <div
                     style={{
                        width: '100%',
                        color: '#f2f2f2',
                        fontSize: 24,
                        letterSpacing: '0.03em',
                        marginBottom: '10px',
                     }}
                  >
                     Ryan J Yost
                  </div>
                  <div
                     style={{
                        width: '100%',
                        color: '#d1d1d1',
                        fontSize: 12,
                        fontWeight: '400',
                        padding: '0px 10px 0px 3px',
                        letterSpacing: '0.03em',
                     }}
                  >
                     Front End Web Developer
                  </div>
               </div>
            ) : (
               <div
                  style={{
                     width: '100%',
                     color: '#f2f2f2',
                     fontSize: 24,
                     letterSpacing: '0.03em',
                     flexDirection: 'column',
                     padding: '20px 12px 0px 12px',
                     lineHeight: 0.7,
                  }}
               >
                  <div style={{ width: '100%' }}>R</div>
                  <div style={{ width: '100%', textAlign: 'center' }}>J</div>
                  <div style={{ width: '100%', textAlign: 'right' }}>Y</div>
               </div>
            )}

            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: showSidebarWide ? 'flex-start' : 'center',
                  paddingTop: 50,
               }}
               className={'bottomMenu'}
            >
               <Link
                  exact
                  to="/"
                  style={inactiveButtonStyle}
                  activeStyle={activeStyle}
               >
                  <i
                     className="fas fa-home"
                     style={{ fontSize: 20, marginRight: 8 }}
                  />
                  {showSidebarWide ? 'Home' : null}
               </Link>
               <Link
                  to="/portfolio"
                  style={inactiveButtonStyle}
                  activeStyle={activeStyle}
               >
                  <i
                     className="far fa-folder-open"
                     style={{ fontSize: 20, marginRight: 8 }}
                  />
                  {showSidebarWide ? 'Portfolio' : null}
               </Link>
               <Link
                  to="/skills"
                  style={inactiveButtonStyle}
                  activeStyle={activeStyle}
               >
                  <i
                     className="fas fa-cog"
                     style={{ fontSize: 20, marginRight: 8 }}
                  />
                  {showSidebarWide ? 'Skills' : null}
               </Link>
               <Link
                  to="/writing"
                  style={inactiveButtonStyle}
                  activeStyle={activeStyle}
               >
                  <i
                     className="fas fa-pencil-alt"
                     style={{ fontSize: 20, marginRight: 8 }}
                  />
                  {showSidebarWide ? 'Writing' : null}
               </Link>
               <Link
                  to="/resume"
                  style={inactiveButtonStyle}
                  activeStyle={activeStyle}
               >
                  <i
                     className="far fa-file-alt"
                     style={{ fontSize: 20, marginRight: 8 }}
                  />
                  {showSidebarWide ? 'Experience' : null}
               </Link>
            </div>
         </div>
      );
   }
}
