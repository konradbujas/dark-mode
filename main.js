let isDark = false ;
const switchModes = document.querySelector('.mode--js');
switchModes.addEventListener('click', () => {
    if (isDark) {
        
        document.documentElement.style.setProperty('--background-color','#fefefe');
        document.documentElement.style.setProperty('--text-color','#333333');
        isDark = false;
    } else {
        document.documentElement.style.setProperty('--background-color','#37383b');
        document.documentElement.style.setProperty('--text-color','#8f8a8a');
        isDark = true;
    }
})