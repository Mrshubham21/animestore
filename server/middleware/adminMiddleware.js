export const adminOnly = (req, res, next) => {
  // req.user is added by protect middleware
  if (req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      message: "Access denied. Admins only.",
    });
  }

  next();
};