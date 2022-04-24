import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../actions'

import Navbar from "../components/navbar";
import Form from '../components/form';
import Posts from "../components/posts";
import Loading from "../components/base/Loading";
import {postsType} from "../reducer";

export default function HomePage(): JSX.Element {
    const postsArr = useSelector((state: postsType) => state.posts)

    const dispatch = useDispatch();

    useEffect(() => {
        // call it inside useEffect to dispatch action getPosts
        dispatch(getPosts());
    }, [dispatch]);

    if (postsArr.length === 0) return <Loading/>

    else return (
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