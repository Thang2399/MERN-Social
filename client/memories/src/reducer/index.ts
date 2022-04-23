import {combineReducers} from 'redux';

import posts from './posts'

// combine one or more store into one store only
export default combineReducers({
    posts
})

export type postsType = ReturnType<typeof posts>