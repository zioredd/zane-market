const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  // Check if token is provided
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No access token provided." });
  }

  try {
    // Verify token
    const decoded = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );
    req.user = decoded; // Attach user data to request object
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
