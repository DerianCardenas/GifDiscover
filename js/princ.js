const main = () =>{
    let offset = 0;
    let limit = 15;
    var url = '';
    var api_key = "hgIaMbQMcikORBCiFhUw5LKUMIiWjOat";
    let inicio = document.getElementById('inicio');
    let down = document.querySelector('.down-p');
    let busq = document.getElementById('search');
    let cont = document.getElementById('cont');
    inicio.onclick=() =>{
        conn(url);
        }
    busq.onclick = () =>{
        var busq = document.getElementById('searchbar').value;
        if(busq==''){
            alert("Introduzca una palabra clave");
        }
        else{
            document.getElementById('cont').innerHTML="";
            document.getElementById('searchbar').value="";
            console.log(busq);
            var url = `https://api.giphy.com/v1/gifs/search?api_key=hgIaMbQMcikORBCiFhUw5LKUMIiWjOat&q="+busq+"&offset=${offset}&limit=${limit}`;
            fetch(url)
                .then(response => response.json())
                .then(data => mostrarData(data))
                .catch(error => console.log(error))
            const mostrarData = (data) => {
                let gif ='';
                console.log(data);
                for(let index = 0; index < data.data.length; index++){
                    let videoUrl = data.data[index].images.original.mp4;
                    let height = data.data[index].images.original_mp4.height;
                    let width = data.data[index].images.original_mp4.width;
                    height = ordenaMedida(height);
                    width = ordenaMedida(width);
                    gif+=`<video autoplay='true' loop='true' src= ${videoUrl} height=${height}px width= ${width}px></video>`
                    document.getElementById('cont').innerHTML=gif;
                }
            }
        }
        }
    down.onclick=() =>{
        prevFetch(offset+15,limit);
        }
    const prevFetch=(offset,limit)=>{
        url = `https://api.giphy.com/v1/gifs/trending?api_key=hgIaMbQMcikORBCiFhUw5LKUMIiWjOat&q=keyword&offset=${offset}&limit=${limit}`;
        conn(url);
        }
    const conn = (url) =>{
         fetch(url).then(response => response.json()).then(data => mostrarData(data))
        }
    const mostrarData = (data) => {
            let gif ='';
                console.log(data);
            for(var index = 0; index < data.data.length; index++){
                let videoUrl = data.data[index].images.original.mp4;
                let height = data.data[index].images.original.height;
                let width = data.data[index].images.original.width;
                height = ordenaMedida(height);
                width = ordenaMedida(width);
                let video = document.createElement('video');
                video.src=videoUrl;
                video.height=height;
                video.width=width;
                console.log("offset: "+offset+" limit: "+limit+" hg: "+height+" wd: "+width);
                cont.appendChild(video);
            }
     }
    const ordenaMedida = (dato) =>{
        datoN = dato/2;
        if(datoN < 170)
            datoN =170;
        return datoN;
    }
    prevFetch(0,15);
}
document.addEventListener('DOMContentLoaded',main);