if (localStorage.itscreated) {
    //NO DATA
  } else {
    localStorage.setItem("itscreated", 0);
}

if (localStorage.itscreated == 0) {
    let getName = prompt("To get started, Enter a player name:", defaultPlayerName)

    if (getName == null || getName == "") {
        html_content.innerHTML = '<h1>Fatal Error: Create your player account cancled.</h1>'
    } else {
        alert("Subscess!");
        localStorage.itscreated = 1;
    }
}