import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import MenuBottom from '../components/MenuBottom'
import Header from '../components/header'
import './index.css'

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  updateDimensions() {
    let update_width = window.innerWidth
    let update_height = Math.round(update_width)
    this.setState({ width: update_width, height: update_height })
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
    const { children, data } = this.props
    const { width, height } = this.state
    const showSidebar = width > 600
    console.log(data)
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

    const renderSidebar = () => {
      return (
        <div
          style={{
            width: '250px',
            height: '100vh',
            borderRight: '2px solid #d8d8d8',
          }}
        >
          <Header
            headshot={this.props.data.headshot}
            showSidebar={showSidebar}
          />
        </div>
      )
    }
    return (
      <div
        style={{
          height: '100vh',
          overflow: 'hidden',
          backgroundColor: '#fafafa',
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
            integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossorigin="anonymous"
          />
        </Helmet>
        <div>
          {showSidebar ? (
            renderSidebar()
          ) : (
            <Header headshot={this.props.data.headshot} />
          )}
          <div
            style={
              showSidebar
                ? {
                    margin: '0 auto',
                    padding: '0px',
                    backgroundColor: '#fafafa',
                    height: '100vh',
                    overflow: 'auto',
                    position: 'fixed',
                    top: 0,
                    left: 250,
                    width: 'auto',
                    paddingTop: 10,
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
            <MenuBottom headshot={this.props.data.headshot} />
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
