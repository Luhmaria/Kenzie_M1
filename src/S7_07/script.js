document.addEventListener("click", (event) => {
    const space_lamp = document.getElementById("lamp");
    const id = event.target.id;
    
    if (id == space_lamp.id) {
        space_lamp.classList.toggle("on")
    }
    });
    

    // if (space_lamp.classList.contains("off")) {
    //     //     space_lamp.classList.add("on");
    //     //     space_lamp.classList.remove("off");
    //     //   } else {
    //     //     space_lamp.classList.add("off");
    //     //     space_lamp.classList.remove("on");
    //     //   }