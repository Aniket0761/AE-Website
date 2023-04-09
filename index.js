// const slider = document.querySelector('.slider');

// let slideIndex = 15;
// let forward = true;
// let slideCheck = true;
// showSlides();

// function showSlides() {
//     document.querySelector(".background-img").style.backgroundSize = document.querySelector(".background-img").width + "px " + document.querySelector(".background-img").height + "px";
//     document.querySelector(".foreground-img").style.backgroundSize = document.querySelector(".background-img").width + "px " + document.querySelector(".background-img").height + "px";
//     let i;
//     let slides = document.querySelector(".foreground-img");
//     slides.style.width = slideIndex + "%";
//     slider.value = slideIndex;
//     if (slideCheck) {
//         if (slideIndex <=70 && forward === true){
//             slideIndex++;
//             if (slideIndex == 70) {
//                 forward = false;
//             }
//             setTimeout(showSlides, 10); 
//         } else if(slideIndex >10 && forward === false ){
//             slideIndex--;
//             setTimeout(showSlides, 10);
//         }   
//     }
// //   else{
// //     forward = false;
// //     setTimeout(showSlides, 10);
// //   }
// }

// slider.addEventListener('input', handleChange);


function handleChange(e) {
    slideCheck = false;
    document.querySelector(".foreground-img").style.width = slider.value + "%";
    console.log(document.querySelector(".background-img").width);
    document.querySelector(".background-img").style.backgroundSize = document.querySelector(".background-img").width + "px " + document.querySelector(".background-img").height + "px";
    document.querySelector(".foreground-img").style.backgroundSize = document.querySelector(".background-img").width + "px " + document.querySelector(".background-img").height + "px";

}

document.querySelectorAll('#products .container div').forEach(function(element){
    element.addEventListener("mouseover", (event)=> {
        console.log(element);
    });
});

let categories = ['BASIC', 'ROUND','DESIGNER','BULB/STANDING'];
let categoriesHTML = document.querySelector("#products .container");
for (let index = 0; index < categories.length; index++) {
    const element = categories[index];
    categoriesHTML.innerHTML += '<div class="card pink add-animation"><img src="https://st.depositphotos.com/1085342/2104/i/450/depositphotos_21043079-stock-photo-cool-five-years-old-boy.jpg" alt=""><button type="button" class="btn btn-dark my-auto btn-lg btn-text">' + element + '</button></div>';
}
// console.log(categoriesHTML);

// document.querySelector("#products .container").innerHTML = categoriesHTML;

// console.log(document.querySelector(".background-img").width);
// document.querySelector(".foreground-img").style.backgroundSize = document.querySelector(".background-img").width + "px" + document.querySelector(".background-img").height + "px" ;

$(".slider").on("input change", function(event) {
	var element = $(this).parents("div.container-fluid");
	var pos = event.target.value;
	
	element.find(".after").css({width: pos + "%"});
	element.find(".slider-button").css({left: "calc(" + pos + "% - 18px)"});
});