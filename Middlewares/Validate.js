const { body, validationResult } = require("express-validator");

const abcd = [
  body("email", "Invalid email").isEmail(),
  body("Password")
    .isLength({ min: 5 }).withMessage("Password must be at least 5 characters long")
    .matches(/\d/).withMessage("Password must contain a number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage("Password must contain a special character")
    .matches(/[A-Z]/).withMessage("Password must contain an uppercase letter")
    .matches(/[a-z]/).withMessage("Password must contain a lowercase letter")
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { abcd, validate };
