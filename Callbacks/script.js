class Persona{
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
["Rafael", "@SoyRafael"],
["Carlos", "@SoyCarlos"],
["Pedro", "@SoyPedro"],
["Jose", "@SoyJose"]

];

const personas = [];

for(let i=0; i<data.length; i++){
    personas[i] = new Persona(data[i][0], data[i][1])
}


//Callback para la function

const obtenerPersona = (id,cb)=>{
    if(personas[id] === undefined){
        console.log("No se ha podido encontrar a la persona");                  
    }   
    else{
        cb(null,personas[id],id)
    }
}

const obtenerInstagram =(id,cb)=>{
    if(personas[id].instagram == undefined){
        cb("No se ha podido encontrar el instagram de la persona");                  
    }   
    else{
        cb(null,personas[id].instagram)
    }
}

obtenerPersona(2,(err,persona,id)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(persona.nombre);
        obtenerInstagram(id,(err,instagram)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(instagram)
            }
        })
    }
})
