const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");


router.get("/", async (req, res) => {
  const postData = await Post.findAll({ include: [User] }).catch((err) => {
    res.json(err);
  });
  const posts = postData.map((post) => post.get({ plain: true }));
  res.render("homepage", { posts, loggedIn: req.session.loggedIn });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});


router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
      where: {
        user_id: req.session.user_id,
      },
    });
    console.log(JSON.stringify(postData));
    const posts = postData.map((post) => post.get({ plain: true }));
    if (req.session.loggedIn) {
      res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
      return;
    }
  } catch (err) {
    res.json(err);
  }
  // res.redirect('/')
});



router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render("post", {
      post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
