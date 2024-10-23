let express = require('express');
let fs=require("fs")
let {v4:uuidv4}=require("uuid");
let path=require("path")
let app = express();
let PORT = 9090;
let users = [];
app.use(express.json())
function getUser(){
    try{
        let data=fs.readFileSync(path.join(__dirname,"db.json"));
        data=JSON.parse(data)
        return data
    }
    catch(err){
        console.log(err)
    }
}

function saveUsers(data){ 
    try{
        fs.writeFileSync(path.join(__dirname, "db.json"),
        JSON.stringify(data))
    } 
    catch(error){
        console.log(error)
    }
}
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.post("/register", (req, res) => {
    let { username, email, password } = req.body;
    users=getUser()
    let newuser={
        id:uuidv4(),
        name:username,
        email,  
        password
    }
    users.push(newuser)+
    saveUsers(users)
    res.status(200).send("Registered Successfully. Confirmation mail will be send on your email in 3-4 working days")
}); 

app.isten(PORT, (err) => {
    if(err){ console.log(err) }
    console.log(`Listening on port no: ${PORT}`);
});

function getuser(){
    let{name,email,password}=res.body};
m 
promise{
    if err{
        console.log("")
        8v
    } 

    
    else{
        console.log("")
    }
}



"id"="z++";
"name"="LEGENDER-2024";
"number"="0000";
"category"="SUV";
"engine"="BS6";
"color"="WHITE";
"brand"="TOYATA";       
"price"="ON ROAD - 50 LAKH 70 THOUSAND ONLY "; 
  

  

