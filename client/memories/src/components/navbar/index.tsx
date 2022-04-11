import React from 'react';
import BaseInput from "../base/BaseInput";

const imgUrl = 'https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/PART_1_and_2/client/src/images/memories.png'

export default function Navbar(): JSX.Element {
    return (
        <div className={'w-full py-4 px-10 bg-white flex justify-between items-center shadow-lg'}>
            <div className={'w-10 h-1/5'}>
                <img src={imgUrl} alt="img-icon" className={'w-full h-full'}/>
            </div>
            <BaseInput type={'text'} placeholder={''} value={'123'} handleChange={() => console.log('123')} />
            <button className={'bg-white py-2 px-5 rounded'}>
                Logout
            </button>
        </div>
    )
}