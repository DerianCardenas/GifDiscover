document.getElementById('search').onclick = () =>{
var busq = document.getElementById('searchbar').value;
document.getElementById('cont').innerHTML="";
document.getElementById('searchbar').value="";
console.log(busq);
var url = "https://api.giphy.com/v1/gifs/search?api_key=hgIaMbQMcikORBCiFhUw5LKUMIiWjOat&q="+busq+"&limit=8";
fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        let gif ='';
        console.log(data);
        for(let index = 0; index < data.data.length; index++){
            let videoUrl = data.data[index].images.original.mp4;
            let height = data.data[index].images.original_mp4.height-100;
            let width = data.data[index].images.original_mp4.width-100;
            gif+="<video autoplay='true' loop='true' src='"+videoUrl+" height='"+height+"width='"+width+"'></video>"
            document.getElementById('cont').innerHTML=gif;
        }
    }
}
/*var div = document.getElementById('cont');
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }*/
        /*var api_key = "hgIaMbQMcikORBCiFhUw5LKUMIiWjOat";*/
