import * as React from 'react';
import { graphql } from 'gatsby';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const listStyles = {
  margin: 'initial',
  padding: 'revert',
  marginBottom: '15px',
};

export const query = graphql`
  query AllPages {
    allSanityPage {
      edges {
        node {
          slug {
            current
          }
          label
          category {
            label
            layout
          }
        }
      }
    }
  }
`;
const RYNO = ({ data }) => {
  data.allSanityPage.edges.sort(function (pageA, pageB) {
    let catA = pageA.node.category.label;
    let catB = pageB.node.category.label;
    return catA.localeCompare(catB);
  });
  let categories = {};
  data.allSanityPage.edges.forEach((page) => {
    let slug = page.node.slug.current;
    let category = page.node.category.label;
    if (!categories.hasOwnProperty(category)) {
      categories[category] = [];
    }
    categories[category].push(slug);
  });

  return (
    <main style={pageStyles}>
      {Object.entries(categories).map(function (
        [categoryName, pageList],
        catI
      ) {
        return (
          <div>
            <strong>{categoryName}:</strong>
            <ul style={listStyles}>
              {pageList.map(function (slug) {
                return (
                  <li>
                    <a href={`/lp/${slug}`}>/lp/{slug}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </main>
  );
};

export default RYNO;
