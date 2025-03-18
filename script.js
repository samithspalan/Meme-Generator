let btn=document.querySelector(".generate-button");
btn.addEventListener("click",()=>{
   fetch("https://meme-api.com/gimme/wholesomememes")
   .then((res)=>res.json())
   .then((data)=>{
      const{title,url,author}=data;
      console.log(title,url,author)
   })
})