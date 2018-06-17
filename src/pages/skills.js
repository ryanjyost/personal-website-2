import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { Motion, spring, presets } from 'react-motion';

export default class SkillsPage extends React.Component {
   render() {
      const { images, showSidebar, location, isMobile } = this.props;

      const skills = [
         {
            name: 'JavaScript',
            icon: 'fab fa-js-square',
            color: '#f7df1e',
            isFile: false,
            factor: 2.5,
            type: 'front',
         },
         {
            name: 'React',
            icon: 'fab fa-react',
            color: '#61dafb',
            isFile: false,
            factor: 2.5,
            type: 'front',
         },
         {
            name: 'Redux',
            icon: images.redux.sizes,
            color: '#61dafb',
            isFile: true,
            factor: 2,
            type: 'front',
         },

         {
            name: 'React Native',
            icon: 'fab fa-react',
            color: '#111',
            isFile: false,
            factor: 2,
            type: 'front',
         },
         {
            name: 'Bootstrap',
            icon: images.bootstrap.sizes,
            color: '#61dafb',
            isFile: true,
            factor: 2,
            type: 'front',
         },
         {
            name: 'HTML5',
            icon: 'fab fa-html5',
            color: '#E34C26',
            isFile: false,
            factor: 2,
            type: 'front',
         },
         {
            name: 'CSS3',
            icon: 'fab fa-css3-alt',
            color: '#3B5998',
            isFile: false,
            factor: 2,
            type: 'front',
         },
         {
            name: 'Ember',
            icon: images.ember.sizes,
            color: '#61dafb',
            isFile: true,
            factor: 1.5,
            type: 'front',
         },
         {
            name: 'Responsive Design',
            icon: 'fas fa-expand',
            color: '#888',
            isFile: false,
            factor: 1.5,
            type: 'front',
         },
         {
            name: 'Node.js',
            icon: 'fab fa-node',
            color: '#43853d',
            isFile: false,
            factor: 1.5,
            type: 'back',
         },
         {
            name: 'REST API',
            icon: 'fas fa-exchange-alt',
            color: '#888',
            isFile: false,
            factor: 1.5,
         },
         {
            name: 'MongoDB',
            icon: images.mongodb.sizes,
            color: '#61dafb',
            isFile: true,
            factor: 1.5,
            type: 'back',
         },
         {
            name: 'Git',
            icon: 'fab fa-git-square',
            color: '#f14e32',
            isFile: false,
            factor: 1.5,
         },

         {
            name: 'ES6 / ES7',
            icon: 'fab fa-js-square',
            color: '#f7df1e',
            isFile: false,
            factor: 2,
         },
         {
            name: 'Express',
            icon: 'fab fa-node-js',
            color: '#555',
            isFile: false,
            factor: 1.5,
            type: 'back',
         },
         {
            name: 'Technical Writing',
            icon: 'fas fa-pencil-alt',
            color: '#888',
            isFile: false,
            factor: 1.5,
         },

         {
            name: 'jQuery',
            icon: images.jquery.sizes,
            color: '#61dafb',
            isFile: true,
            factor: 1.5,
            type: 'front',
         },
         {
            name: 'Handlebars',
            icon: images.handlebars.sizes,
            color: '#61dafb',
            isFile: true,
            factor: 1.2,
            type: 'front',
         },

         {
            name: 'Sass/SCSS',
            icon: 'fab fa-sass',
            color: '#c6538c',
            isFile: false,
            factor: 1,
            type: 'front',
         },

         {
            name: 'npm',
            icon: 'fab fa-npm',
            color: '#cb3837',
            isFile: false,
            factor: 2,
         },
         {
            name: 'Webpack',
            icon: images.webpack.sizes,
            color: '#61dafb',
            isFile: true,
            factor: 1.5,
            type: 'front',
         },
         {
            name: 'Babel',
            icon: images.babel.sizes,
            color: '#61dafb',
            isFile: true,
            factor: 1,
            type: 'front',
         },
         {
            name: 'WordPress',
            icon: 'fab fa-wordpress',
            color: '#0087be',
            isFile: false,
            factor: 1,
         },

         {
            name: 'UI/UX Design',
            icon: 'fas fa-user',
            color: '#333',
            isFile: false,
            factor: 1.5,
            type: 'front',
         },
         {
            name: 'Meteor.js',
            icon: images.meteor.sizes,
            color: '#333',
            isFile: true,
            factor: 1.5,
            type: 'back',
         },
      ];

      const renderSkill = skill => {
         const screenSizeFactor = showSidebar ? 1 : 0.5;
         return (
            <Motion
               defaultStyle={{
                  opacity: 0,
                  top: 800,
               }}
               style={{
                  opacity: spring(
                     this.props.location.pathname === '/skills' ? 1 : 0,
                     { ...presets.stiff, ...{ precision: 0.1 } }
                  ),
                  top: spring(
                     this.props.location.pathname === '/skills' ||
                     !('action' in this.props.location)
                        ? 0
                        : 800,
                     {
                        ...presets.stiff,
                        ...{ precision: 0.9 },
                     }
                  ),
               }}
            >
               {style => (
                  <div
                     style={{
                        backgroundColor: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        //justifyContent: 'space-between',
                        WebkitBoxShadow:
                           '1px 7px 6px -11px rgba(136,136,136,1)',
                        padding: '10px 15px',
                        border: '1px solid #f2f2f2',
                        borderRadius: 5,
                        color: '#666',
                        letterSpacing: '0.02em',
                        marginTop: isMobile ? 0 : -style.top,
                     }}
                  >
                     {skill.isFile ? (
                        <Img
                           sizes={skill.icon}
                           style={{
                              height: Math.floor(20 * 2 * screenSizeFactor),
                              width: Math.floor(20 * 2 * screenSizeFactor + 2),
                              marginRight: 7,
                           }}
                        />
                     ) : (
                        <i
                           className={skill.icon}
                           style={{
                              fontSize: Math.floor(20 * 2 * screenSizeFactor),
                              marginRight: 7,
                              color: skill.color,
                           }}
                        />
                     )}
                     <div
                        style={{
                           marginTop: 2,
                           fontWeight: '400',
                           fontSize: Math.floor(14 + 2 * screenSizeFactor),
                        }}
                     >
                        {skill.name}
                     </div>
                  </div>
               )}
            </Motion>
         );
      };

      return (
         <div
            style={{
               padding: '30px 5% 80px 5%',
               display: 'flex',
               flexWrap: 'wrap',
               alignItems: 'stretch',
               // justifyContent: 'center',
               marginTop: showSidebar ? 70 : 70,
               //overflow: 'scroll',
            }}
         >
            <h6
               style={{
                  width: '100%',
                  fontWeight: '100',
                  color: '#ccc',
                  //borderBottom: '1px solid #f2f2f2',
                  paddingBottom: 5,
               }}
            >
               FRONT END
            </h6>
            <div
               style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  // justifyContent: 'center',
                  padding: '10px 0px 50px 0px',
               }}
            >
               {skills.map((skill, i) => {
                  if ('type' in skill) {
                     if (skill.type === 'front') {
                        return (
                           <div
                              key={i}
                              style={{ marginRight: 10, marginBottom: 10 }}
                           >
                              {renderSkill(skill)}
                           </div>
                        );
                     }
                  }
               })}
            </div>
            <h6
               style={{
                  width: '100%',
                  fontWeight: '100',
                  color: '#ccc',
                  //borderBottom: '1px solid #f2f2f2',
                  paddingBottom: 5,
               }}
            >
               BACK END
            </h6>
            <div
               style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  // justifyContent: 'center',
                  padding: '10px 0px 50px 0px',
               }}
            >
               {skills.map((skill, i) => {
                  if ('type' in skill) {
                     if (skill.type === 'back') {
                        return (
                           <div
                              key={i}
                              style={{ marginRight: 10, marginBottom: 10 }}
                           >
                              {renderSkill(skill)}
                           </div>
                        );
                     }
                  }
               })}
            </div>

            <h6
               style={{
                  width: '100%',
                  fontWeight: '100',
                  color: '#ccc',
                  //borderBottom: '1px solid #f2f2f2',
                  paddingBottom: 5,
               }}
            >
               MISFITS
            </h6>
            <div
               style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  // justifyContent: 'center',
                  padding: '10px 0px 50px 0px',
                  position: 'relative',
               }}
            >
               {skills.map((skill, i) => {
                  if (!('type' in skill)) {
                     return (
                        <div
                           key={i}
                           style={{ marginRight: 10, marginBottom: 10 }}
                        >
                           {renderSkill(skill)}
                        </div>
                     );
                  }
               })}
            </div>
         </div>
      );
   }
}
