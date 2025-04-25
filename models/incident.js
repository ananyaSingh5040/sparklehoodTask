const mongoose = require("mongoose");
const incidentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    severity: {
      type: String,
      enum: ["Low", "Medium", "High"],
      required: true,
    },
  },
  { timestamps: { createdAt: "reported_at" } }
);
const Incident = mongoose.model("incident",incidentSchema);
module.exports = Incident;