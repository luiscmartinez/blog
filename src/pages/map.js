import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Helmet from 'react-helmet';
import InlineLogo from '../components/InlineLogo';
import Meta from '../components/Meta';
import NoScript from '../components/NoScript';
import SidebarLink from '../components/Sidebar/SidebarLink';
import Layout from '../layouts';
import '../styles/map.scss';

class Map extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        return (
            <>
                <Helmet title={`Site map | ${siteTitle}`} />
                <Meta
                    metadata={{
                        ...this.props.data.site.siteMetadata,
                        title: `Site map | ${siteTitle}`,
                    }}
                />
                <Layout>
                    <div id="content">
                        <div className="map">
                            <div className="map-para">
                                <div className="map-image">
                                    <InlineLogo />
                                </div>
                            </div>
                            <div className="map-para">
                                Hi, there I&apos;m Luis
                                <br />
                                For any questions or revalations <br />
                                <a href="mailto:mrluismartinezzz@gmail.com">
                                    get in contact with me through email
                                </a>
                            </div>

                            <SidebarLink to="/" external={false} alt={true}>
                                Home
                            </SidebarLink>
                            <SidebarLink
                                to="https://github.com/luiscmartinez/blog"
                                external={true}
                                alt={true}
                            >
                                Source
                            </SidebarLink>
                            <NoScript />
                        </div>
                    </div>
                </Layout>
            </>
        );
    }
}

export default Map;

export const pageQuery = graphql`
    query MapQuery {
        site {
            siteMetadata {
                author
                title
                description
                siteUrl
            }
        }
    }
`;
