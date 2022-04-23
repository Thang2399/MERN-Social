import React, {useState} from 'react';
import BaseInput from "../base/BaseInput";

import {BsMoon, BsSun} from 'react-icons/bs'

const imgUrl = 'https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/PART_1_and_2/client/src/images/memories.png'

export default function Navbar(): JSX.Element {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("")

    const toggleDarkMode = () => {
        setDarkMode(darkMode => darkMode = !darkMode)
    }

    return (
        <div className={'w-full py-4 px-10 bg-white flex justify-between items-center shadow-lg'}>
            <div className={'w-1/5 h-1/5 flex items-center'}>
                <div className={'w-14 h-full'}>
                    <img src={imgUrl} alt="img-icon" className={'w-full h-full'}/>
                </div>
                <h1 className={'ml-4 text-xl'}>Memories</h1>
            </div>
            <div className={'w-2/5'}>
                <BaseInput type={'text'} placeholder={''} value={searchValue} handleChange={(e: any) => setSearchValue(e.target.value)}/>
            </div>
            <div className={'flex justify-between items-center w-32'}>
                <div className={'cursor-pointer'} onClick={toggleDarkMode}>
                    {darkMode ? <BsMoon/> : <BsSun/>}
                </div>
                <button className={'bg-white border border-gray-300 outline-none hover:bg-gray-300 hover:border-white py-2 px-5 rounded hover:text-white'}>
                    Logout
                </button>
            </div>
        </div>
    )
}