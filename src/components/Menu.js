import React, { Component } from 'react'
import Link from 'gatsby-link'

import FA from 'react-fontawesome'

import Img from 'gatsby-image'

export default class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { headhsot, showSidebar, isHome } = this.props
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
          position: showSidebar ? 'relative' : 'absolute',
          bottom: 0,
          height: 40,
          width: showSidebar && isHome ? 350 : '100%',
          borderTop: '1px solid #f2f2f2',
          display: 'flex',
          alignItems: 'stretch',
          zIndex: 200,
          margin: '20px 0px 0px 0px',
          borderRadius: showSidebar && isHome ? 5 : 0,
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
            <i className="far fa-file-alt" style={{ fontSize: 20 }} />
          </Link>
          <Link
            to="/writing"
            style={inactiveButtonStyle}
            activeStyle={{
              color: 'white',
            }}
          >
            <i className="fas fa-pencil-alt" style={{ fontSize: 20 }} />
          </Link>

          <Link
            exact
            to="/"
            style={inactiveButtonStyle}
            activeStyle={{
              color: 'white',
            }}
          >
            <i className="fas fa-home" style={{ fontSize: 20 }} />
          </Link>
          <Link
            to="/portfolio"
            style={inactiveButtonStyle}
            activeStyle={{
              color: 'white',
            }}
          >
            <i className="far fa-folder-open" style={{ fontSize: 20 }} />
          </Link>
          <Link
            to="/skills"
            style={inactiveButtonStyle}
            activeStyle={{
              color: 'white',
            }}
          >
            <i className="fas fa-cog" style={{ fontSize: 20 }} />
          </Link>
        </div>
      </div>
    )
  }
}
