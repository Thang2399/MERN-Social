import React, {PropsWithChildren, useState} from 'react';
import {postResponse} from "../../../types";
import {AiOutlineLike, AiFillLike, AiOutlineMore} from 'react-icons/ai';

import PopupOptions from "../../base/PopupOptions";

type Props = postResponse

const Post: React.FC<Props> = (post: PropsWithChildren<Props>) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const toggleShowOptions = () => setShowOptions((show: boolean) => !show)

    return (
        <div className={'shadow-lg rounded p-5 w-full'}>
            <div className={'flex justify-between mb-2'}>
                <div className={'flex flex-col justify-between'}>
                    <h1 className={'font-semibold text-lg'}>{post.creator}</h1>
                    <span className={'text-gray-500 text-sm'}>{post.createdAt}</span>
                </div>

                <div className={'text-2xl cursor-pointer relative'}>
                    <div className={'hover:bg-gray-300 rounded-full w-6 h-6'} onClick={toggleShowOptions}>
                        <AiOutlineMore/>
                    </div>
                    <div className={'absolute top-6 right-0'}>
                        {showOptions && <PopupOptions/>}
                    </div>
                </div>
            </div>

            <div className={'mb-2 text-center'}>
                <h1 className={'underline uppercase text-2xl mb-2 tracking-wider'}>{post.title}</h1>
                <h1>{post.message}</h1>
            </div>

            <div className={'mb-2 w-full'}>
                <img src={post.selectedFile} alt={'img'} className={'w-full'}/>
            </div>

            <div className={'flex justify-between items-center'}>
                <div className={'flex items-center text-lg mb-2'}>
                    <div className={'cursor-pointer'}>
                        {isLiked ? <AiFillLike/> : <AiOutlineLike/>}
                    </div>
                    : {post.likeCount}
                </div>
                {post.tags.map((tag: string, index: number) => (
                    <span key={index} className={'font-semibold'}>#{tag}</span>))}
            </div>
        </div>
    )
};

export default Post;