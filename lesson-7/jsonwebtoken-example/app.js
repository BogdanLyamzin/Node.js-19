const jwt = require("jsonwebtoken");
require("dotenv").config();

const payload = {
    id: "6336a20b0e3c0d2944037065"
}

const {SECRET_KEY} = process.env;

const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});
// console.log(token);

const decodeToken = jwt.decode(token);
// console.log(decodeToken);

const wrongToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMzZhMjBiMGUzYzBkMjk0NDAzNzA2NSIsImlhdCI6MTY2NDUyNjc1NywiZXhwIjoxNjY0NTMwMzU3fQ.E_KXGFa48PPxfRHGHkpuiji0BD-k67vcOtauDUdw3be"

try {
    const result1 = jwt.verify(token, SECRET_KEY);
    console.log(result1);
    const result2 = jwt.verify(wrongToken, SECRET_KEY);
} catch (error) {
    console.log(error.message);
}