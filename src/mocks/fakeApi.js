import fotosdefault from '../img/fotosgeneriacas.png';

 const productos =[
    {id:"p1",Name:"Nombre del modelo", description:"Ropa de primavera", price:40, pictureURL:fotosdefault},
    {id:"p2",Name:"Nombre del modelo", description:"Ropa de verano", price:50, pictureURL:fotosdefault},
    {id:"p3",Name:"Nombre del modelo",description:"Ropa de invierno", price:60, pictureURL:fotosdefault},
    {id:"p4",Name:"Nombre del modelo",description:"Ropa de navidad", price:70, pictureURL:fotosdefault},
    {id:"p5",Name:"Nombre del modelo", description:"Ropa de primavera", price:40, pictureURL:fotosdefault},
    {id:"p6",Name:"Nombre del modelo", description:"Ropa de verano", price:50, pictureURL:fotosdefault},
    {id:"p7",Name:"Nombre del modelo", description:"Ropa de invierno", price:60, pictureURL:fotosdefault},
    {id:"p8",Name:"Nombre del modelo", description:"Ropa de navidad", price:70, pictureURL:fotosdefault},
];
export const getData = new Promise((res,rej)=>{
    let condition =true;
    setTimeout(()=>{
        if(condition){
            res(productos);
        }else{
            rej("Error");
        }
    },2000);
})