import axios from 'axios';
import {postData} from "../types"

const url = 'http://localhost:8800/posts';

export const getPosts = () => axios.get(url);
export const createPost = (postData: postData) => axios.post(url, postData);