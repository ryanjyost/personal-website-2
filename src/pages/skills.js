import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

const SkillsPage = ({ images, showSidebar }) => {
  const skills = [
    {
      name: 'JavaScript',
      icon: 'fab fa-js-square',
      color: '#f7df1e',
      isFile: false,
      factor: 2.5,
    },
    {
      name: 'React',
      icon: 'fab fa-react',
      color: '#61dafb',
      isFile: false,
      factor: 2.5,
    },
    {
      name: 'Redux',
      icon: images.redux.sizes,
      color: '#61dafb',
      isFile: true,
      factor: 2,
    },

    {
      name: 'React Native',
      icon: 'fab fa-react',
      color: '#111',
      isFile: false,
      factor: 2,
    },
    {
      name: 'Bootstrap',
      icon: images.bootstrap.sizes,
      color: '#61dafb',
      isFile: true,
      factor: 2,
    },
    {
      name: 'HTML5',
      icon: 'fab fa-html5',
      color: '#E34C26',
      isFile: false,
      factor: 2,
    },
    {
      name: 'CSS3',
      icon: 'fab fa-css3-alt',
      color: '#3B5998',
      isFile: false,
      factor: 2,
    },
    {
      name: 'Ember',
      icon: images.ember.sizes,
      color: '#61dafb',
      isFile: true,
      factor: 1.5,
    },
    {
      name: 'Responsive Design',
      icon: 'fas fa-expand',
      color: '#888',
      isFile: false,
      factor: 1.5,
    },
    {
      name: 'Node.js',
      icon: 'fab fa-node',
      color: '#43853d',
      isFile: false,
      factor: 1.5,
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
    },
    {
      name: 'Handlebars',
      icon: images.handlebars.sizes,
      color: '#61dafb',
      isFile: true,
      factor: 1.2,
    },

    {
      name: 'Sass/SCSS',
      icon: 'fab fa-sass',
      color: '#c6538c',
      isFile: false,
      factor: 1,
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
    },
    {
      name: 'Babel',
      icon: images.babel.sizes,
      color: '#61dafb',
      isFile: true,
      factor: 1,
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
    },
  ]
  const renderSkill = skill => {
    return (
      <div
        style={{
          backgroundColor: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          WebkitBoxShadow: '1px 7px 13px -11px rgba(136,136,136,1)',
          padding: '10px 15px',
          border: '1px solid #f2f2f2',
          borderRadius: 5,
          color: '#666',
          letterSpacing: '0.02em',
        }}
      >
        {skill.isFile ? (
          <Img
            title="Redux"
            alt="Redux Icon"
            sizes={skill.icon}
            style={{
              height: Math.floor(20 * 2),
              width: Math.floor(20 * 2 + 2),
              marginRight: 7,
            }}
          />
        ) : (
          <i
            className={skill.icon}
            style={{
              fontSize: Math.floor(20 * 2),
              marginRight: 7,
              color: skill.color,
            }}
          />
        )}
        <div
          style={{
            marginTop: 2,
            fontWeight: '400',
            fontSize: Math.floor(16 + 2 * 2),
          }}
        >
          {skill.name}
        </div>
      </div>
    )
  }
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '30px 5% 80px 5%',
        justifyContent: 'center',
        marginTop: showSidebar ? 0 : 70,
        overflow: 'auto',
      }}
    >
      {skills.map((skill, i) => {
        return (
          <div key={i} style={{ marginRight: 10, marginBottom: 10 }}>
            {renderSkill(skill)}
          </div>
        )
      })}
    </div>
  )
}

export default SkillsPage
