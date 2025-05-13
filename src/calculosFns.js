const funciones=[
    {
        name:"suma",
        value:(numeros)=> {
            let total = 0;
            for (let n of numeros) total += n;
            return total;
        },
    },
    {
        name:"resta",
        value:(numeros)=> {
            let total=numeros[0];
            for (let i=1; i <numeros.length; i++) total -= numeros[i];
            return total;
        },
    },
    {
        name:"multiplicacion",
        value:(numeros)=>{
            let total=1;
            for (let n of numeros)total *=n;
            return total;
        },
    },    
    {
        name:"division",
        value:(numeros)=>{
            let total = numeros[0];
            for (let i=1; i<numeros.length; i++){
                if (numeros[i]==0) return "Error: division por cero.";
                total /= numeros[i];
            }
            return total;
        },
    },   
];

module.exports=funciones;
