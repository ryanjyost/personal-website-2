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
         borderBottomRightRadius: showSidebarWide ? 50 : 0,
         borderTopRightRadius: showSidebarWide ? 50 : 0,
         width: showSidebarWide ? '105%' : '100%',
      };
      const inactiveButtonStyle = {
         padding: showSidebarWide ? '10px 20px 10px 30px' : '10px 0px',
         color: '#a4a4a4',
         width: '100%',
         fontWeight: '100',
      };
      return (
         <div
            style={{
               background: '#333746',
               position: 'fixed',
               height: '100vh',
               width: sidebarWidth,
               zIndex: 1100,
            }}
         >
            <div
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: showSidebarWide ? 'flex-start' : 'center',
                  paddingTop: 100,
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
                  to="/articles"
                  style={inactiveButtonStyle}
                  activeStyle={activeStyle}
               >
                  <i
                     className="fas fa-pencil-alt"
                     style={{ fontSize: 20, marginRight: 8 }}
                  />
                  {showSidebarWide ? 'Articles' : null}
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
