setInterval(function () {
    let child = Array.from(document.getElementsByClassName("box"));
    let element = child.pop();
    child.unshift(element);
    document.getElementById("firstRow").innerHTML = "";
    document.getElementById("thirdRow").innerHTML = "";
    document.getElementById("secondRow").innerHTML = "";
    for (let i = 0; i < child.length; i++) {
        if (i == 0) {
            document.getElementById("firstRow").append(child[i]);
        } else if (i == child.length - 1) {
            document.getElementById("thirdRow").append(child[i]);
        } else {
             document.getElementById("secondRow").append(child[i]);
        }

    }
}, 1500);