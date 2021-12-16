let number = 2;
let test = "Muuttujan number arvo + 6 on " + (number + 6);

let test2 = `
    Muuttujan number 
    arvo + 6 on ${ number + 6 }`;

//document.write("Tästä alkaa testitulostus:")
//document.write(test);
//document.write(test2);
//let cookie = document.cookie;
//let loadCount = 0;

// Evästeiden käsittely (Kopioitu ja muokattu W3Schoolista)
function setCookie(name, value) {
    document.cookie = name + "=" + value + ";path=/";
  }
  
  function getCookie(name) {
    // Lisää nimen perään =-merkki
    let cookieName = name + "=";
    // Pilkotaan merkkijono "loadCount=1; test=1; username=meija" arrayhyn puolipisteiden kohdalat -> cookieArray[0] loadCount=1
    let cookieArray = document.cookie.split(';');
    // Loopataan array läpi
    for(let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }
      // Tsekataan löytyykö annetulla nimellä evästettä
      if (cookie.indexOf(cookieName) == 0) {
          // Palautetaan evästeen arvo
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
      // Haetaan loadCount-evästeen arvo
    let loadCount = getCookie("loadCount");
    if (loadCount != "") {
        // Arvo löytyi 
        // Kasvatetaan arvoa
        loadCount++;
    } else {
        // Arvoa ei löytynyt
        // Asetetaan arvoksi 1
        loadCount = 1;
    }
    // Päivitä arvo evästeeseen
    setCookie("loadCount", loadCount);       
    return loadCount;
  }
  let loadCount = checkCookie();
  // Näytetään latausmäärä sivulla
  document.write("Sivu ladattu " + loadCount + " kertaa");