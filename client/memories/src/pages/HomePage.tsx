import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getPosts} from '../actions'

import Navbar from "../components/navbar";
import Form from '../components/form';
import Posts from "../components/posts";

export default function HomePage(): JSX.Element {
    const dispatch = useDispatch();

    useEffect(() => {
        // call it inside useEffect to dispatch action
        dispatch(getPosts())
    }, [dispatch]);

    return (
        <div className={'w-full'}>
            <Navbar/>
            <div className={'mx-20 mt-4 flex justify-between'}>
                <div className={'w-3/5'}>
                    <Posts/>
                </div>
                <div className={'w-1/3'}>
                    <Form/>
                </div>
            </div>
        </div>

    )
}