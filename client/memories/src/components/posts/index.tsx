import React from 'react';
import {useSelector} from 'react-redux'
import SinglePost from "./singlePost";
import {postsType} from '../../reducer'

const Posts = () => {
    const postsArr = useSelector((state: postsType) => state.posts)

    console.log(postsArr)
    return (
        <div className={''}>
            <SinglePost/>
        </div>
    )
};

export default Posts;