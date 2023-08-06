const { postNew } = require("../models");

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
      message: "All post retrieved",
      data: postList,
    });
  } catch (error) {
    return res.send({
      message: "error occured",
      data: error,
    });
  }
};

module.exports = { create, allPost };
