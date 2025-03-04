const btns = document.querySelectorAll('.plus-btn');

btns.forEach(e => {
    e.onclick = function () {
        if (this.src.includes("assets/images/icon-plus.svg")) {
            this.src = "assets/images/icon-minus.svg";
        } else {
            this.src = "assets/images/icon-plus.svg";
        }
        
        let nxtSip = this.nextElementSibling;
        nxtSip.classList.toggle("active");
    };
});

// const btns = document.querySelectorAll('.plus-btn');
// btns.forEach(e => {
//     e.onclick = function () {
//         let nxtSip = document.querySelector('this + p')
//         // if (nxtSip == null ) {
//         //     nxtSip = this.closest(".a");
//         // }
//         if (this.src.endsWith("icon-plus.svg")) {
//             this.src = "assets/images/icon-minus.svg";
//         } else {
//             this.src = "assets/images/icon-plus.svg";
//         }
        
//         nxtSip.classList.toggle("active");
//         console.log(this);
//     };
// });


