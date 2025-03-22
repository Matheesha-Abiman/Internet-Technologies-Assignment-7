let child = Array.from(document.querySelectorAll(".human-div"));
setInterval(function () {
  console.log("Hello");
  document.getElementById("inside").innerHTML="";
  let element = child.pop();
  console.log(element);
  child.unshift(element);
  for (let i = 0; i < child.length; i++) {
  document.getElementById("inside").append(child[i]);
  }
}, 1500);
