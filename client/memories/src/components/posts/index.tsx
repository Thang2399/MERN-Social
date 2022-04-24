import React from 'react';
import {useSelector} from 'react-redux'
import SinglePost from "./singlePost";
import {postsType} from '../../reducer'

const Posts = () => {
    const postsArr = useSelector((state: postsType) => state.posts);

    return (
        <div className={'w-full'}>
            {postsArr.map((post: any) => (
                <div key={post._id} className={'w-full'}>
                    <SinglePost {...post}/>
                </div>
            ))}
        </div>
    )
};

export default Posts;