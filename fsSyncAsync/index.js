// NodeJS architecture involves a request, an event queue(which houses a number of these requests), the event loop (which sends response on these requests)
//and the thread pool which constains threads/workers which essentially handles the blocking requests. The non-blocking/ async requests dont reach the thread pool


// A blocking or a synchronous operation uses the thread pool and a thread pool contains around 4 threads/ or workers. So if more than 4 tasks are to be 
//      resolved, then we might block the process and might halt it

const fs = require("fs")
// a blocking request  [It returns back...]
// console.log("1");
// const result = fs.readFileSync("contacts.txt", "utf-8");
// console.log(result);
// console.log("2");


// a non - blocking request dosent return anything
fs.readFile("contacts.txt", "utf-8", (err, result) => {
    console.log(result);
});
console.log("2")
console.log("3")

//output 
// 2
// 3
// Aradhana: +918477xxxxxx  the readFile dosnt block another operations.


//asdf