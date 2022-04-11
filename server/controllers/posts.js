import PostMessage from "../models/singlePost.js";

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