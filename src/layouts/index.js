import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Menu from '../components/Menu'
import Header from '../components/header'
import './index.css'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
    }
  }

  updateDimensions() {
    let screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0
    let screenHeight = typeof window !== 'undefined' ? window.innerHeight : 0
    // let update_height = Math.round(update_width)
    this.setState({ width: screenWidth, height: screenHeight })
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  render() {
    const { children, data, location } = this.props
    const { width, height } = this.state
    const showSidebar = width > 500
    const isHome = location.pathname === '/'
    console.log(this.props)

    const images = {
      redux: data.redux,
      ember: data.ember,
      jquery: data.jquery,
      handlebars: data.handlebars,
      bootstrap: data.bootstrap,
      mongodb: data.mongodb,
      webpack: data.webpack,
      babel: data.babel,
      meteor: data.meteor,
    }
    return (
      <div
        style={{
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#fefefe',
          margin: 'auto',
        }}
      >
        <Helmet
          title={'Ryan J. Yost'}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
            integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
            // integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossorigin="anonymous"
          />
        </Helmet>
        <div>
          <div
            style={
              showSidebar && !isHome
                ? {
                    width: '250px',
                    height: '100vh',
                    borderRight: '2px solid #d8d8d8',
                    zIndex: 400,
                    overflow: 'hidden',
                  }
                : { width: '100%' }
            }
          >
            <Header
              headshot={this.props.data.headshot}
              showSidebar={showSidebar}
              isHome={isHome}
              height={height}
              width={width}
              location={this.props.location}
            />
          </div>
          <div
            style={
              showSidebar && !isHome
                ? {
                    margin: '0 auto',
                    padding: '0px',
                    backgroundColor: '#fefefe',
                    height: '100vh',
                    overflow: 'auto',
                    position: 'fixed',
                    top: 0,
                    left: 250,
                    width: 'auto',
                    paddingTop: 10,
                  }
                : isHome
                  ? {
                      width: 0,
                      height: 0,
                    }
                  : {
                      margin: '0 auto',
                      padding: '0px',
                      backgroundColor: '#fafafa',
                      height: '100vh',
                      overflow: 'auto',
                    }
            }
          >
            {children({
              ...this.props,
              ...{ images, showSidebar },
            })}
          </div>
          {showSidebar ? null : (
            <Menu
              headshot={this.props.data.headshot}
              isHome={isHome}
              showSidebar={showSidebar}
            />
          )}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query HeadshotQuery {
    headshot: imageSharp(id: { regex: "/headshot.jpg/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    redux: imageSharp(id: { regex: "/redux-icon.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    ember: imageSharp(id: { regex: "/ember-icon.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    jquery: imageSharp(id: { regex: "/jquery-icon.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    handlebars: imageSharp(id: { regex: "/handlebars-icon.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    bootstrap: imageSharp(id: { regex: "/bootstrap-icon.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    mongodb: imageSharp(id: { regex: "/mongodb-icon.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    webpack: imageSharp(id: { regex: "/webpack-icon.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    babel: imageSharp(id: { regex: "/babel-icon.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
    meteor: imageSharp(id: { regex: "/meteor-icon.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
