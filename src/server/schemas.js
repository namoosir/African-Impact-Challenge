const joi = requires('joi')

module.exports.user = joi.object({
    user: joi.object({
        name: joi.string().required(),
        email: joi.string().required(),
        username: joi.string().required(),
        password: joi.string().required(),
        typeOfUser: joi.string().required()
    })
})