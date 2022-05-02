// const setTheme = (theme) => (document.documentElement.className = theme);
const setTheme = (theme) => {
  document.documentElement.className = theme;
  localStorage.setItem("theme", theme);
  addCheck(theme);
};
const getTheme = () => {
  const theme = localStorage.getItem("theme");
  theme && setTheme(theme);
};
const addCheck = (theme) => {
  var element = document.getElementById(theme);
  if(element!=null){
    $("#red, #orange, #blue, #green").removeClass("fas");
    $("#red, #orange, #blue, #green").removeClass("fa-check-circle");
    element.classList.add("fas");
    element.classList.add("fa-check-circle");
  }
}

getTheme();
// document.addEventListener("DOMContentLoaded", function(event) {
//   // Your code to run since DOM is loaded and ready
//    $('.dismiss, .overlay').on('click', function() {
   
//           $('.sidebar').removeClass('active');
//           $('.overlay').removeClass('active');
//       });
//        $('.open-menu').on('click', function(e) {
//         e.preventDefault();
//           $('.sidebar').addClass('active');
//           $('.overlay').addClass('active');
//           // close opened sub-menus
//           $('.collapse.show').toggleClass('show');
//           $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//       });
//   });

  document.addEventListener("DOMContentLoaded", function(event) {
    // Your code to run since DOM is loaded and ready
    const menu = document.getElementsByClassName('open-menu');
  const dismiss = document.getElementsByClassName('dismiss');
  const sidebar = document.getElementsByClassName('sidebar');
  const overlay = document.getElementsByClassName('overlay');
   dismiss[0].addEventListener('click',()=>{
    sidebar[0].classList.remove('active');
    overlay[0].classList.remove('active');
  })
  overlay[0].addEventListener('click',()=>{
    sidebar[0].classList.remove('active');
    overlay[0].classList.remove('active');
  })
  menu[0].addEventListener('click',()=>{
    sidebar[0].classList.add('active');
    overlay[0].classList.add('active');
  })
})

