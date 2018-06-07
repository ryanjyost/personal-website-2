import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

export default class Article extends React.Component {
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
    const { article, i } = this.props
    const { hover, hoverGithub, hoverLink, hoverNPM } = this.state

    const npm = 'npm' in article ? article.npm : null
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
          margin: '20px 25px',
          cursor: 'pointer',
        }}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <a
          href={article.link}
          // target="_blank"
        >
          <Img
            sizes={article.preview}
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
            className="article__link"
            style={{
              padding: '20px 20px',
              lineHeight: '1.2',
              borderTop: '1px solid #f2f2f2',
            }}
          >
            <div
              className="article__link"
              style={{
                fontSize: 22,
                width: '100%',
                fontWeight: 400,
                color: '#444',
                textDecoration: 'none',
              }}
            >
              {article.name}
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
              {article.desc}
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
            href={article.link}
            target="_blank"
            style={{
              backgroundColor: hoverLink ? '#f2f2f2' : '#fcfcfc',
              border: '1px solid  #eee',
              color: hoverLink ? '#888' : '#a4a4a4',
              padding: '5px 10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
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
            />Read in a New Tab
          </a>
        </div>
      </div>
    )
  }
}
