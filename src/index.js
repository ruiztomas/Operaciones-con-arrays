const express=require("express");
const calculosFns=require("./calculosFns");
const app=express();
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Servidor funcionando correctamente.");
});

app.post("/calculos", (req, res)=>{
    try{
        const {numeros, operacion}=req.body;
        const funcion=calculosFns.find((f)=>f.name===operacion);
        if (!funcion) throw new Error("Operacion no soportada");
        const resultado=funcion.value(numeros);
        res.status(201).json({resultado});
    }catch(e){
        res.status(500).json({mensaje: e.message});
    }
});

app.listen(5000, ()=>{
    console.log("App funciona.")
});