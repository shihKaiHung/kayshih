import React from 'react';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/react';
import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import { useStaticQuery, graphql } from 'gatsby';

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

const About: React.FC = props => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);
  return (
    <IndexLayout>
      <Helmet>
        <title>About | KayShih's Website</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">About</PostFullTitle>
              </PostFullHeader>
              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <img src={'/personal.jpg'} />
                  <h2>
                    About me
                  </h2>
                  <p>
                    Hello,
                    我是KayShih，從事軟體開發已經接近7年時間，目前正在經營自己的軟體開發公司，在創建個人公司之前在新加坡新創公司擔任FrontEnd Leader，具有多次從0到1的產品開發經驗，會對不同的產品需求去規劃其合適的框架與技術。
                  </p>
                  <p>
                    會想開始寫經營這個Blog的主要原因是想增進自己的寫作技巧，以及分享我所閱讀以及思考的內容，我是一個熱愛閱讀的人，但我認為只有閱讀而沒有輸出的話沒有辦法內化這些知識，所以我決定透過寫文章的方式來組織自己的思考脈絡。
                  </p>
                  <p>
                    當然如果你願意的話，你可以更深入地了解我以及與我一起共事。
                  </p>
                  <h2>
                    Work with me
                  </h2>
                  <h6>
                    打造高效能的網頁應用
                  </h6>
                  <p>
                    在過去幾年的產品開發的經驗，我特別專注在網頁效能的優化上，我認為高效能的網頁應用才能帶來良好的使用者體驗。
                  </p>
                  <h6>
                    導入測試建構高可靠性產品
                  </h6>
                  <p>
                    我可以為你公司的產品導入測試，以及提升測試涵蓋率來增加品質，除了透過編寫測試以外，還會運用型別系統(TypeScript, Flow)來建構高質量型別安全的程式碼，藉以降低程式碼的錯誤率。
                  </p>
                  <h6>
                    構建自動化流程
                  </h6>
                  <p>
                    構建自動化是每個團隊都想要做的，能大幅提升團隊的產能讓工程師專注在開發，但可能礙於開發時程以至於沒時間去導入這些，在過去我為共事過的公司導入自動化流程，包含CI/CD以及文件的自動導出，讓工程師專注在開發，不需要浪費額外的時間在部署或是文件的撰寫上。
                  </p>
                  <h6>
                    制定前端架構
                  </h6>
                  <p>
                    我能幫助你制定出合適的前端架構，不同規模大小的網頁應用會有其合適的架構，同時也會考慮到團隊的技術以及開發時程還有產品未來的方向，來規劃出一套可擴展的前端架構。
                  </p>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default About;
