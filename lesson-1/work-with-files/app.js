const fs = require("fs/promises");
// const fs = require("fs").promises;

const fileOperation = async({action, data}) => {
    switch(action) {
        case "read":
            const text = await fs.readFile("./files/file.txt", "utf-8");
            console.log(text);
            // const result = await fs.readFile("./files/file.txt");
            // const text = result.toString();
            // console.log(text);
            break;
        case "add":
            await fs.appendFile("./files/file.txt", data);
            break;
        case 'replace':
            await fs.writeFile("./files/file3.txt", data);
            break;
        default: 
            throw new Error("Unknown action")
    }
};

// fileOperation({action: "read"});
// fileOperation({action: "add", data: "\nЗаписная книжка дьявола"});
fileOperation({action: "replace", data: "Кодекс Ванталы"});

// fs.readFile("./files/file.txt")
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// fs.readFile("./files/file.txt", (error, data) => {
//     console.log(error);
//     console.log(data);
// })