import React, {useState} from 'react';
import BaseInput from '../base/BaseInput';

type postData = {
    creator: string,
    title: string,
    message: string,
    tags: string,
    selectedFile: string,
}

const Form = () => {
    const [postData, setPostData] = useState<postData>({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });

    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleUpload = (e: any) => {
        e.preventDefault();
    }

    return (
        <div className={'flex justify-end'}>
            <div className={'shadow-lg bg-white rounded p-5 px-4 w-4/5'}>
                <h1 className={'text-center mb-5'}>
                    Form
                </h1>

                <form onSubmit={handleUpload}>
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
                        <BaseInput type={'text'} placeholder={'Your tags'} value={postData.tags}
                                   handleChange={(e: any) => setPostData({
                                       ...postData,
                                       tags: e.target.value.split(',')
                                   })}/>
                    </div>

                    <div className={'mb-3'}>
                        <BaseInput type={'file'} placeholder={'Who are you?'} value={postData.selectedFile}
                                   handleChange={(e: any) => setPostData({...postData, creator: e.target.value})}/>
                    </div>

                    <div className={'flex justify-center items-center mt-3'}>
                        <button
                            className={'px-4 py-2 border border-gray-100 outline-none hover:bg-gray-100 hover:border-white rounded'}>
                            {isEditing ? "Edit" : "Submit"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Form;