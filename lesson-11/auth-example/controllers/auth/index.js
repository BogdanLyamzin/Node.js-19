const register = require("./register");
const verifyEmail = require("./verifyEmail")
const resendEmail = require("./resendEmail")
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require("./updateAvatar");

module.exports = {
    register,
    verifyEmail,
    resendEmail,
    login,
    getCurrent,
    logout,
    updateAvatar,
}