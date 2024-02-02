const BlogModel = require("./blog.model");

// Create
const create = (payload) => {
  return BlogModel.create(payload);
};

// Read - Get all blogs
const getAll = () => {
  return BlogModel.find();
};

// Read - Get a specific blog by ID
const getByID = (id) => {
  return BlogModel.findById(id);
};

// Update - Update a blog by ID
const updateByID = (id, payload) => {
  return BlogModel.findByIdAndUpdate(id, payload, { new: true });
};

// Delete - Delete a blog by ID
const deleteByID = (id) => {
  return BlogModel.findByIdAndDelete(id);
};

module.exports = { create, getAll, getByID, updateByID, deleteByID };
