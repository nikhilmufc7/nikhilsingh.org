function whenReady(){
  
  console.log("ready")
  replace(document.getElementById("actual1"), document.getElementById("placeholder1"))
  replace(document.getElementById("actual2"), document.getElementById("placeholder2"))
  replace(document.getElementById("actual3"), document.getElementById("placeholder3"))


  function replace(actual, placeholder){
    actual.addEventListener("load", function(){
      placeholder.style.display="none";
    }, false)
    actual.src="https://ghchart.rshah.org/409ba5/nikhilmufc7.svg"
  }

  function toggleHeart(){
    var heart = document.getElementById("heart")
    toggle(heart, "fa-heart")
    toggle(heart, "fa-heart-o")
  }

  setInterval(function(){
    toggleHeart()
  }, 860);
}