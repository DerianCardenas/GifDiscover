var url = "https://api.giphy.com/v1/gifs/trending?api_key=hgIaMbQMcikORBCiFhUw5LKUMIiWjOat&q=keyword&offset=0&limit=30";
var api_key = "hgIaMbQMcikORBCiFhUw5LKUMIiWjOat";
fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
    const mostrarData = (data) => {
        console.log(data);
        let gif ='';
        for(var index = 0; index < data.data.length; index++){
            let videoUrl = data.data[index].images.original.mp4;
            let height = data.data[index].images.original_mp4.height;
            let width = data.data[index].images.original_mp4.width;
            gif+="<video autoplay='true' loop='true' src='"+videoUrl+" height='"+height+"width='"+width+"'></video>"
            document.getElementById('cont').innerHTML=gif;
        }
    }