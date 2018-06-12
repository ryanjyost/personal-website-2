import React, { Component } from 'react';
import Link from 'gatsby-link';

import FA from 'react-fontawesome';

import Img from 'gatsby-image';

export default class Menu extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      const { showSidebar, isHome, width } = this.props;
      const showMenuText = width > 500;

      const activeStyle = {
         color: 'white',
      };
      const inactiveButtonStyle = {
         flex: 0.2,
         textAlign: 'center',
         display: 'flex',
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         color: '#a4a4a4',
         textDecoration: 'none',
         borderTop: showMenuText ? '3px solid #333746' : 'none',
         paddingBottom: showMenuText ? 3 : 0,
      };
      return (
         <div
            style={{
               background: isHome && showSidebar ? 'transparent' : '#333746',
               position: 'absolute',
               bottom: showSidebar ? null : 0,
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               //alignItems: 'center',
               width: '100%',
               zIndex: 1100,
               margin: '20px 0px 0px 0px',
               borderRadius: showSidebar && isHome ? 5 : 0,
               marginTop: showSidebar ? 0 : 10,
            }}
         >
            <div
               style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'space-between',
                  height: showMenuText ? 50 : 40,
               }}
            >
               <div
                  style={{
                     margin: '0 auto',
                     width: '100%',
                     display: 'flex',
                     alignItems: 'center',
                     position: 'relative',
                     maxWidth: 800,
                     fontSize: 14,
                  }}
                  className={'bottomMenu'}
               >
                  <Link
                     to="/resume"
                     style={inactiveButtonStyle}
                     activeStyle={activeStyle}
                  >
                     <i
                        className="far fa-file-alt"
                        style={{ fontSize: 20, marginRight: 8 }}
                     />
                     {showMenuText ? 'Experience' : null}
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
                     {showMenuText ? 'Articles' : null}
                  </Link>

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
                     {showMenuText ? 'Home' : null}
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
                     {showMenuText ? 'Portfolio' : null}
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
                     {showMenuText ? 'Skills' : null}
                  </Link>
               </div>
            </div>
         </div>
      );
   }
}
