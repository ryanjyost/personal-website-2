import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import Project from '../components/project';
import { Motion, spring, presets } from 'react-motion';

class PortfolioPage extends React.Component {
   render() {
      const { data, showSidebar, height, width, isMobile } = this.props;
      const projects = [
         {
            name: 'Newsbie',
            desc:
               'Navigate, analyze and understand the news media. (Using data from News Sites Scraper project)',
            preview: data.newsbie.sizes,
            skills: [
               'React',
               'Node.js',
               'Hapi.js',
               'Redis',
               'MongoDB/Mongoose',
               'Responsive Design',
               'RESTful API',
            ],
            github: 'https://github.com/ryanjyost/newsbie',
            link: 'https://newsbie.io',
         },
         {
            name: 'DepChecker',
            desc: `Audit your project's NPM dependencies and export the report as a CSV file.`,
            preview: data.depchecker.sizes,
            skills: ['React', 'Node.js', 'Web Sockets', 'Socket.io', 'AWS'],
            github: 'https://github.com/ryanjyost/depchecker',
            link: 'https://depchecker.com/',
         },
         {
            name: 'The Daily Gray',
            desc:
               'A web application that offers a better way to consume political news and opinions.',
            preview: data.dailygray.sizes,
            skills: [
               'Node.js',
               'Express',
               'React',
               'MongoDB',
               'ES6',
               'Webpack',
               'Responsive Design',
               'RESTful API',
            ],
            github: 'https://github.com/ryanjyost/the-daily-gray',
            link: 'http://thedailygray.com/',
         },
         {
            name: 'React Simple Storage',
            desc:
               'Simple component and helper functions for using web storage with React. ',
            preview: data.simpleStorage.sizes,
            skills: [
               'React',
               'npm',
               'Web Storage',
               'Open Source',
               'Technical Writing',
            ],
            github: 'https://github.com/ryanjyost/react-simple-storage',
            link:
               'https://ryanjyost.github.io/react-simple-storage-example-project/',
            npm: 'https://www.npmjs.com/package/react-simple-storage',
         },
         {
            name: 'News Sites Scraper',
            desc:
               'A Node.js program that screenshots and scrapes links from dozens of news sites. It uploads the images to a' +
               ' CDN' +
               ' and saves the scraped data and CDN response to a MongoDB database.',
            preview: data.scraper.sizes,
            skills: [
               'Node.js',
               'Express',
               'MongoDB',
               'Async/Await',
               'Puppeteer',
            ],
            github: 'https://github.com/ryanjyost/news-sites-scraper',
            // link:
            //    'https://ryanjyost.github.io/react-simple-storage-example-project/',
            // npm: 'https://www.npmjs.com/package/react-simple-storage',
         },
         {
            name: 'First Job Finance',
            desc:
               'Tools and checklists to help adults-in-progress stress less about their personal finances.',
            preview: data.fjf.sizes,
            skills: [
               'Ember',
               'Handlebars',
               'Local Storage',
               'Sass',
               'Responsive Design',
            ],
            github: 'https://github.com/ryanjyost/first-job-finance',
            link: 'https://first-job-finance.herokuapp.com',
         },
         {
            name: 'The Daily Gray Chrome Extension',
            desc:
               'A chrome extension used to rate, curate and submit content to The Daily Gray.',
            preview: data.extension.sizes,
            skills: ['JavaScript', 'Google API', 'The Daily Gray API'],
            github: 'https://github.com/ryanjyost/stellar-account-dashboard',
            //link: 'https://stellar-account-data.herokuapp.com/',
         },
         {
            name: '100DaysOfJournaling',
            desc:
               'Develop a journaling habit and join a community of anonymous journalers.',
            preview: data.jotlot.sizes,
            skills: ['Meteor.js', 'React', 'MongoDB'],
            github: 'https://github.com/ryanjyost/100DaysOfJournaling',
            // link: 'https://github.com/ryanjyost/100DaysOfJournaling',
         },
         {
            name: 'DOM Events Playground',
            desc: 'A site for learning and playing around with DOM events',
            preview: data.domEvents.sizes,
            skills: ['JavaScript', 'LocalStorage', 'Bootstrap'],
            github: 'https://github.com/ryanjyost/dom-events',
            link: 'https://ryanjyost.github.io/dom-events/',
         },
         {
            name: 'Personal Website 1.0',
            desc: 'My first personal portfolio website.',
            preview: data.personal1.sizes,
            skills: ['Node.js', 'ejs'],
            github: 'https://github.com/ryanjyost/personal-website-v1',
            link: 'https://ryanjyost.herokuapp.com/',
         },
         {
            name: 'Stellar Account Dashboard',
            desc:
               'Your Stellar (digital block chain currency platform) account details.',
            preview: data.stellar.sizes,
            skills: ['Ember', 'Ember Data', '3rd Party API'],
            github: 'https://github.com/ryanjyost/stellar-account-dashboard',
            link: 'https://stellar-account-data.herokuapp.com/',
         },
         {
            name: 'Rainy Day Fund App',
            desc:
               'An app to help users understand the purpose of a rainy day fund and how to establish one.',
            preview: data.rainyDayFund.sizes,
            skills: [
               'React',
               'Redux',
               'React Router',
               'Local Storage',
               'Bootstrap',
            ],
            github: 'https://github.com/ryanjyost/rainy-day-fund',
            link: 'https://ryanjyost.github.io/rainy-day-fund/#/',
         },
      ];

      return (
         <Motion
            defaultStyle={{
               top: -800,
               height: 0,
            }}
            style={{
               top: spring(
                  this.props.location.pathname === '/portfolio' ||
                  !('action' in this.props.location)
                     ? 70
                     : -800,
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
                     flexWrap: 'wrap',
                     alignItems: 'stretch',
                     padding: '10px 10px 80px 10px',
                     justifyContent: 'center',
                     // overflow: 'auto',
                     marginTop: isMobile ? 70 : style.top,
                  }}
               >
                  {projects.map((project, i) => (
                     <Project
                        key={i}
                        i={i}
                        project={project}
                        height={height}
                        width={width}
                     />
                  ))}
               </div>
            )}
         </Motion>
      );
   }
}

export default PortfolioPage;

export const query = graphql`
   query ProjectQuery {
      newsbie: imageSharp(id: { regex: "/newsbie-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      dailygray: imageSharp(id: { regex: "/the-daily-gray-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      depchecker: imageSharp(id: { regex: "/depchecker/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      fjf: imageSharp(id: { regex: "/fjf-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      stellar: imageSharp(id: { regex: "/stellar-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      extension: imageSharp(id: { regex: "/mbm-extension-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      rainyDayFund: imageSharp(id: { regex: "/rainy-day-fund-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      domEvents: imageSharp(id: { regex: "/dom-events-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      jotlot: imageSharp(id: { regex: "/jotlot-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      simpleStorage: imageSharp(id: { regex: "/simple-storage-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
      personal1: imageSharp(id: { regex: "/personal1-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }

      scraper: imageSharp(id: { regex: "/scraper-preview/" }) {
         sizes(maxWidth: 630) {
            ...GatsbyImageSharpSizes
         }
      }
   }
`;
