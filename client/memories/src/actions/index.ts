import {REDUCER_ACTIONS} from '../constants';
import * as api from '../apis'

// Actions Creators
export const getPosts = () => async (dispatch: any) => {
    try {
        const {data} = await api.getPosts();

        // return action with type of GET_POSTS and the payload (data) to store is []
        const action = {type: REDUCER_ACTIONS.GET_POSTS, payload: data};
        dispatch(action);

    } catch (err: any) {
        console.log(err.message);
    }

}

export const createPost = (post) => async (dispatch: any) => {
    try {
        const {data} = await api.createPost(post);

        const action = {type: REDUCER_ACTIONS.CREATE_POST, payload: data};
        dispatch(action);
    } catch (err: any) {
        console.log(err)
    }
}