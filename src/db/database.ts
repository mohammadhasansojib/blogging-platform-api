import mongoose from "mongoose"

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["Technology", "Sport", "Politics"],
        required: true
    },
    tags: {
        type: String,
        enum: ["Tech", "Programming", "Sport", "Politics"],
        required: true
    },
},
{
    timestamps: true
});


const Post = mongoose.model("Post", postSchema);

export default Post;


// {
//   "id": 1,
//   "title": "My Updated Blog Post",
//   "content": "This is the updated content of my first blog post.",
//   "category": "Technology",
//   "tags": ["Tech", "Programming"],
//   "createdAt": "2021-09-01T12:00:00Z",
//   "updatedAt": "2021-09-01T12:30:00Z"
// }