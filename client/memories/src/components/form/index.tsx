import React, {useState} from 'react';
import BaseInput from '../base/BaseInput';
import FileBase from 'react-file-base64';
import {postData} from "../../types";
import {useDispatch} from "react-redux";
import {createPost} from "../../actions";

const Form = () => {
    const [postData, setPostData] = useState<postData>({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const dispatch = useDispatch()

    const handleClearInput = () => {
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        })
    }

    const handleUpload = (e: any) => {
        e.preventDefault();

        //dispatch action createPost
        dispatch(createPost(postData))
    }

    return (
        <div className={'flex justify-end'}>
            <div className={'shadow-lg bg-white rounded p-5 px-4 w-4/5'}>
                <h1 className={'text-center mb-5'}>
                    Write your memory
                </h1>

                <form>
                    <div className={'mb-3'}>
                        <BaseInput type={'text'} placeholder={'Who are you?'} value={postData.creator}
                                   handleChange={(e: any) => setPostData({...postData, creator: e.target.value})}/>
                    </div>

                    <div className={'mb-3'}>
                        <BaseInput type={'text'} placeholder={'What is your title?'} value={postData.title}
                                   handleChange={(e: any) => setPostData({...postData, title: e.target.value})}/>
                    </div>

                    <div className={'mb-3'}>
                        <BaseInput type={'text'} placeholder={'Who are you thinking?'} value={postData.message}
                                   handleChange={(e: any) => setPostData({...postData, message: e.target.value})}/>
                    </div>

                    <div className={'mb-3'}>
                        <BaseInput type={'text'} placeholder={'Your tags'}
                                   value={postData.tags}
                                   handleChange={(e: any) => setPostData({
                                       ...postData,
                                       tags: e.target.value.split(',')
                                   })}/>
                    </div>

                    <div className={'mb-3'}>
                        <FileBase type={'file'} multiple={false}
                                  onDone={({base64}) => setPostData({...postData, selectedFile: base64})}/>
                    </div>
                </form>

                <div className={'flex flex-col mt-3'}>
                    <button onClick={handleUpload}
                        className={'px-14 py-2 border border-gray-300 outline-none hover:bg-gray-300 hover:border-white rounded mb-2 text-black hover:text-white'}>
                        {isEditing ? "Edit" : "Submit"}
                    </button>
                    <button onClick={handleClearInput}
                            className={'px-14 py-2 bg-gray-300 hover:bg-white border border-white hover:border-gray-300 rounded text-white hover:text-black'}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Form;