import React, {Dispatch, SetStateAction} from 'react';
import {useSelector} from 'react-redux'
import SinglePost from "./singlePost";
import {postsType} from '../../reducer'

type Props = {
    setCurrentId: Dispatch<SetStateAction<string | null>>
}

const Posts: React.FC<Props> = ({setCurrentId}) => {
    const postsArr = useSelector((state: postsType) => state.posts);

    return (
        <div className={'w-full'}>
            {postsArr.map((post: any) => (
                <div key={post._id} className={'w-full'}>
                    <SinglePost post={post} setCurrentId={setCurrentId}/>
                </div>
            ))}
        </div>
    )
};

export default Posts;