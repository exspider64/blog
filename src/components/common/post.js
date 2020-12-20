import React from 'react'
import {categoryColors} from './styles'

export default function Post({post, tagsOnTop}) {
     
    const backgroundImage = { backgroundImage: `url("${require(`../../assets/images/${post.image}`).default}")` };
    
    const style = {...backgroundImage, ...post.style};
    
    return (
        <a className="masonry-post overlay" style={style} href={post.link}>
            <div className="image-text">
                <div className="tags-container">
                    {
                        post.categories.map((tag, i) => {
                            return (<span k ey={i} className="tag" style={{backgroundColor: categoryColors[tag]}}>
                                {tag.toUpperCase()}
                            </span>)
                        })
                    }
                </div>
                <div>
                    <h2 className="image-title">{post.title}</h2>
                    <span className="image-date">{post.date}</span>
                </div>
            </div>
        </a>
    )
}