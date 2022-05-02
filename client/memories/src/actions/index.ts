import {REDUCER_ACTIONS} from '../constants';
import * as api from '../apis';
import moment from 'moment';

// Actions Creators
export const getPosts = () => async (dispatch: any) => {
    try {
        let {data} = await api.getPosts();
        data = data.map((item: any) => {
            item.createdAt = moment(item.createdAt).locale('en-gb').format('YYYY-MM-DD HH:mm:ss');
            return item
        })

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

export const updatePost = (id, post) => async (dispatch: any) => {
    try {
        const {data} = await api.updatePost(id, post);

        dispatch({type: REDUCER_ACTIONS.UPDATE_POST, payload: data})
    } catch (err: any) {
        console.log(err)
    }
}

export const deletePost = (id: string) => async (dispatch: any) => {
    try {
        await api.deletePost(id);

        dispatch({type: REDUCER_ACTIONS.DELETE_POST, payload: id})
    } catch (err: any) {
        console.log(err)
    }
}

export const updateLikePost = (id: string) => async (dispatch: any) => {
    try {
        const {data} = await api.updateLikePost(id);

        dispatch({type: REDUCER_ACTIONS.UPDATE_LIKE_POST, payload: data})
    }catch (err: any) {
        console.log(err)
    }
}