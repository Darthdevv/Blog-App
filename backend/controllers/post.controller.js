import path from "path";
import fs from "fs";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";
import appError from "../utilities/appError.js";
import { v4 as uuidv4 } from "uuid";
import { __dirname } from "../server.js";


export const getPost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return next(new appError("Post not found.", 404));
    }

    res.status(200).json(post);
  } catch (error) {
    return next(new appError(error));
  }
};

export const getPosts = async (req, res, next) => {
  try {
      const posts = await Post.find().sort({updatedAt: -1});

      res.status(200).json(posts);
  } catch (error) {
    return next(new appError(error));
  }
};

export const editPost = async (req, res, next) => {
  try {
    let extension;
    let newFileName;
    let updatedPost;

    const { id } = req.params;

    let { title, category, description } = req.body;

    if (!title || !category || description.length < 12) {
      return next(new appError("Fill in all fields.", 422));
    }

    //get old post from database
    const oldPost = await Post.findById(id);

    if (req.user.id == oldPost.creator) {
      if (!req.files) {
        updatedPost = await Post.findByIdAndUpdate(
          id,
          { title, category, description },
          { new: true }
        );
      } else {
        //delete old thumbnail from upload
        if (oldPost && oldPost.thumbnail) {
          const oldThumbnailPath = path.join(
            __dirname,
            "uploads",
            oldPost.thumbnail
          );
          try {
            if (fs.existsSync(oldThumbnailPath)) {
              await fs.promises.unlink(oldThumbnailPath);
            }
          } catch (err) {
            return next(
              new appError("Failed to delete old thumbnail.", 500)
            );
          }
        }

        const { thumbnail } = req.files;

        //check the file size
        if (thumbnail.size > 2000000) {
          // Limit to 2 MB
          return next(
            new appError(
              "Thumbnail is too big, file should be less than 2mb",
              422
            )
          );
        }

        const uploadsDir = path.join(__dirname, "uploads");
        try {
          await fs.promises.mkdir(uploadsDir, { recursive: true });
        } catch (err) {
          return next(
            new appError("Failed to create directory for uploads.", 500)
          );
        }

        extension = thumbnail.name.split(".").pop();
        newFileName = `${uuidv4()}.${extension}`;
        const newThumbnailPath = path.join(
          __dirname,
          "uploads",
          newFileName
        );

        thumbnail.mv(newThumbnailPath, async (err) => {
          if (err) {
            return next(new appError("Error saving file.", 500));
          }
        });

        updatedPost = await Post.findByIdAndUpdate(
          id,
          { title, category, description, thumbnail: newFileName },
          { new: true }
        );
      }
    }

    if (!updatedPost) {
      return next(new appError("Couldn't update post.", 400));
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    return next(new appError(error));
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return next(new appError("Post unavailable.", 400))
    }

    const post = await Post.findById(id);

    const fileName = post?.thumbnail;

    if (req.user.id == post.creator) {
      //delete thumbnail from uploads folder
        if (post && post.thumbnail) {
          const thumbnailPath = path.join(
            __dirname,
            "uploads",
            fileName
          );
          try {
            if (fs.existsSync(thumbnailPath)) {
              await fs.promises.unlink(thumbnailPath);
            }
          } catch (err) {
            return next(
              new appError("Failed to delete thumbnail.", 500)
            );
          }
        }

      await Post.findByIdAndDelete(id);
      //find user and reduce user count by 1
      const currentUser = await User.findById(req.user.id);
      const userPostCount = currentUser?.posts - 1;
      await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });

      res.status(204).json(`Post ${id} deleted successfully`);

    } else {
      return next(new appError("Post couldn't be deleted", 400));
    }
  } catch (error) {
    return next(new appError(error));
  }
};

export const getUserPosts = async (req, res, next) => {
  try {
    const { id } = req.params;

    const userPosts = await Post.find({ creator: id }).sort({ createdAt: -1 });

    res.status(200).json(userPosts);
  } catch (error) {
    return next(new appError(error));
  }
};

export const getPostsByCategory = async (req, res, next) => {
  try {
    const { category } = req.params;

    const postByCategory = await Post.findOne({ category }).sort({ createdAt: -1 });

    res.status(200).json(postByCategory);
  } catch (error) {
    return next(new appError(error));
  }
};

export const createPost = async (req, res, next) => {
  try {
    let { title, category, description } = req.body;

    if (!title || !category || !description || !req.files) {
      return next(new appError("Fill in all fields and choose a thumbail.", 422));
    }

    const { thumbnail } = req.files;

    //check the file size
      if (thumbnail.size > 2000000) {
      // Limit to 2 MB
      return next(
        new appError(
          "Thumbnail is too big, file should be less than 2mb",
          422
        )
      );
      }

      const uploadsDir = path.join(__dirname, "uploads");
      try {
        await fs.promises.mkdir(uploadsDir, { recursive: true });
      } catch (err) {
        return next(
          new appError("Failed to create directory for uploads.", 500)
        );
      }

      const extension = thumbnail.name.split(".").pop();
      const newFileName = `${uuidv4()}.${extension}`;
      const newThumbnailPath = path.join(__dirname, "uploads", newFileName);

      thumbnail.mv(newThumbnailPath, async (err) => {
        if (err) {
          return next(new appError("Error saving file.", 500));
        }

        const newPost = await Post.create({ title, category, description, thumbnail: newFileName, creator: req.user.id });

        if (!newPost) {
          return next(new appError("Post couldn't be created.", 422));
        }

        //find user and increase post count by 1
        const currentUser = await User.findById(req.user.id);
        const userPostCount = currentUser.posts + 1;
        await User.findByIdAndUpdate(req.user.id, { posts: userPostCount });
        res.status(201).json(newPost);
      });

  } catch (error) {
    return next(new appError(error));
  }
};
