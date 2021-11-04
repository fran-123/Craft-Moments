const $ = id => document.getElementById(id)

window.addEventListener("load" , () =>{

    $("openBuguer").addEventListener("click", () =>{
        $("openMenuBurguer").classList.add("openBurguerM")
        $("backgroundMenu").classList.add("transparentMenuBurguer")
    })

    $("closeMenuBurguer").addEventListener("click", () =>{
        $("openMenuBurguer").classList.remove("openBurguerM")
        $("backgroundMenu").classList.remove("transparentMenuBurguer")
        $("openMenuBurguer").style.transition ="transform .6s"
    })

})
