const btns = document.querySelectorAll('.plus-btn');
// const newBtn = document.getElementById('soma');
// const title = document.querySelector('.title');

// title.addEventListener('click', () => {
//     console.log('What you talking about!')
// })

// newBtn.addEventListener('click', () => {
//     console.log('What you talking about!')
// })

// btn.addEventListener('click', () => {
//     console.log("Yess!")
// })


// btns.forEach(element => {
//     element.addEventListener('click', () => {
//     console.log(element.nextElementSibling)
//   })
// });


// btns.forEach(element => {
//     element.addEventListener('click', () => {
//         if (element.nextElementSibling) {
//             console.log(element.nextElementSibling);
//         } else {
//             console.log("No next element sibling.");
//         }
//     });
// });

// btns.forEach( e => {
//     e.onclick = function () {
//         if (this.src.includes("assets/images/icon-plus.svg")) {
//             this.src = "assets/images/icon-minus.svg";
//             console.log("Yes")
//         }else {
//             this.src == "assets/images/icon-plus.svg";
//             console.log("No")
//         }

//         let nxtSip = this.nextElementSibling;

//         nxtSip.classList.toggle("active")
//         console.log(this)
//     }
// }

// )

btns.forEach(e => {
    e.onclick = function () {
        if (this.src.includes("assets/images/icon-plus.svg")) {
            this.src = "assets/images/icon-minus.svg";
            console.log("Yes");
        } else {
            this.src = "assets/images/icon-plus.svg";
            console.log("No");
        }
        
        let nxtSip = this.nextElementSibling;
        nxtSip.classList.toggle("active");
        console.log(this);
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


