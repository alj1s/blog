import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'
import Hero from '../components/hero.jpg'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            backgroundImage: `url(${Hero})`,
            color: 'white',
            letterSpacing: '0.2em',
            marginTop: 0,
            padding: '2.5em',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Andrew Jones
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            backgroundImage: `url(${Hero})`,
            fontFamily: 'Montserrat, sans-serif',
            color: 'white',
            letterSpacing: '0.2em',
            marginTop: 0,
            padding: '2.5em',
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Andrew Jones
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          backgroundColor: 'rgb(245,245,245)',
        }}
      >
        {header}
        <div
          style={{
            backgroundColor: 'white',
            boxShadow: '5px 5px 10px 0px rgba(204,202,204)',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children()}
        </div>
      </div>
    )
  }
}

export default Template
