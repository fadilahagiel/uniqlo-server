
const errorHandlers = async (err, req, res, next) => {
    let code = 500
    let message = "Internal Server Error"
    if (err.name == 'ValidationError') {
        code = 400
        message = Object.values(err.errors)[0].message
    } if (err.name == 'MongoServerError') {
        code = 400
        message = "Email address already in use"
    }else if (err.name == 'error_login') {
        code = 401
        message = "invalid email or password"
    } else if (err.name == "invalid_credentials") {
        code = 404
        message = "error not found"
    } else if (err.name == "forbidden") {
        code = 403
        message = "forbidden"
    } else if (err.name == 'no_credentials') {
        code = 400
        message = err.err
    }
    res.status(code).json({message})
}

module.exports = errorHandlers