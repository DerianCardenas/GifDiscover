const main = () =>{
    let offset = 0;
    let limit = 15;
    var flag =false;
    var url = '';
    var busq = '';
    var api_key = "hgIaMbQMcikORBCiFhUw5LKUMIiWjOat";
    let inicio = document.getElementById('inicio');
    let down = document.querySelector('.down-p');
    let searchBtn = document.getElementById('search');
    let cont = document.getElementById('cont');
    inicio.onclick=() =>{
        eliminaNodos(cont);
        offset=0;
        flag = false;
        url = `https://api.giphy.com/v1/gifs/trending?api_key=hgIaMbQMcikORBCiFhUw5LKUMIiWjOat&q=keyword&offset=${offset}&limit=${limit}`;
        conn(url);
        }
    searchBtn.onclick = () =>{
        busq = document.getElementById('searchbar').value;
        if(busq==''){
            alert("Introduzca una palabra clave");
        }
        else{
            flag=true;
            document.getElementById('searchbar').value="";
            console.log(busq);
            var url = `https://api.giphy.com/v1/gifs/search?api_key=hgIaMbQMcikORBCiFhUw5LKUMIiWjOat&q=${busq}&offset=${offset}&limit=${limit}`;
            fetch(url)
                .then(response => response.json())
                .then(data => {
                eliminaNodos(cont);
                dataSearch(data);})
                .catch(error => console.log(error))
            
            }
        }
    down.onclick=() =>{
        prevFetch(offset+15,limit);
        }
    const prevFetch=(offset,limit)=>{
        if(!flag)
            url = `https://api.giphy.com/v1/gifs/trending?api_key=hgIaMbQMcikORBCiFhUw5LKUMIiWjOat&q=keyword&offset=${offset}&limit=${limit}`;
        else
            url = `https://api.giphy.com/v1/gifs/search?api_key=hgIaMbQMcikORBCiFhUw5LKUMIiWjOat&q=${busq}&offset=${offset}&limit=${limit}`;        
        conn(url,flag);
        }
    const conn = (url,flag) =>{
        if(!flag){
            fetch(url).then(response => response.json()).then(data => mostrarData(data))
        }
        else{
            fetch(url).then(response => response.json()).then(data => dataSearch(data))
        }
        }
    const mostrarData = (data) => {
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
                cont.appendChild(video);
            }
     }
    const dataSearch = (data) => {
                for(let index = 0; index < data.data.length; index++){
                    let videoUrl = data.data[index].images.original.mp4;
                    let height = data.data[index].images.original_mp4.height;
                    let width = data.data[index].images.original_mp4.width;
                    height = ordenaMedida(height);
                    width = ordenaMedida(width);
                    let video = document.createElement('video');
                    video.src=videoUrl;
                    video.height=height;
                    video.width=width;
                    video.autoplay=true;
                    video.load();
                    cont.appendChild(video);
                }
            }
    const ordenaMedida = (dato) =>{
        datoN = dato/2;
        if(datoN < 170)
            datoN =170;
        return datoN;
        }
    const eliminaNodos = (parent) =>{
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
            }
        }
    prevFetch(0,15);
}
document.addEventListener('DOMContentLoaded',main);