var database = [
    {
        username:"andrei",
        password:"supersecret"
    },
    {
        username:"noor",
        password:"noor2001"
    }

];

var newsFeed = [
    {
        username:"noor",
        timeLine:"Hello welcom to my website"
    },
    {
        username:"bobby",
        timeLine:"So tired from all that learning!"
    },
    {
        username:"Sally",
        timeLine:"Javascript is soooo coooool!"
    }
];
var userNamePrompt = prompt("What's your username ?");
var passwordPrompt = prompt("what's your password ?");



function IsUserValid(user,pass){
    for(i=0;i<database.length;i++)
        if(user === database[i].username && 
            pass === database[i].password){
            return true ;
        }
    return false ;
}
function SignIn (user , pass){
    if(IsUserValid(user,pass)){
        console.log(newsFeed);
    }else{
        console.log("Opss please try again ");
    }
}
SignIn(userNamePrompt,passwordPrompt);




// var shoppingLis = [
//     "apple",
//     "banana",
//     "milk",
//     "bread",
//     "egg"
// ];

// shoppingLis.forEach(function(todo , i){
//        console.log(todo , i); 
//     });