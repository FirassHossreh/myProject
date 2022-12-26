document.addEventListener("click",function(e){
  if(e.target.classList.contains("a")){
    const src=  e.target.getAttribute("src");
    document.querySelector(".model-img").src=src;  
    const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'))
    myModal.show();
  }
})