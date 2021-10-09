
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

async function login() {
    
    if (getCookie('address') == ""){

        Moralis.authenticate().then(function (user) {
            console.log(user.get('ethAddress'))
            const d = new Date();
            d.setTime(d.getTime() + (24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = 'address' + "=" + user.get('ethAddress') + ";" + expires + ";path=/";
            return 
        })
    }
    else{
        console.log('address:')
        console.log(getCookie('address'))
    }
}

document.getElementById("login_button").onclick = login;