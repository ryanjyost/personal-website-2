import React from 'react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Article from '../components/Article'
import { Motion, spring, presets } from 'react-motion'

class ArticlePage extends React.Component {
  render() {
    const { data, showSidebar } = this.props
    const articles = [
      {
        name: 'Redux-Saga tutorial for beginners and dog lovers',
        desc:
          'Build a simple app that fetches dog images using React, Redux & Redux-Saga',
        preview: data.reduxsaga.sizes,

        link:
          'https://hackernoon.com/redux-saga-tutorial-for-beginners-and-dog-lovers-aa69a17db645',
      },
      {
        name: 'How to take advantage of Local Storage in your React projects',
        desc: 'And why you ought to.',
        preview: data.localstorage.sizes,
        link:
          'https://hackernoon.com/how-to-take-advantage-of-local-storage-in-your-react-projects-a895f2b2d3f2',
      },
      {
        name: 'Build and Deploy a React/Redux app',
        desc: 'A Step-By-Step Tutorial',
        preview: data.rainyTutorial.sizes,
        link:
          'https://medium.com/webdevils-advocate/react-redux-react-router-and-rainy-day-fund-tutorial-e589f0803306',
      },
    ]

    return (
      <Motion
        defaultStyle={{
          top: -800,
          height: 0,
        }}
        style={{
          top: spring(
            this.props.location.pathname === '/articles'
              ? showSidebar
                ? 0
                : 70
              : -800,
            { ...presets.stiff, ...{ precision: 0.9 } }
          ),
        }}
      >
        {style => (
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              padding: '10px 1% 80px 1%',
              justifyContent: 'center',
              overflow: 'auto',
              marginTop: style.top,
            }}
          >
            {articles.map((article, i) => (
              <Article key={i} i={i} article={article} />
            ))}
          </div>
        )}
      </Motion>
    )
  }
}

export default ArticlePage

export const query = graphql`
  query ArticleQuery {
    reduxsaga: imageSharp(id: { regex: "/saga-tutorial-preview/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }

    localstorage: imageSharp(id: { regex: "/localstorage-preview/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }

    rainyTutorial: imageSharp(id: { regex: "/rainy-tutorial-preview.png/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
