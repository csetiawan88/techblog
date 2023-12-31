const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

//  CREATE a new comment
router.post("/", withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });
    res.redirect(req.header("Referrer"));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
