const main = () =>{
    var offset = 0;
    var limit = 15;
    var url = `https://api.giphy.com/v1/gifs/trending?api_key=hgIaMbQMcikORBCiFhUw5LKUMIiWjOat&q=keyword&offset=${offset}&limit=${limit}`;
    var api_key = "hgIaMbQMcikORBCiFhUw5LKUMIiWjOat";
    let inicio = document.getElementById('inicio');
    inicio.onclick=() =>{
        conn();
    }
    const conn = () =>{
         fetch(url).then(response => response.json()).then(data => mostrarData(data))
    }
    const mostrarData = (data) => {
            let gif ='';
                console.log(data);
            for(var index = 0; index < data.data.length; index++){
                let videoUrl = data.data[index].images.original.mp4;
                let height = data.data[index].images.original.height;
                let width = data.data[index].images.original.width;
                height = height / 2;
                width = width / 2;
                console.log("Altura: "+height+" Ancho: "+width);
                gif+=`<video autoplay='true' loop='true' src= ${videoUrl} height=${height}px width= ${width}px></video>`
                document.getElementById('cont').innerHTML=gif;
            }
    }
    document.getElementById('search').onclick = () =>{
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
                    height=height/2;
                    width=width/2;
                    gif+=`<video autoplay='true' loop='true' src= ${videoUrl} height=${height}px width= ${width}px></video>`
                    document.getElementById('cont').innerHTML=gif;
                }
            }
        }
    }
    conn();
}
document.addEventListener('DOMContentLoaded',main);