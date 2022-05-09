const express = require("express");

const userRoutes = require("./v1/user.route");

// base route - /api
const router = express.Router();

// Health check route
router.get("/v1/health", (req, res) => res.status(200).send("UP"));

// v1 user routes
router.use("/v1/user", userRoutes);

module.exports = router;
