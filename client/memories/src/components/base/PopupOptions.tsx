import React from 'react';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';

const PopupOptions = () => {
    return (
        <div className={'border border-gray-300 rounded bg-white w-28 py-2 px-2'}>
            <div className={'flex items-center mb-2 hover:bg-gray-300 p-1'}>
                <div className={'text-base mr-2'}>
                    <AiFillEdit/>
                </div>
                <h3 className={'text-sm'}>Edit</h3>
            </div>

            <div  className={'w-full bg-gray-300 mb-2'} style={{'height': '2px'}}/>

            <div className={'flex items-center p-1 hover:bg-gray-300'}>
                <div className={'text-base mr-2'}>
                    <AiFillDelete/>
                </div>
                <h3 className={'text-sm'}>Delete</h3>
            </div>
        </div>
    )
}

export default PopupOptions