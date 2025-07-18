
filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("container_image");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add list_active class to the current button (highlight it)
var btnContainer = document.getElementById("menu_list");
var btns = btnContainer.getElementsByClassName("list_btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("list_active");
    current[0].className = current[0].className.replace(" list_active", "");
    this.className += " list_active";
  });
}

document.getElementById("Btn_other").addEventListener("click", function () {
    const content = document.querySelector(".content_container1");
    const buttonText = this.querySelector("p");

    // เช็คสถานะปัจจุบัน
    if (content.style.height === "100%" && content.style.overflow === "auto") {
        // กลับสู่สถานะเดิม
        content.style.height = "99vh";
        content.style.overflow = "hidden";
        buttonText.textContent = "View More";
    } else {
        // ขยายเต็ม
        content.style.height = "100%";
        content.style.overflow = "auto";
        buttonText.textContent = "Hide";
    }
});