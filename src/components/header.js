import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

const Header = ({ headshot, showSidebar }) => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      padding: showSidebar ? '20px 15px 20px 15px' : '10px 15px 10px 15px',
      alignItems: 'center',
      justifyContent: 'center',
      borderbottom: '1px solid #d8d8d8',
      backgroundColor: '#fff',
      overflowWrap: 'break-word',
      position: showSidebar ? 'relative' : 'fixed',
      zIndex: 100,
      borderBottom: '1px solid #ddd',
      flexDirection: showSidebar ? 'column' : 'row',
    }}
  >
    <Img
      title="Headshot"
      alt="Ryan Yost Headshot"
      sizes={headshot.sizes}
      style={{
        height: showSidebar ? 60 : 45,
        width: showSidebar ? 60 : 45,
        borderRadius: '9999px',
        border: '2px solid #f2f2f2',
        marginRight: showSidebar ? 0 : 10,
      }}
    />
    <div
      style={{
        // backgroundColor: '#f1f1f1',
        height: 30,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '12px',
        borderRadius: '8px',
        marginTop: showSidebar ? 10 : 0,
        //border: '1px solid #f2f2f2',
        // WebkitBoxShadow: '1px 7px 13px -11px rgba(136,136,136,1)',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        lineHeight: 1.2,
        position: 'relative',
        textAlign: showSidebar ? 'center' : 'left',
        // maxWidth: 400,
      }}
    >
      {/* <div
        style={{
          width: 0,
          height: 0,
          borderTop: '8px solid transparent',
          borderBottom: '8px solid transparent',
          borderRight: '10px solid #f1f1f1',
          position: 'absolute',
          left: '-8px',
        }}
      /> */}
      <span style={{ fontSize: showSidebar ? 18 : 14, color: '#555' }}>
        Hi, I'm Ryan. I'm a web developer.
      </span>
    </div>
  </div>
)

export default Header
