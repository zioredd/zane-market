const { UserRole } = require("../common/enums/roles");

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== UserRole.ADMIN) {
    return res.status(403).json({ message: "Access denied." });
  }
  next();
};

module.exports = adminMiddleware;
