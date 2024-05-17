const responseHelper = require('../cores/response')

module.exports = (roles) => {
  return (req, res, next) => {
  	if (roles.includes(req.user.role)) {
    	next();
    } 
    responseHelper.forbidden(res)       
  };
}