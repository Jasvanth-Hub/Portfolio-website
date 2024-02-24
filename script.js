	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }
        var submitButton = document.getElementById('submitButton');

        submitButton.onclick = () =>{
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        if (name.trim() === '' && email.trim() === '' && message.trim() === '') {
            alert('Please fill in all fields');
            return false;
        }
        if (name.trim() === '') {
            alert('Please enter the name');
            return false;
        }
        if (name.trim().length < 3) {
            alert('Name should be at least 3 characters');
            return false;
        }
        if (email.trim() === '') {
            alert('Please enter the email Id');
            return false;
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        if (message.trim() === '') {
            alert('Please enter the message');
            return false;
        }
        // Basic email pattern matching

        if (message.trim().length < 15) {
            alert('message should be atleast 15 characters');
            return false;
        }

        // Form is valid, you can submit it or perform additional actions
        alert('🟢 Message sent successfully! ');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }