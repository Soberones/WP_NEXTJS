 <div className="wrapper">
                <div className="img"></div>
                {posts.map(post => {
                    return (
                        <div key={post.node.id} className="">
                            <div className="card large">
                                <div className="card-image">
                                    <figure className="image">
                                        <Link href="/blog/[id]" as={`/blog/${post.node.slug}`}>
                                            <img
                                                src={post.node.featuredImage.node.sourceUrl}
                                                alt={post.node.featuredImage.title}
                                            />
                                        </Link>
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <h5 className="title is-3">
                                        <Link href="/blog/[id]" as={`/blog/${post.node.slug}`}>
                                            <a className="post-title">{post.node.title}</a>
                                        </Link>
                                    </h5>
                                    <div className="media"></div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* <section className="section">
                <div className="container">
                    <div className="columns">
                        <div className="column"></div>

                        <div className="column is-four-fifths">
                            <div className="row columns">
                                {posts.map(post => {
                                    return (
                                        <div key={post.node.id} className="column is-one-third">
                                            <div className="card large">
                                                <div className="card-image">
                                                    <figure className="image">
                                                        <Link
                                                            href="/blog/[id]"
                                                            as={`/blog/${post.node.slug}`}
                                                        >
                                                            <a>
                                                                <img
                                                                    src={
                                                                        post.node.featuredImage
                                                                            .sourceUrl
                                                                    }
                                                                    alt={
                                                                        post.node.featuredImage
                                                                            .title
                                                                    }
                                                                />
                                                            </a>
                                                        </Link>
                                                    </figure>
                                                </div>
                                                <div className="card-content">
                                                    <h5 className="title is-3">
                                                        <Link
                                                            href="/blog/[id]"
                                                            as={`/blog/${post.node.slug}`}
                                                        >
                                                            <a className="post-title">
                                                                {post.node.title}
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                    <div className="media">
                                                        <div className="media-left">
                                                            <figure className="image is-48x48">
                                                                <img
                                                                    className="is-rounded"
                                                                    src={
                                                                        post.node.author.avatar.url
                                                                    }
                                                                    alt="Author Avatar"
                                                                />
                                                            </figure>
                                                        </div>
                                                        <div className="media-content">
                                                            <p className="title is-5 no-padding author-name">
                                                                {post.node.author.name}
                                                            </p>
                                                            <p className="author-link">
                                                                <span className="is-6">
                                                                    <a href="#">@twitterid</a>
                                                                </span>
                                                            </p>
                                                            <p className="subtitle is-6">
                                                                {post.node.author.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div
                                                            className="excerpt"
                                                            dangerouslySetInnerHTML={{
                                                                __html: post.node.excerpt,
                                                            }}
                                                        />
                                                        <div className="background-icon">
                                                            <span className="icon-twitter"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="column"></div>
                    </div>
                </div>
            </section> */}
        </>