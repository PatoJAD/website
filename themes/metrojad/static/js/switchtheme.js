
function changeTheme(){
  console.log(document.getElementById("theme").checked);
  if (document.getElementById("theme").checked) {
    document.documentElement.style.setProperty('--background', 'rgba(255,255,255,0.6)');
    document.documentElement.style.setProperty('--textcolor', '#000');
  }else{
    document.documentElement.style.setProperty('--background', 'rgba(0,0,0,0.6)');
    document.documentElement.style.setProperty('--textcolor', '#FFF');
  }
}
