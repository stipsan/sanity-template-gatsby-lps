import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'


// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

export const query = graphql`
    query getAllGatsbyPages {
        allSitePage {
            edges {
                node {
                    path
                }
            }
        }
    }
`

// markup
const Index = ({data}) => {
  const pages = data.allSitePage.edges.map(({ node }) => node.path);
  
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page Listing:</h1>
      <ul>
        {pages.map((page, i) => (
            <li key={i}><a href={page}>{page}</a></li>
        ))}
      </ul>
      {/* <p style={paragraphStyles}>
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p> */}
    </main>
  )
}

export default Index;
