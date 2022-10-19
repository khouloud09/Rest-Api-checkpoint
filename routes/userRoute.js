const express= require('express');
const userRoute = express.Router();
const Person = require ('../person/person');

//add and save a new person to the database
userRoute.post('/add',async(req,res)=>{
    try{
const newPerson = new Person(req.body);
const result=await newPerson.save();
res.send({ person:result, msg: "person added" });
}
catch(error){console.log(error);}
}
)

// // create many people
// const People = [
//     {
//       name: "Wassim ",
//       age: 28,
//       favoriteFoods: ["m7akek", "pizza"],
//     },
//     {
//       name: "Adam ",
//       age: 16,
//       favoriteFoods: ["koskous", "makloub"],
//     },
//     {
//       name: "Ahmed",
//       age: 30,
//       favoriteFoods: ["kouskous", "spaghetti"],
//     },

//   ];
 

//Get all people
userRoute.get('/',async(req,res) =>{
    try{
const result = await Person.find();
res.send({ person:result, msg: "all people" })
    }
    catch(error){console.log(error);}
})
//Get person by id
userRoute.get("/:id",async(req,res)=>{
    try {
      const result=await Person.findById(req.params.id);
      res.send({user:result,msg:"all people found"})
    } catch (error) {
      console.log(error)
    }
   });

//delete person 

userRoute.delete("/delete/:id",async(req,res)=>{
    try {
      const result=await Person.findByIdAndDelete(req.params.id);
      res.send({user:result,msg:"person deleted successfully"})
    } catch (error) {
      console.log(error)
    }
   });  

// update person
userRoute.put("/update/:id",async(req,res)=>{
    try {
      const result=await Person.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true});
      res.send({user:result,msg:"person updated successfully"})
    } catch (error) {
      console.log(error)
    }
   }); 

  



module.exports = userRoute;