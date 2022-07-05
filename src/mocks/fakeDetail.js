import fotosdefault from '../img/fotosgeneriacas.png';

const Detail = {id:"p1",Name:"Nombre del modelo", description:"Ropa de Lorem ipsum dolor sit amet consectetur, adipiscing elit pulvinar aenean eros ullamcorper, primis litora sollicitudin sapien. Tristique suscipit urna condimentum fermentum volutpat senectus nam suspendisse orci, vivamus montes sociosqu massa faucibus vel ante nullam. Feugiat orci viverra imperdiet pulvinar duis elementum quam magna taciti nascetur, pellentesque ante maecenas sem aliquet semper dignissim vehicula sollicitudin.", price:40, pictureURL:fotosdefault};

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