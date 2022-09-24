const {ValidationError} = require("yup");

// 500 - internal server error
module.exports.internalServerEH = (err, req, res, next) => {
    res.status(500).send(err);
}

// 422 UNPROCESSABLE ENTITY / for validate
module.exports.validationEH = (err, req, res, next) => {
    if(err instanceof ValidationError)
        res.status(422).send(err.errors);
    }
    next(err);
}
