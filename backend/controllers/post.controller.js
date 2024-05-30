export const getPost = async (req, res, next) => {
    res.status(200).json('this is the post');
}

export const getPosts = async (req, res, next) => {
    res.status(200).json('these are the posts');
}

export const editPost = async (req, res, next) => {
    res.status(200).json('post edited successfully');
}

export const deletePost = async (req, res, next) => {
    res.status(200).json('post deleted successfully');
}

export const getUserPosts = async (req, res, next) => {
    res.status(200).json('these are the posts of this user');
}

export const getPostsByCategory = async (req, res, next) => {
    res.status(200).json('this is the post by this category');
}

export const createPost = async (req, res, next) => {
    res.status(200).json('post created successfully');
}