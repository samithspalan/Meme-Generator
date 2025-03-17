let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
   console.log( fetch("https://meme-api.com/gimme/wholesomememes"))
})