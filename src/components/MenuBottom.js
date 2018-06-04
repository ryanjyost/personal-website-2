import React, { Component } from 'react'
import Link from 'gatsby-link'

import ResumeIcon from 'react-icons/lib/ti/document-text'
import WritingIcon from 'react-icons/lib/ti/pencil'
import PortfolioIcon from 'react-icons/lib/ti/folder'
import SkillIcon from 'react-icons/lib/ti/keyboard'
import HomeIcon from 'react-icons/lib/ti/home'

import FA from 'react-fontawesome'

import Img from 'gatsby-image'

export default class MenuButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { headhsot } = this.props
    const inactiveButtonStyle = {
      flex: 0.2,
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#a4a4a4',
      textDecoration: 'none',
    }
    return (
      <div
        style={{
          background: '#111',
          position: 'absolute',
          bottom: 0,
          height: 50,
          width: '100%',
          borderTop: '1px solid #f2f2f2',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <Link
            to="/resume"
            style={inactiveButtonStyle}
            activeStyle={{
              color: 'white',
            }}
          >
            <i className="far fa-file" style={{ fontSize: 26 }} />
          </Link>
          <Link
            to="/writing"
            style={inactiveButtonStyle}
            activeStyle={{
              color: 'white',
            }}
          >
            <i className="fas fa-pencil-alt" style={{ fontSize: 26 }} />
          </Link>

          <Link
            exact
            to="/"
            style={inactiveButtonStyle}
            activeStyle={{
              color: 'white',
            }}
          >
            <i className="fas fa-home" style={{ fontSize: 26 }} />
          </Link>
          <Link
            to="/portfolio"
            style={inactiveButtonStyle}
            activeStyle={{
              color: 'white',
            }}
          >
            <i className="far fa-folder-open" style={{ fontSize: 26 }} />
          </Link>
          <Link
            to="/skills"
            style={inactiveButtonStyle}
            activeStyle={{
              color: 'white',
            }}
          >
            <i className="fas fa-cog" style={{ fontSize: 26 }} />
          </Link>
        </div>
      </div>
    )
  }
}
