import jwt from "jsonwebtoken";
console.log("JWT_EXPIRES_IN:", process.env.JWT_EXPIRES_IN);
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

export default generateToken;