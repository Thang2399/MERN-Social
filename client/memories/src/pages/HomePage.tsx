import React from 'react';

import Navbar from "../components/navbar";
import Form from '../components/form';
import Posts from "../components/posts";

export default function HomePage(): JSX.Element {
    return (
        <div className={'w-full'}>
            <Navbar/>
            <div className={'mx-20 mt-4 flex justify-between'}>
                <Posts/>
                <Form/>
            </div>
        </div>

    )
}