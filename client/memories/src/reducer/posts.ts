import {REDUCER_ACTIONS} from '../constants';
import {postResponse} from "../types";


export default function reducer(posts: [] = [], action: any) {
    switch (action.type) {
        case REDUCER_ACTIONS.GET_POSTS:
            return action.payload

        case REDUCER_ACTIONS.CREATE_POST:
            return [...posts, action.payload]

        case REDUCER_ACTIONS.UPDATE_POST:
        case REDUCER_ACTIONS.UPDATE_LIKE_POST:
            // loop through postsArr, check the post with the _id match the action.payload._id to update that post
            return posts.map((post: postResponse) => post._id === action.payload._id ? action.payload : post)

        case REDUCER_ACTIONS.DELETE_POST:
            return posts.filter((post: postResponse) => post._id !== action.payload._id);

        default:
            return posts
    }
};
