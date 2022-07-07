import ropa1 from '../img/1.jpeg';
import ropa2 from '../img/2.jpeg';
import ropa3 from '../img/3.jpeg';
import ropa4 from '../img/4.jpeg';
import ropa5 from '../img/5.jpeg';
import ropa6 from '../img/6.jpeg';
import ropa7 from '../img/7.jpeg';
import ropa8 from '../img/8.jpeg';


const Detail =[
{categoria:"Primavera",Name:"Ropa de primavera", description:"Ropa de primavera", price:40, pictureURL:ropa1, id:"1"},
{categoria:"Verano",Name:"Ropa de verano", description:"Ropa de verano", price:50, pictureURL:ropa2, id:"2"},
{categoria:"Invierno",Name:"Ropa de invierno",description:"Ropa de invierno", price:60, pictureURL:ropa3, id:"3"},
{categoria:"Invierno",Name:"Ropa de invierno",description:"Ropa de invierno", price:70, pictureURL:ropa4, id:"4"},
{categoria:"Primavera",Name:"Ropa de primavera", description:"Ropa de primavera", price:40, pictureURL:ropa5, id:"5"},
{categoria:"Verano",Name:"Ropa de verano", description:"Ropa de verano", price:50, pictureURL:ropa6, id:"6"},
{categoria:"Invierno",Name:"Ropa de invierno", description:"Ropa de invierno", price:60, pictureURL:ropa7, id:"7"},
{categoria:"Otonio",Name:"Ropa de otonio", description:"Ropa de otonio", price:70, pictureURL:ropa8, id:"8"},

];

export const getItem = new Promise((res,rej)=>{
    let condition =true;
    setTimeout(()=>{
        if(condition){
            res(Detail);
        }else{
            rej("Error");
        }
    },5000);
})