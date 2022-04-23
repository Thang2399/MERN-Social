import {REDUCER_ACTIONS} from '../constants';


export default function reducer(posts: [] = [], action: any) {
    switch (action.type) {
        case REDUCER_ACTIONS.GET_POSTS:
            return action.payload
        case REDUCER_ACTIONS.CREATE_POST:
            return [...posts, action.payload]
        default:
            return posts
    }
};
