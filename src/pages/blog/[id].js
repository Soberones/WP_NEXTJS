import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Head from 'next/head';
import SinglePost from '../../../components/singlePost';
import Banner from '../../../components/banner';

const SINGLE_POST_QUERY = gql`
    query SINGLE_POST_QUERY($slug: String) {
        postBy(slug: $slug) {
            id
            seo {
                metaDesc
                title
            }
            featuredImage {
                node {
                    id
                    sourceUrl
                }
            }
            date
            excerpt
            title
            slug
            content(format: RENDERED)
        }
    }
`;

// <Home /> Component
const Blog = ({ query: { id } }) => {
    const { loading, error, data } = useQuery(SINGLE_POST_QUERY, {
        variables: {
            slug: id,
        },
    });

    if (loading) return <>{console.log('loading...')}</>;
    if (error) return <>{console.log('Error')}</>;

    // Get the post, category
    const post = data.postBy;

    console.log('1', post.seo.metaDesc);
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="Description" content={post.seo.metaDesc} />
            </Head>
            <Banner img={post.featuredImage.node.sourceUrl} />
            <SinglePost title={post.title} content={post.content} />
        </>
    );
};

export default Blog;
