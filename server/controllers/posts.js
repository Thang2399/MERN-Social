import PostMessage from "../models/singlePost.js";
import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        if (postMessages) {
            return res.status(200).json(postMessages)
        }
    } catch (err) {
        return res.status(404).json({message: err.message})
    }
};

export const getPost = async (req, res) => {
    const {id} = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    // get the body from the request
    const body = req.body;

    // and then create a new schema based from the body
    const newPost = new PostMessage(body)
    try {
        // save it to the db
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({message: err.message})
    }

}

export const updatePost = async (req, res) => {
    const {id} = req.params;
    const {title, message, creator, selectedFile, tags} = req.body;

    // check if the id is not id of mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No post with id: ${id}`);
    }

    const updatedPost = {creator, title, message, tags, selectedFile, _id: id};

    await PostMessage.findByIdAndUpdate(id, updatedPost, {new: true});

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const {id} = req.params;

    // check if the id is not the id of mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`)

    await PostMessage.findByIdAndDelete(id);

    res.json({message: "Deleted successfully"})
}

export const updateLikePost = async (req, res) => {
    const {id} = req.params;

    // check if the id is not the id of mongoose
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const postData = await PostMessage.findById(id);

    // plus 1 to likeCount and send it back to FE
    const updatedLikedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: postData.likeCount + 1}, {new: true});

    res.json(updatedLikedPost)
}

export default router;
