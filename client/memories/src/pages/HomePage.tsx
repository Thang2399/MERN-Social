import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../actions'

import Navbar from "../components/navbar";
import Form from '../components/form';
import Posts from "../components/posts";
import Loading from "../components/base/Loading";
import {postsType} from "../reducer";

export default function HomePage(): JSX.Element {
    const postsArr = useSelector((state: postsType) => state.posts);

    const [currentId, setCurrentId] = useState<string | null>("");

    const dispatch = useDispatch();

    useEffect(() => {
        // call it inside useEffect to dispatch action getPosts
        dispatch(getPosts());
    }, [dispatch]);

    if (postsArr.length === 0) return <Loading/>

    else return (
        <div className={'w-full relative'}>
            <div className={'fixed w-full z-10'}>
                <Navbar/>
            </div>

            <div className={'pt-24 mx-20'}>
                <div className={'relative w-full'}>
                    <div className={'w-3/5'}>
                        <Posts setCurrentId={setCurrentId}/>
                    </div>

                    <div className={'fixed top-24 right-0 w-1/4'}>
                        <div className={'w-full'}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}