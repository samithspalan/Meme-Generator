let btn=document.querySelector(".generate-button");
let title1=document.querySelector(".meme-title");
let img=document.querySelector(".meme-image");
let aut=document.querySelector(".author");

btn.addEventListener("click",()=>{
   fetch("https://meme-api.com/gimme/wholesomememes")
   .then((res)=>res.json())
   .then((data)=>{
      const{title,url,author}=data;
      title1.innerText=title
      img.src=url;
      title1.style.color="white";
      aut.innerText=author;

   })
})