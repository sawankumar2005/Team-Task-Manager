const adminOnly = (req, res, next) => {
  if (req.user.role === "Admin") {
    next();
  } else {
    res.status(403).json({
      message: "Admin Access Only",
    });
  }
};

module.exports = {
  adminOnly,
};