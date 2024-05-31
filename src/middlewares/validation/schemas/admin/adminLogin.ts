import Joi from 'joi';

export default Joi.object().keys({
  username: Joi.required().messages({
    'any.required': 'Username is required',
  }),
  password: Joi.required().empty().messages({
    'any.required': 'Password is required',
  })
}).options({ allowUnknown: false});