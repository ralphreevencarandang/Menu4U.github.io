function removeActiveClass() {
    const buttons = document.querySelectorAll('.btn-group button');
    buttons.forEach(button => {
      button.classList.remove('active');
    });
  }

  // Function to add the 'active' class to the clicked button
  function handleButtonClick(event) {
    removeActiveClass();
    event.target.classList.add('active');
  }

  // Add event listeners to all buttons
  const buttons = document.querySelectorAll('.btn-group button');
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });



  document.getElementById('btn-hot').addEventListener('click', function() {
    document.getElementById('section-hot').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('btn-cold').addEventListener('click', function() {
    document.getElementById('section-cold').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('btn-tea').addEventListener('click', function() {
    document.getElementById('section-tea').scrollIntoView({ behavior: 'smooth' });
  });
  document.getElementById('btn-dessert').addEventListener('click', function() {
    document.getElementById('section-dessert').scrollIntoView({ behavior: 'smooth' });
  });



  

  // Get the button
  let mybutton = document.getElementById("scrollUpBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }


  document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
      fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
  });
