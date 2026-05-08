const stars = document.querySelectorAll(".star");

const ratingCount = document.getElementById("rating-count");

let currentRating = 0;

stars.forEach((star, index) =>{
    star.addEventListener("click", ()=>{
        currentRating = Number(star.dataset.value);
        ratingCount.innerText = currentRating;

        highlightStars(currentRating);
    });
    star.addEventListener("mouseover",()=>{
        highlightStars(Number(star.dataset.value));
    })
    star.addEventListener("mouseleave",()=>{
        highlightStars(currentRating);
    })

})

function highlightStars(rating){
    stars.forEach((star)=>{
        if(Number(star.dataset.value)<= rating){
           star.classList.add("active");
        }else{
            star.classList.remove("active");
        }
    })
}