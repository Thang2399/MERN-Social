import axios from 'axios';

const url = 'http://localhost:8800/posts';

export const getPosts = () => axios.get(url);