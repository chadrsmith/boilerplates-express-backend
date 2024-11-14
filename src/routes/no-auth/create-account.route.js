const router = require('express').Router();
const { joi, validate } = require('../../middlewares/validate.middleware');

/**
 * @api {post} /create-account Creates a user account
 * @apiGroup No Auth
 * 
 * @apiParam (Body) {String} firstName  User's First Name
 * @apiParam (Body) {String} lastName   User's last name
 * @apiParam (Body) {String} email      User's email
 * @apiParam (Body) {string} password   User's password
 */
router.post(
  '/create-account',
  validate({
    body: {
      firstName: joi.string().trim().max(30).required(),
      lastName: joi.string().trim().max(30).required(),
      email: joi.string().lowercase().email().max(50).required(),
      password: joi.string().min(8).required()
    }
  }),
  async (req, res, next) => {
    try {
      console.log('creating user');
    } catch (err) {
      next(err);
    }
  }
)

module.exports = router;