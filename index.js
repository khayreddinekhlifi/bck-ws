var fs=require("fs")
fs.writeFile('welcome.txt','hello node', function(err){
if(err){
    console.log(err)
}
console.log("file created")
})

fs.readFile('hello.txt', function(err, data) {
	  console.log(data);
});