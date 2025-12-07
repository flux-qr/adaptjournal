
function scrollToPricing(){
  document.getElementById("pricing").scrollIntoView({
    behavior: "smooth"
  });
}

function openWhatsApp(){
  const message = encodeURIComponent(
    "Hi, I want to order ADAPT Journal."
  );
  window.open(
    "https://wa.me/919754562626?text=" + message,
    "_blank"
  );
}

function openPreview(img){
  document.getElementById("previewImg").src = img.src;
  document.getElementById("preview").style.display = "block";
}

function closePreview(){
  document.getElementById("preview").style.display = "none";
}
