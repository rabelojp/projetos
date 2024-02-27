function toggleMode() {
    const html = document.documentElement;
    const profileImg = document.querySelector('#profile img')
   

     if(html.classList.contains('light')) {
        html.classList.remove('light');

        profileImg.src = 'Assets/avatar_moon.png'
    } else {
        html.classList.add('light');

        profileImg.src = 'Assets/avatar_light.png'
    }
}
