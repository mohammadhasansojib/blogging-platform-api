import {Request, Response} from "express";
import Post from "../db/database"

const getAllPost = async (req: Request, res: Response) => {
    try{
        let {term} = req.query;
        if(!term) term = "";

        let regex = new RegExp(`${term}`, 'i');

        let posts = await Post.find({$or: [
            {title: {$regex: regex}},
            {content: {$regex: regex}},
            {category: {$regex: regex}},
            {tags: {$regex: regex}},
        ]});

        if(!posts.length) return res.status(404).json({message: "Not found"});

        res.json(posts);
    }catch(err){
        res.status(500).json({message: "Something went wrong"});
    }
}
const getPost = async (req: Request, res: Response) => {
    try{
        let _id = req.params.id;

        let post = await Post.find({_id});

        if(!post.length) return res.status(404).json({message: "Post not found"});

        res.json(post[0]);
    }catch(err){
        res.status(500).json({message: "Something went wrong"});
    }
}
const createPost = async (req: Request, res: Response) => {
    try{
        let {
            title,
            content,
            category,
            tags
        } = req.body;

        await Post.create({
            title,
            content,
            category,
            tags
        });

        res.status(201).json({
            message: "Post created"
        })
    }catch(err){
        res.status(500).json({
            message: (err as any).message
        });
    }
}
const updatePost = async (req: Request, res: Response) => {
    try{
        let _id = req.params.id;
        let {title, content} = req.body;

        let post = await Post.findByIdAndUpdate(
            _id,
            {
                title,
                content
            }
        );

        if(!post) return res.status(404).json({message: "No post found to update"});
        
        res.json({
            message: "Updated",
            post
        });
    }catch(err){
        res.status(500).json({message: "Something went wrong"});
    }
}
const deletePost = async (req: Request, res: Response) => {
    try{

        let _id = req.params.id;

        let deleteInfo = await Post.deleteOne({_id});

        if(!deleteInfo.deletedCount) return res.status(404).json({message: "No post found to delete"});

        res.status(204).json({
            message: "Deleted Successfully",
        });

    }catch(err){
        res.status(500).json({message: "Something went wrong"});
    }
}


export default {
    getAllPost,
    getPost,
    createPost,
    updatePost,
    deletePost,
}