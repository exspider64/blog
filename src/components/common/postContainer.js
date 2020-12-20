import React from 'react';
import Post from './post'

export default function PostContainer({posts, columns, tagsOnTop}) {
    return (
        <section className="masonry" style={{gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))`}}>
            {
                posts.map((post,index) =>
                    <Post {...{post, index, tagsOnTop, key: index}} />
            )}
        </section>
    )
}