const {Book} = require("../../models/book")

const {RequestError} = require("../../helpers");

const updateById = async(req, res) => {
    const {id} = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body, {new: true})
    if(!result){
        throw RequestError(404)
    }
    res.json(result);
};

module.exports = updateById;