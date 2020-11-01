import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Head from 'next/head';
import FeedPost from './feedPost/index';

const POSTS_QUERY = gql`
    query {
        posts {
            edges {
                node {
                    date
                    title
                    id
                    featuredImage {
                        node {
                            id
                            uri
                            sourceUrl
                        }
                    }
                    link
                    categories {
                        nodes {
                            name
                        }
                    }
                    slug
                }
            }
        }
    }
`;

// <Home /> Component
const Home = props => {
    const { loading, error, data } = useQuery(POSTS_QUERY);

    if (loading) return <>{console.log('loading...')}</>;
    if (error) return <>{console.log('Error')}</>;

    // Get the posts
    const posts = data.posts.edges;
    const feed = posts.map(post => (
        <FeedPost
            key={post.node.id}
            title={post.node.title}
            as={post.node.slug}
            image={post.node.featuredImage.node.sourceUrl}
        />
    ));

    return (
        <>
            <Head>
                <title>Headless NextJS and WordPress</title>
            </Head>
            {feed}
        </>
    );
};

export default Home;
export { POSTS_QUERY };
