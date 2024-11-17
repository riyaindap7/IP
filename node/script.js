const fs = require('fs');
const prompt=require('prompt-sync')({sigint:true});
var ch=parseInt(prompt("enter what to do \n 1.write \n 2.append \n 3.rename \n 4.copy \n 5.delete \n 6.read "))
switch(ch){
    case 1:
fs.writeFile("1.txt","hello bhai kaise ho?",function(err){
    if(err) console.error(err);
    else console.log("done");
})
break;

case 2:
fs.appendFile("1.txt","hello bhai kaise ho?",function(err){
    if(err) console.error(err);
    else console.log("done");
})
break;

case 3:
fs.rename("1.txt","2.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})
break;

case 4:
fs.copyFile("2.txt","2copy.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
}
)
break;

case 5:
fs.unlink("2copy.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})
break;

case 6:
fs.readFile("2.txt",(err,data)=>{
    if(err) console.error(err.message);
    else console.log(data.toString());
})
break
}
