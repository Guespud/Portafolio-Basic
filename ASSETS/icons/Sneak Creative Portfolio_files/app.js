//NavBar Toggle


const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-elements");
    const x = document.querySelector(".fa");

    burger.addEventListener("click", () =>{
        nav.classList.toggle("nav-active");
        
    });

    x.addEventListener("click", () =>{
        
        if (x.classList.contains("fa-bars")) {
            x.classList.remove("fa-bars");
            x.classList.add("fa-times");
        } else {
            x.classList.remove("fa-times");
            x.classList.add("fa-bars");
        }
    });
}
navSlide();





