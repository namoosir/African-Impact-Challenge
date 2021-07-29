require("dotenv").config();
const express = require("express");
const app = express();

const Video = require("../models/video");

const createRoom = async (req, res) => {
  const { name, link } = req.body;

  const video = new Video({
    name: name,
    link: link,
  });

  await video.save();

  res.status(200).json({ msg: "Video have been added" });
};

const loadRooms = async (req, res) => {
  const video = await Video.find();
  res.status(200).json(video);
};

module.exports = {
  createRoom,
  loadRooms
};
