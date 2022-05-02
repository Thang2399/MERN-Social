import axios from 'axios';
import {postData} from "../types"

const url = 'http://localhost:4400/posts';

export const getPosts = () => axios.get(url);
export const createPost = (postData: postData) => axios.post(url, postData);
export const updatePost = (id: string, updatePostData: postData) => axios.put(`${url}/${id}`, updatePostData);
export const deletePost = (id: string) => axios.delete(`${url}/${id}`);
export const updateLikePost = (id: string) => axios.put(`${url}/like_post/${id}`);