import React from 'react';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';
import { Footer } from '../components/Footer';
import { FixedObject } from 'gatsby-image';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { PostCard } from '../components/PostCard';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
    inner,
    outer,
    PostFeed,
    Posts,
    SiteDescription,
    SiteHeader,
    SiteHeaderContent,
    SiteMain,
    SiteNavMain,
    SiteTitle,
    SiteHeaderStyles,
    SiteArchiveHeader,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import { useStaticQuery, graphql } from 'gatsby';
import { PageContext } from '../templates/post';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

export interface IndexProps {
    pageContext: {
        currentPage: number;
        numPages: number;
    };
    data: {
        logo: {
            childImageSharp: {
                fixed: FixedObject;
            };
        };
        header: {
            childImageSharp: {
                fixed: FixedObject;
            };
        };
        allMarkdownRemark: {
            edges: Array<{
                node: PageContext;
            }>;
        };
    };
}

const About: React.FC = props => {
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              layout
              date
              draft
              excerpt
              image {
                childImageSharp {
                  fluid(maxWidth: 3720) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              author {
                id
                bio
                avatar {
                  children {
                    ... on ImageSharp {
                      fluid(quality: 100, srcSetBreakpoints: [40, 80, 120]) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
            fields {
              readingTime {
                text
              }
              slug
              layout
            }
          }
        }
      }
    }
  `);

    console.log(data);
    return (
        <IndexLayout>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <Wrapper css={PageTemplate}>
                <div
                    css={[outer, SiteHeader, SiteHeaderStyles]}
                    className="site-header-background"
                >
                    <div css={inner}>
                        <SiteNav isHome />
                        <SiteHeaderContent className="site-header-conent">
                            <SiteTitle className="site-title">
                                Blog
                            </SiteTitle>
                            <SiteDescription></SiteDescription>
                        </SiteHeaderContent>
                    </div>
                </div>
                <main id="site-main" css={[SiteMain, outer]}>
                    <div css={[inner, Posts]}>
                        <div css={[PostFeed]}>
                            {data.allMarkdownRemark.edges.map((post, index) => {
                                // filter out drafts in production
                                return (
                                    (post.node.frontmatter.draft !== true ||
                                        process.env.NODE_ENV !== 'production') && (
                                        <PostCard key={post.node.fields.slug} post={post.node} large={index === 0} />
                                    )
                                );
                            })}
                        </div>
                    </div>
                </main>
                <Footer />
            </Wrapper>
        </IndexLayout>
    );
};

export default About;
