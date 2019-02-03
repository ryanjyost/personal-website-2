import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { withPrefix } from 'gatsby-link/index';

const IndexPage = ({ data, showSidebar, height, width, isMobile, images }) => {
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

   const renderButton = btn => {
      return (
         <a
            className={'contactBtn'}
            key={btn.text}
            href={
               btn.text === 'Resume'
                  ? withPrefix('ryanjyost_resume.pdf')
                  : btn.link
            }
            style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               backgroundColor: 'rgba(255, 255, 255, 0.95)',
               // WebkitBoxShadow: '0 2px 4px #d8d8d8, 0 2px 2px #d8d8d8',
               transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
               border: '1px solid #f2f2f2',
               padding: '5px 20px',
               borderRadius: 50,
               fontSize: isMobile ? 14 : 16,
               color: '#333746',
               fontWeight: '400',
               letterSpacing: '0.02em',
               margin: '10px 10px',
            }}
            download={btn.download}
         >
            <i
               className={btn.icon}
               style={{ marginRight: 10, fontSize: isMobile ? 18 : 20 }}
            />
            {btn.text}
         </a>
      );
   };
   return (
      <div
         style={{
            padding: showSidebar ? '20vh 100px 100px 100px' : '100px 20px',
            width: '100vw',
            backgroundColor: '#43B2AA',
            minHeight: '100vh',
            display: 'flex',
         }}
      >
         <div
            style={{
               maxWidth: 600,
               fontSize: 20,
               letterSpacing: '0.02em',
               fontWeight: '400',
               lineHeight: 1.5,
               color: 'rgba(255, 255, 255, 0.9)',
            }}
         >
            <div
               style={{
                  display: 'flex',
                  alignItems: 'center',
               }}
            >
               <Img
                  title="Headshot"
                  alt="Ryan Yost Headshot"
                  sizes={images.headshot.sizes}
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
            <div style={{ marginTop: 5, fontSize: isMobile ? 16 : 20 }}>
               I'm a{' '}
               <strong
                  style={{
                     fontSize: isMobile ? 20 : 24,
                     fontWeight: 'bold',
                     color: '#fff',
                  }}
               >
                  web developer
               </strong>{' '}
               who's all about creating{' '}
               <strong
                  style={{
                     fontSize: isMobile ? 20 : 24,
                     fontWeight: 'bold',
                     color: '#fff',
                  }}
               >
                  unique, responsive
               </strong>{' '}
               web apps, rooted in fundamental{' '}
               <strong
                  style={{
                     fontSize: isMobile ? 20 : 24,
                     fontWeight: 'bold',
                     color: '#fff',
                  }}
               >
                  UI design
               </strong>{' '}
               principles and built with{' '}
               <strong
                  style={{
                     fontSize: isMobile ? 20 : 24,
                     fontWeight: 'bold',
                     color: '#fff',
                  }}
               >
                  modern tech.
               </strong>
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
         {/*<Link*/}
         {/*to="/portfolio"*/}
         {/*style={{*/}
         {/*width: '100%',*/}
         {/*display: 'flex',*/}
         {/*alignItems: 'center',*/}
         {/*bottom: '70px',*/}
         {/*zIndex: 1300,*/}
         {/*fontSize: 18,*/}
         {/*color: 'rgba(255, 255, 255, 0.8)',*/}
         {/*marginTop: 50,*/}
         {/*}}*/}
         {/*>*/}
         {/*<i*/}
         {/*className={'fas fa-hand-point-right'}*/}
         {/*style={{ marginRight: 10, fontSize: 20 }}*/}
         {/*/>*/}
         {/*<div>Check out what I've built (so far)</div>*/}
         {/*</Link>*/}
      </div>
   );
};

export default IndexPage;
