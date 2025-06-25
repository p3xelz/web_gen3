// สร้างฟังก์ชันสำหรับ Gallery ชุดแรก
function setupGallery1() {
  let scrollContainer = document.querySelector(".column_product");
  let btn_back = document.getElementById("btn_back");
  let btn_next = document.getElementById("btn_next");

  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });

  btn_back.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 300;
  });
  btn_next.addEventListener("click", () => {
    scrollContainer.scrollLeft += 300;
  });

  const gallery = document.querySelectorAll(".column_product .container_image"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector(".preview-img-main"),
    closeIcon = previewBox.querySelector(".icon_preview"),
    currentImg = previewBox.querySelector(".current-img"),
    totalImg = previewBox.querySelector(".total-img"),
    shadow = document.querySelector(".shadow_background");

  for (let i = 0; i < gallery.length; i++) {
    totalImg.textContent = gallery.length;
    let newIndex = i;
    let clickImgIndex;
    gallery[i].onclick = () => {
      clickImgIndex = newIndex;

      function preview() {
        currentImg.textContent = newIndex + 1;
        let selectedImgUrl = gallery[newIndex].querySelector("img").src;
        previewImg.src = selectedImgUrl;
      }

      const prevBtn = document.querySelector(".prev");
      const nextBtn = document.querySelector(".next");

      if (newIndex == 0) prevBtn.style.display = "none";
      if (newIndex >= gallery.length - 1) nextBtn.style.display = "none";

      prevBtn.onclick = () => {
        newIndex--;
        preview();
        nextBtn.style.display = "block";
        if (newIndex == 0) prevBtn.style.display = "none";
      };

      nextBtn.onclick = () => {
        newIndex++;
        preview();
        prevBtn.style.display = "block";
        if (newIndex >= gallery.length - 1) nextBtn.style.display = "none";
      };

      preview();
      previewBox.classList.add("show");
      shadow.style.display = "block";

      closeIcon.onclick = () => {
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
      };
    };
  }
}

// ฟังก์ชันสำหรับ Gallery ชุดที่ 2
function setupGallery2() {
  let scrollContainer2 = document.querySelector(".column_product2");
  let btn_back2 = document.getElementById("btn_back2");
  let btn_next2 = document.getElementById("btn_next2");

  scrollContainer2.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer2.scrollLeft += evt.deltaY;
  });

  btn_back2.addEventListener("click", () => {
    scrollContainer2.scrollLeft -= 900;
  });
  btn_next2.addEventListener("click", () => {
    scrollContainer2.scrollLeft += 900;
  });

  const gallery2 = document.querySelectorAll(".column_product2 .container_image2"),
    previewBox2 = document.querySelector(".preview-box2"),
    previewImg2 = previewBox2.querySelector(".preview-img-main2"),
    closeIcon2 = previewBox2.querySelector(".icon_preview2"),
    currentImg2 = previewBox2.querySelector(".current-img2"),
    totalImg2 = previewBox2.querySelector(".total-img2"),
    shadow2 = document.querySelector(".shadow_background2");

  for (let i = 0; i < gallery2.length; i++) {
    totalImg2.textContent = gallery2.length;
    let newIndex = i;
    let clickImgIndex;
    gallery2[i].onclick = () => {
      clickImgIndex = newIndex;

      function preview() {
        currentImg2.textContent = newIndex + 1;
        let selectedImgUrl = gallery2[newIndex].querySelector("img").src;
        previewImg2.src = selectedImgUrl;
      }

      const prevBtn = document.querySelector(".prev2");
      const nextBtn = document.querySelector(".next2");

      if (newIndex == 0) prevBtn.style.display = "none";
      if (newIndex >= gallery2.length - 1) nextBtn.style.display = "none";

      prevBtn.onclick = () => {
        newIndex--;
        preview();
        nextBtn.style.display = "block";
        if (newIndex == 0) prevBtn.style.display = "none";
      };

      nextBtn.onclick = () => {
        newIndex++;
        preview();
        prevBtn.style.display = "block";
        if (newIndex >= gallery2.length - 1) nextBtn.style.display = "none";
      };

      preview();
      previewBox2.classList.add("show2");
      shadow2.style.display = "block";

      closeIcon2.onclick = () => {
        newIndex = clickImgIndex;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        previewBox2.classList.remove("show2");
        shadow2.style.display = "none";
      };
    };
  }
}

// ✅ โหลดฟังก์ชันทั้ง 2 เมื่อหน้าเว็บพร้อม
window.addEventListener("load", () => {
  setupGallery1();
  setupGallery2();
});
