import React, {Dispatch, SetStateAction, useState} from 'react';
import {useDispatch} from "react-redux";

import {postResponse} from "../../../types";

import {deletePost, updateLikePost} from "../../../actions";

import {AiOutlineLike, AiFillLike, AiOutlineMore} from 'react-icons/ai';
import PopupOptions from "../../base/PopupOptions";

type Props = {
    post: postResponse,
    setCurrentId: Dispatch<SetStateAction<string | null>>
}

const Post: React.FC<Props> = ({post, setCurrentId}) => {
    const dispatch = useDispatch()
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const toggleShowOptions = () => setShowOptions((show: boolean) => !show);

    const handleUpdatePost = () => {
        setCurrentId(post._id);
        toggleShowOptions();
    }

    const handleDeletePost = () => {
        dispatch(deletePost(post._id))
        toggleShowOptions();
    }

    const handleLikePost = () => {
        dispatch(updateLikePost(post._id))
    }

    return (
        <div className={'shadow-lg rounded p-5 w-full mb-2'}>
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
                        {showOptions && <PopupOptions
                            handleUpdate={handleUpdatePost}
                            handleDelete={handleDeletePost}/>
                        }
                    </div>
                </div>
            </div>

            {post.selectedFile
                ? (<div className={'mb-2 text-center'}>
                        <h1 className={'underline uppercase text-2xl mb-2 tracking-wider'}>{post.title}</h1>
                        <h1>{post.message}</h1>
                    </div>
                )
                : (
                    <div className={'mb-2 text-center'}>
                        <h1 className={'underline uppercase text-2xl mb-2 tracking-wider'}>{post.title}</h1>
                        <div className={'bg-gray-500 text-white h-96 flex justify-center items-center'}>
                            <h1>{post.message}</h1>
                        </div>
                    </div>)
            }

            {post.selectedFile && (
                <div className={'mb-2 w-full'}>
                    <img src={post.selectedFile} alt={'img'} className={'w-full'}/>
                </div>)
            }

            <div className={'flex justify-between items-center'}>
                <div className={'flex justify-between items-center'}>
                    <div className={'flex items-center text-lg mb-2'}>
                        <div className={'cursor-pointer'} onClick={handleLikePost}>
                            {post.likeCount > 0 ? <AiFillLike/> : <AiOutlineLike/>}
                        </div>
                        : {post.likeCount}
                    </div>
                </div>

                <div>
                    {post.tags.map((tag: string, index: number) => (
                        <span key={index} className={'font-semibold mr-1'}>#{tag}</span>))}
                </div>
            </div>
        </div>
    )
};

export default Post;