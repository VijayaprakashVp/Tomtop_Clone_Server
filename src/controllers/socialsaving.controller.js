const SocialSaving = require("../models/socialsaving.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const socialsaving = await SocialSaving.create(req.body);
    return res.status(200).send(socialsaving);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const socialsaving = await SocialSaving.find().lean().exec();
    return res.status(200).send(socialsaving);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  // console.log("req:", req.params.id);

  try {
    const socialsaving = await SocialSaving.findById(req.params.id);

    return res.status(200).send(socialsaving);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch(":id", async (req, res) => {
  try {
    const socialsaving = await SocialSaving.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    )
      .lean()
      .exec();
    return res.status(200).send(socialsaving);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const socialsaving = await SocialSaving.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(socialsaving);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
