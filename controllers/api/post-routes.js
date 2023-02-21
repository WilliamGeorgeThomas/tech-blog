const router = require("express").Router();
const { Post, Comment, User } = require("../../models");
const withAuth = require("../../utils/auth");
// const withAuth = require("./../utils/auth");

router.post("/:id", async (req, res) => {
  try {
    const postData = await Comment.create({
      body: req.body.body,
      user_id: req.session.user_id,
      post_id: req.params.id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.delete("/:id", async (req, res) => {
//   try {
//     const postData = await Comment.destroy({
//       where: {
//         id: req.params.id,
//         // user_id: req.session.user_id,
//       },
//     });

//     if (!postData) {
//       res.status(404).json({ message: "No comment found with this id!" });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.put("/:id", async (req, res) => {
  try {
    // if (req.params.user_id === req.session.user_id) {
      const post = await Post.update(
        {
          title: req.body.title,
          body: req.body.body,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json(post);
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
