import React from 'react';
import Link from 'next/link';

export default function FeedPost(props) {
    return (
        <div className="wrapper">
            <div className="card">
                <div className="title">
                    <Link href="/blog/[id]" as={`/blog/${props.as}`}>
                        <a>{props.title}</a>
                    </Link>
                </div>
                <div className="image">
                    <img src={props.image} alt="" />
                </div>
            </div>
        </div>
    );
}
