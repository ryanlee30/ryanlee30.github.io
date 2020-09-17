let input = document.getElementById('console-input');
let cons = document.getElementById('console');

input.addEventListener("keydown", function(e) {
    checkInput(e);
});

cons.addEventListener("mousedown", function(e) {
    activateConsole(e);
})

function checkInput(e) {
    if (e.keyCode === 13) {
        switch(input.value) {
            case '':
            break;
            case 'help':
            window.alert('Valid Commands:\nresume - View my Resume\ngithub - Open my GitHub page\nlinkedin - Open my LinkedIn page');
            input.value = "";
            break;
            case 'Help':
            window.alert('Valid Commands:\nresume - View my Resume\ngithub - Open my GitHub page\nlinkedin - Open my LinkedIn page');
            input.value = "";
            break;
            case 'github':
            window.open('https://github.com/ryanlee30/');
            input.value = "";
            break;
            case 'Github':
            window.open('https://github.com/ryanlee30/');
            input.value = "";
            break;
            case 'resume':
            window.open('/files/resume.pdf', 'pdf');
            input.value = "";
            break;
            case 'Resume':
            window.open('/files/resume.pdf', 'pdf');
            input.value = "";
            break;
            case 'linkedin':
            window.open('https://www.linkedin.com/in/ryanlee30/');
            input.value = "";
            break;
            case 'Linkedin':
            window.open('https://www.linkedin.com/in/ryanlee30/');
            input.value = "";
            break;
            default:
            window.alert('Wrong command!\nType "help" for valid commands');
            input.value = "";
        }
    }
}

function activateConsole(e) {
    setTimeout(function() {
        input.readOnly = false;
        input.focus();
    }, 10);
}
