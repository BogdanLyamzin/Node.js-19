const books = require("./books");

const invokeAction = async({action, id, title, author}) => {
    switch (action) {
        case "read":
            const allBooks = await books.getAll();
            console.log(allBooks);
            break;
        case "getById":
            const oneBook = await books.getById(id);
            console.log(oneBook);
            break;
        case "add":
            const newBook = await books.add({title, author});
            console.log(newBook);
            break;
        case "updateById":
            const updateBook = await books.updateById(id, {title, author});
            console.log(updateBook);
            break;
        case "removeById":
            const removeBook = await books.removeById(id);
            console.log(removeBook);
            break;
        default:
            console.log("Unknown action");
    }
};

// invokeAction({action: "read"});
// invokeAction({action: "getById", id: "u9kgwNWGi3uUUwh0b8V49"});
// invokeAction({action: "add", title: "Worm", author: "Джим Маккрей"});
// invokeAction({action: "updateById", id: "9F0W2Q0hmKn7XveLBxHTK", title: "Ward", author: "Джим Маккрей"});
// invokeAction({action: "removeById", id: "9F0W2Q0hmKn7XveLBxHTK"});