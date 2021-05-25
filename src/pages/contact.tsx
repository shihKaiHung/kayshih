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

const Contact: React.FC = () => {
    return (
        <IndexLayout>
            <Helmet>
                <title>Contact | KayShih's Website</title>
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
                                <PostFullTitle className="post-full-title">Contact</PostFullTitle>
                            </PostFullHeader>
                            <PostFullContent className="post-full-content">
                                <div className="post-content">
                                    <p>
                                        Hey, 非常感謝你想知道我的聯繫方式，我會在最快速的時間內回覆你
                                    </p>
                                    <p>
                                        不論你對前端技術有任何疑問或是有工作想一起合作進行，<br /> 歡迎透過
                                        <strong>
                                            <a href="kai.hung@thephenom.co">Email</a>
                                        </strong>
                                        跟我聯繫。
                                    </p>
                                    <p>如果你想直接詢問一些日常問題，也歡迎透過Instagram直接訊息我
                                        <a href="https://www.instagram.com/kayshih.dev/">@kayshih.dev</a>
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

export default Contact;
