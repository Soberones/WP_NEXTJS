import React from 'react';

export default function SinglePost(props) {
    const rawContent = props.content;

    return (
        <div>
            <div className="head">
                <h1>{props.title}</h1>
            </div>
            <div className="content">
                <p dangerouslySetInnerHTML={{ __html: rawContent }}></p>
            </div>
        </div>
    );
}
