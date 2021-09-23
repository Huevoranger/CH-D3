/*Coder House
Curso backend
Grupo: 22885
Nombre: Erick Omar Sandoval Báez
DESAFIO 3*/
const express= require ("express")
const path= require("path")

const app= express();

const PORT= 8080;

const arr= require("./productos");
app.get("/",(req,res)=>{
    
    res.json({
        messege: "Informacion enviada exitosamente",
        //data: arr,
      });
    

})

app.get("/productos",(req,res)=>{
    let arrNew= arr;
    res.send(arrNew)
})
app.get("/productosrandom",(req,res)=>{
    let arrNew= arr;
    let max= arrNew.length
    let rnd= Math.floor(Math.random() * (max - 0) + 0)//función random de un entero
    res.send(arrNew[rnd])
 
})

app.listen(PORT, ()=>{
    console.log("Server running on port "+PORT)
})