import React from 'react'

export default function MasonryPost({post, tagsOnTop}) {
    
    const backgroundImage = { backgroundImage: `url("${require(`../../assets/images/${post.image}`).default}")` };
    const style = {...backgroundImage, ...post.style}
    return (
        <a className="masonry-post blog-post overlay" style={style} href={post.link}>
            <div className="image-text"></div>{post.title}
        </a>
    )
}