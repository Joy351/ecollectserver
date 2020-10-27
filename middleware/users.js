// // middleware/users.js
// const validator = require("email-validator");
 


// module.exports = {
//     validateRegister: (req, res, next) => {
//       // email
//       if (!validator.validate("test@email.com")) {
//         return res.status(400).send({
//           msg: 'Please enter a valid email'
//         });
//       }
  
//       // password min 6 chars
//       if (!req.body.password || req.body.password.length < 6) {
//         return res.status(400).send({
//           msg: 'Please enter a password with min. 6 chars'
//         });
//       }
  
//       // password (repeat) does not match
//       if (
//         !req.body.password_repeat ||
//         req.body.password != req.body.password_repeat
//       ) {
//         return res.status(400).send({
//           msg: 'Both passwords must match'
//         });
//       }
  
//       next();
//     }
//   };
// // middleware/users.js

// isLoggedIn: (req, res, next) => {
//     try {
//       const token = req.headers.authorization.split(' ')[1];
//       const decoded = jwt.verify(
//         token,
//         'SECRETKEY'
//       );
//       req.userData = decoded;
//       next();
//     } catch (err) {
//       return res.status(401).send({
//         msg: 'Your session is not valid!'
//       });
//     }
//   }

  