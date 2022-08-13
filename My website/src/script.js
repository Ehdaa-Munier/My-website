
<script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js'></script>
<!-- jQuery -->
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>
    $(document).ready(function(){ 
     
        $(".primaryContained").on('click', function(){
        $(".comment").addClass("commentClicked");
      });//end click
      $("textarea").on('keyup.enter', function(){
        $(".comment").addClass("commentClicked");
      });//end keyup
      });//End Function
     
    new Vue({
        el: "#app",
        data:{
           title: 'Add a comment',
          newItem: '',
          item: [],
        },
        methods:{
          addItem  (){
          this.item.push(this.newItem);
            this.newItem = "";
          }
      
     
   let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
      }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 