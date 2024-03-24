const jwt = require("jsonwebtoken");

const JWT_SECRET = "mysecretkey"

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "1 days",
  });
    return token;
};


const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, JWT_SECRET);
    return decodedToken.userId;
}

module.exports = {generateToken, getUserIdFromToken}