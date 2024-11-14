const joi = require('joi');


module.exports.validate = (schema = {}) => {
  return async (req, res, next) => {
    try {
      const value = await joi.validate({
        body: req.body,
        params: req.params,
        query: req.query
      },
      joi.object().keys({
        body: joi.object.keys(schema.body || {}).required(),
        params: joi.object.keys(schema.params || {}).required(),
        query: joi.object.keys(schema.query || {}).required(),
        file: joi.object.keys(schema.file || {}).optional(),
      }).required()
    );

    req.body = value.body
    req.params = value.params
    req.query = value.query
    req.file = value.file

    next();
    } catch (err) {
      if (err.isJoi) {
        return res.status(400).json(err.details[0]);
      } else {
        next(err);
      }
    }
  }
};

module.exports.joi = {
  ...joi,
  phone: () => {
    return joi.string().trim().regex(/^(\+d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'phone')
  },
}