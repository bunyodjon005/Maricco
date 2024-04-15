function toggleMenu() {
    let elements=document.getElementById('opens')
    elements.classList.toggle('open')
  }
  function alerts(){
    alert("Jo'sh og'a qachon to'y 😅🤣🤣 to'yga etin");
  }

  let boxes=document.querySelectorAll(".page_title");
let checkBox=()=>{
    let trigBottom=(window.innerHeight /2)*4;

    boxes.forEach((box)=>{
        let boxTop = box.getBoundingClientRect().top;
        if(boxTop < trigBottom){
box.classList.add("show")
        }
        else box.classList.remove("show");
    });
};
window.addEventListener("scroll",checkBox )
checkBox();