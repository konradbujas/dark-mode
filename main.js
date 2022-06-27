// let isDark = false ;
// const switchModes = document.querySelector('.mode--js');
// switchModes.addEventListener('click', () => {
//     if (isDark) {
        
//         document.documentElement.style.setProperty('--background-color','#fefefe');
//         document.documentElement.style.setProperty('--text-color','#333333');
//         isDark = false;
//     } else {
//         document.documentElement.style.setProperty('--background-color','#37383b');
//         document.documentElement.style.setProperty('--text-color','#8f8a8a');
//         isDark = true;
//     }
// })

// let isDark = false ;
// const switchModes = document.querySelector('.mode--js');
// switchModes.addEventListener('click', () => {
//     if (isDark) {
//         document.querySelector('body').style.backgroundColor = '#000';
//         document.querySelector('body').style.color = '#fff';
//         isDark = false;
//     } else {
//         document.querySelector('body').style.backgroundColor = '#fff';
//         document.querySelector('body').style.color = '#000';
//         isDark = true;
//     }
// })


const switchButton = document.querySelector(".button_mode");
console.log(switchButton);


// let theme = localStorage.getItem("theme") || "light";
if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
} else {
    theme = "light";
}


switchButton.addEventListener("click", () => {
    // document.querySelector("body"). classList.toggle("dark");
    if (theme === "dark") {
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");
        theme = "light";
    } else {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
        theme = "dark";
    }

    localStorage.setItem("theme", theme);
});

// let theme = localStorage.getItem("theme");
console.log(theme);

if (theme === "dark") {
    document.querySelector("body").classList.add("dark");
}