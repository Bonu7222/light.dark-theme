let isDark = false;

let btn = document.getElementById("myBtn");

let container = document.querySelector(".container");

btn.addEventListener("click", function () 
{
  if (isDark == false) 
  {
    container.classList.remove("light");
    container.classList.add("dark");
    btn.textContent = "Light Theme";
    isDark = true;
  } 
  
  else 
  {
    container.classList.remove("dark");
    container.classList.add("light");
    btn.textContent = "Dark Theme";
    isDark = false;
  }
});
