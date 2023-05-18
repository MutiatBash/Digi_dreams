const Profile = require("../models/profileModel");

const mongoose = require("mongoose");

const getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json(profiles);
};

const getProfile = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such profile" });
  }
  const profile = await Profile.findById(id);
  if (!profile) {
    return res.status(400).json({ error: "No such profile" });
  }
  res.status(200).json(profile);
};

const createProfile = async (req, res) => {
  const { img, userName, twitter_userName, information, email } = req.body;

  // add doc to db

  try {
    const profile = await Profile.create({
      img,
      userName,
      twitter_userName,
      information,
      email,
    });
    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProfile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such profile" });
  }

  const profile = await Profile.findOneAndDelete({ _id: id });
  if (!profile) {
    return res.status(400).json({ error: "No such profile" });
  }
  res.status(200).json(profile);
};

const updateProfile = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such profile" });
  }

  const profile = await Profile.findOneAndUpdate({ _id: id }, { ...req.body });
  if (!profile) {
    return res.status(400).json({ error: "No such profile" });
  }
  res.status(200).json(profile);
};

module.exports = {
  createProfile,
  getProfiles,
  getProfile,
  deleteProfile,
  updateProfile,
};
