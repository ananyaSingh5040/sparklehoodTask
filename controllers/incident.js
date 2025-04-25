const Incident = require("../models/incident");

// Get Request
async function handleGetIncident(req, res) {
  const allUsers = await Incident.find();
  return res.status(200).json(allUsers);
}

// Post Request
async function handlePostIncident(req, res) {
  const { title, description, severity } = req.body;
  if (!title || !description || !severity) {
    return res.status(400).json({ error: "All fields are required." });
  }
  const allowedSeverity = ["Low", "Medium", "High"];
  if (!allowedSeverity.includes(severity)) {
    return res.status(400).json({ error: "Severity must be one of: Low, Medium, or High." });
  }
  const newIncident = await Incident.create({
    title,
    description,
    severity,
  });
  return res.status(201).json({ msg: "Incident created!", _id: newIncident._id });
}

// Get:{id} Request
async function handleIdIncident(req, res) {
  const id = req.params.id;
  const result = await Incident.findOne({ _id: id });
  if (!result)
    return res.status(404).json({ msg: "No Incident found with the given id." });
  return res.status(200).json({ result });
}

// Delete Request
async function handleDeleteIncident(req, res) {
  const id = req.params.id;
  const deletedIncident = await Incident.findByIdAndDelete(id);
  if (!deletedIncident)
    return res.status(404).json({ msg: "Incident Id not found." });
  return res.status(200).json({ msg: "Incident Removed." });
}
module.exports = {
  handleGetIncident,
  handlePostIncident,
  handleIdIncident,
  handleDeleteIncident,
};
