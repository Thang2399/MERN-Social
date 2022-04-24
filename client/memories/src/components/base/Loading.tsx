import React from 'react';
import {BouncingBalls} from "react-cssfx-loading";

export default function Loading(): JSX.Element {
    return (
        <div className={'w-full h-screen flex justify-center items-center'}>
            <div className={'w-10 h-full flex justify-center items-center'}>
                <BouncingBalls color={'rgb(209 213 219)'} width={'1em'} height={'1em'}/>
            </div>
        </div>
    )
}