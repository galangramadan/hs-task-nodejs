const { postNew, userNew } = require("../models");

const create = async (req, res) => {
  try {
    const idUser = req.user.id;
    const { title, body } = req.body;
    if (!title || !body)
      return res.status(400).send({ message: "All field must be filled" });

    const createPost = await postNew.create({
      user_id: idUser,
      title: title,
      body: body,
    });

    return res.status(201).send({
      message: "create post success",
    });
  } catch (error) {
    return res.send({
      message: "error occured",
      data: error,
    });
  }
};

const allPost = async (req, res) => {
  try {
    const postList = await postNew.findAll();
    return res.status(200).send({
      message: "all post retrieved",
      data: postList,
    });
  } catch (error) {
    return res.send({
      message: "error occured",
      data: error,
    });
  }
};

const postById = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId);

    const post = await postNew.findOne({
      where: { id: postId },
    });

    if (post == null)
      return res.status(404).send({
        message: "post not found",
        data: post,
      });

    return res.status(200).send({
      message: "post retrieved",
      data: post,
    });
  } catch (error) {
    return res.send({
      message: "error occured",
      data: error,
    });
  }
};

const postByUserId = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId);

    const user = await userNew.findOne({
      where: { id: userId },
    });

    if (user == null)
      return res.status(404).send({
        message: "user not found",
        data: null,
      });

    const post = await postNew.findAll({
      where: { user_id: userId },
    });

    return res.status(200).send({
      message: "user all post retrieved",
      data: post,
    });
  } catch (error) {
    return res.send({
      message: "error occured",
      data: error,
    });
  }
};

module.exports = { create, allPost, postById, postByUserId };
