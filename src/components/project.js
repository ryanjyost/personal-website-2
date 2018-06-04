import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

export default class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
      hoverGithub: false,
      hoverLink: false,
      hoverNPM: false,
    }
  }

  render() {
    const { project, i } = this.props
    const { hover, hoverGithub, hoverLink, hoverNPM } = this.state

    const npm = 'npm' in project ? project.npm : null
    return (
      <div
        key={i}
        style={{
          // WebkitBoxShadow: hover
          //   ? '1px 10px 26px -11px rgba(70,70,70,1)'
          //   : '1px 10px 13px -11px rgba(136,136,136,1)',
          WebkitBoxShadow: hover
            ? '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
            : '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
          transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
          border: '2px solid #f2f2f2',
          borderBottom: 'none',
          borderRadius: 5,
          width: '100%',
          backgroundColor: '#fff',
          maxWidth: '350px',
          margin: '20px 20px',
          cursor: 'pointer',
        }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <a href={project.link} target="_blank">
          <Img
            sizes={project.preview}
            imgStyle={{
              width: '100%',
              height: 'auto',
            }}
            style={{
              width: '100%',
              borderTopRightRadius: 5,
              borderTopLeftRadius: 5,
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
                fontSize: 22,
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
                fontSize: 16,
                fontWeight: 200,
                padding: '10px 0px 15px 0px',
                color: '#555',
                textDecoration: 'none',
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
                      backgroundColor: '#fafafa',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginRight: 4,
                      marginBottom: 4,
                      // WebkitBoxShadow:
                      //   '1px 7px 13px -11px rgba(136,136,136,1)',
                      padding: '5px 7px 5px 7px',
                      borderRadius: 5,
                      color: '#666',
                      letterSpacing: '0.02em',
                      fontSize: 14,
                      border: '1px solid #f2f2f2',
                    }}
                  >
                    {skill}
                  </div>
                )
              })}
            </div>
          </div>
        </a>
        <div
          style={{
            display: 'flex',
            textDecoration: hover ? 'none' : 'none',
          }}
        >
          <a
            href={project.github}
            target="_blank"
            style={{
              backgroundColor: hoverGithub ? '#f2f2f2' : '#fcfcfc',
              border: '1px solid  #eee',
              color: hoverGithub ? '#888' : '#a4a4a4',
              padding: '5px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomLeftRadius: 5,
              flex: 0.5,
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
              target="_blank"
              style={{
                backgroundColor: hoverNPM ? '#f2f2f2' : '#fcfcfc',
                border: '1px solid  #eee',
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
          <a
            href={project.link}
            target="_blank"
            style={{
              backgroundColor: hoverLink ? '#f2f2f2' : '#fcfcfc',
              border: '1px solid  #eee',
              color: hoverLink ? '#888' : '#a4a4a4',
              padding: '5px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 0.5,
              textDecoration: 'none',
              borderBottomRightRadius: 5,
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
        </div>
      </div>
    )
  }
}
