import React from 'react'
import {PostContainer} from '../components/common/index'
import trending from '../assets/mocks/trending'

const trendingConfig = {
    1: {
        gridArea: '1 / 2 / 3 / 3'
    }
}

function mergeStyles(posts, config) {
    posts.forEach((post, index) => {
        post.style = config[index]
    })
}


mergeStyles(trending, trendingConfig);

export default function Home () {
    return (
    <section className="container home">
        <div className="row">
            <h1>Trending Posts</h1>
            <PostContainer posts={trending} columns={3}/>
        </div>
    </section>
    )
}