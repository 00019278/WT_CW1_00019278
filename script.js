let tooltip = false;
let boxs = document.querySelectorAll('.profile_click')



function menuClick() {
    tooltip = !tooltip

    boxs.forEach(box => {
        console.log(box);
        if(tooltip == true) {
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }
    })
}



function handler() {
    if(localStorage.getItem('user')) {
        console.log(localStorage.getItem('user'));
    } else if(window.location.pathname != '/login.html') {
        window.location.pathname = './login.html'
    }
}

handler()


function logIn() {
    localStorage.setItem('user', 'true');
    window.location.pathname = './index.html'
}

function logOut() {
    localStorage.clear();
    handler()
}