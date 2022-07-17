import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

//Post Logic
export const getPosts = async (req, res) => {
    try {
            const postMessages = await PostMessage.find();
            res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({message: error.message})
    }

}

// export const createPost = async (req, res) => {
//         const postContent = req.body;

//         const newPost = new PostMessage(postContent);

//         try {
//                 await newPost.save();
//                 res.status(201).json(newPost);

//         } catch (error) {
//             res.status(409).json({message: error.message });
            
//         }

// }

export const createPost = async (req, res) => {
    const { title, message, selectedFile, author, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, author, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const {id: _id} = req.params;
    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

    const updatedPost = await postMessage.findByIdAndUpdate(_id, post, {new: true});

    res.json(updatedPost);
}