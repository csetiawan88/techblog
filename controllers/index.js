const router = require("express").Router();
const homeRoutes = require("./homeRoute.js");
const apiRoutes = require("./api/index.js");
const dashboardRoutes = require("./dashboardRoute.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
