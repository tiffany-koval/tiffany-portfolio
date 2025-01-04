import _ from 'lodash';

if (module.hot) {
    module.hot.accept();
}

    // Reference to the SVG container
    const starLogo = document.querySelector('.star-logo');
    const logoContainer = document.querySelector('.logo-container');
    const starSVG = document.querySelector('.star');
    let lastScrollY = 0; // Tracks the last scroll position
    let rotation = 0; // Tracks the current rotation of the SVG
    let logoScroll = false; // Set logoScroll flag false
    let isClicking = false; // Set isClicking flag false

    // Create and append the circle dynamically
    const circle = document.createElement('div');
    circle.classList.add('circle');
    logoContainer.appendChild(circle);

    //Dynamically calculate circle size 
    const padding = parseFloat(getComputedStyle(logoContainer).paddingLeft); // .75rem in px
    const starSize = parseFloat(starSVG.getAttribute('width')); // SVG size
    const circleSize = starSize + 2 * padding; // Total size
  
    // Hover In: Expand the circle
    logoContainer.addEventListener('mouseenter', () => {
      gsap.to(circle, {
        width: circleSize, // Circle's final size
        height: circleSize,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  
    // Hover Out: Shrink the circle
    logoContainer.addEventListener('mouseleave', () => {
      gsap.to(circle, {
        width: 0,
        height: 0,
        duration: 0.3,
        ease: 'power2.in',
      });
    });

    // Function to handle scrolling
    function onScroll() {

        // Throttle onScroll event
        if (!logoScroll) { 

            window.requestAnimationFrame(() => {
            // Get current scroll position
            const currentScrollY = window.scrollY; 

            // Calculate scroll delta
            const scrollDelta = currentScrollY - lastScrollY;

            // Update rotation based on scroll direction and speed
            rotation += scrollDelta * 0.2; // Adjust multiplier to control sensitivity

            // Apply rotation to the SVG
            starLogo.style.transform = `rotate(${rotation}deg)`;

            // Update the last scroll position
            lastScrollY = currentScrollY;
            //Reset logoScroll flag false
            logoScroll = false;
            })
        logoScroll = true;
        }
    }

    function onClick() {
        if (isClicking) return; // Prevent multiple rapid clicks
        isClicking = true;

        const currentScrollY = window.scrollY;
        // Push the user back to the top if they've clicked the logo and scrolled
        if (currentScrollY > 0) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        setTimeout(() => {
            isClicking = false; //Re-enable click after a short delay
        }, 500);
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', onScroll), { passive: true };
    logoContainer.addEventListener('click', onClick);

// // Function to split text into characters and wrap them in spans
// function splitText(element) {
//     if (!element || !element.textContent) return; // Ensure element and text exist
//     const text = element.textContent;
//     element.innerHTML = ''; // Clear original text
//     text.split('').forEach((char) => {
//       const span = document.createElement('span');
//       span.textContent = char;
//       element.appendChild(span);
//     });
//   }
  
//   // Function to handle the hover animation on the .about div
//   function handleAboutHover() {
//     const aboutDiv = document.querySelector('.about');
//     const textSpans = aboutDiv.querySelectorAll('.text span');
//     const newTextSpans = aboutDiv.querySelectorAll('.new-text span');
  
//     // Mouse enter (hover in)
//     aboutDiv.addEventListener('mouseenter', () => {
//       // Staggered animation for the original text
//       textSpans.forEach((span, index) => {
//         setTimeout(() => {
//           span.classList.add('active');
//         }, index * 50); // Stagger effect
//       });
  
//       // Create the circle and animate it
//       const circle = document.createElement('div');
//       circle.classList.add('about-circle');
//       aboutDiv.appendChild(circle);
  
//       // Dynamically calculate the circle size based on the .about div's width
//       const padding = parseFloat(getComputedStyle(aboutDiv).paddingLeft);
//       const circleSize = aboutDiv.offsetWidth + 2 * padding; // Circle size is based on .about width
  
//       // Animate the circle to its full size
//       circle.style.width = `${circleSize}px`;
//       circle.style.height = `${circleSize}px`;
  
//       // Fade in the new text after the original text animation
//       setTimeout(() => {
//         // Make the new text visible
//         aboutDiv.querySelector('.new-text').style.opacity = 1;
  
//         // Staggered animation for the new text
//         newTextSpans.forEach((span, index) => {
//           setTimeout(() => {
//             span.classList.add('active');
//           }, index * 50); // Stagger effect
//         });
//       }, textSpans.length * 50); // Start the new text animation after the original text animation
//     });
  
//     // Mouse leave (hover out)
//     aboutDiv.addEventListener('mouseleave', () => {
//       // Reverse text animation
//       textSpans.forEach((span, index) => {
//         setTimeout(() => {
//           span.classList.remove('active');
//         }, index * 50); // Reverse stagger effect
//       });
  
//       // Reverse new text animation
//       newTextSpans.forEach((span, index) => {
//         setTimeout(() => {
//           span.classList.remove('active');
//         }, index * 50); // Reverse stagger effect
//       });
  
//       // Fade out the new text
//       aboutDiv.querySelector('.new-text').style.opacity = 0;
  
//       // Shrink and remove the circle
//       const circle = aboutDiv.querySelector('.about-circle');
//       if (circle) {
//         circle.style.width = '0';
//         circle.style.height = '0';
  
//         // Remove the circle after the shrinking effect
//         setTimeout(() => {
//           circle.remove();
//         }, 300); // Matches the duration of the shrinking effect
//       }
//     });
//   }
  
//   // Initialize text splitting and hover animation
//   const textElement = document.querySelector('.text');
//   const newTextElement = document.querySelector('.new-text');
  
//   if (textElement && newTextElement) {
//     splitText(textElement);
//     splitText(newTextElement);
//     handleAboutHover();
//   } else {
//     console.warn('Missing .text or .new-text elements on the page.');
//   }

// Function to split text into characters and wrap them in spans
function splitText(element) {
  if (!element || !element.textContent) return; // Ensure element and text exist
  const text = element.textContent;
  element.innerHTML = ''; // Clear original text
  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    element.appendChild(span);
  });
}

// Function to handle hover animation on target elements
function handleHoverAnimation(targetSelector) {
  const targetDiv = document.querySelector(targetSelector);
  if (!targetDiv) {
    console.warn(`Target selector ${targetSelector} not found.`);
    return;
  }

  const textSpans = targetDiv.querySelectorAll('.text span');
  const newTextSpans = targetDiv.querySelectorAll('.new-text span');

  // Mouse enter (hover in)
  targetDiv.addEventListener('mouseenter', () => {
    console.log('Mouse entered:', targetSelector);

    // Staggered animation for the original text
    textSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('active');
      }, index * 50); // Stagger effect
    });

    // Create the circle and animate it
    const circle = document.createElement('div');
    circle.classList.add('circle'); // Shared class for styling
    circle.classList.add(`${targetSelector.replace('.', '')}-circle`); // Unique class
    targetDiv.appendChild(circle);

    // Dynamically calculate the circle size based on the target div's width
    const padding = parseFloat(getComputedStyle(targetDiv).paddingLeft);
    const circleSize = targetDiv.offsetWidth + 2 * padding; // Circle size based on div width

    // Animate the circle to its full size
    circle.style.width = `${circleSize}px`;
    circle.style.height = `${circleSize}px`;

    // Fade in the new text after the original text animation
    setTimeout(() => {
      // Make the new text visible
      targetDiv.querySelector('.new-text').style.opacity = 1;

      // Staggered animation for the new text
      newTextSpans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('active');
        }, index * 50); // Stagger effect
      });
    }, textSpans.length * 50); // Start the new text animation after the original text animation
  });


  // Mouse leave (hover out)
  targetDiv.addEventListener('mouseleave', () => {
    console.log('Mouse left:', targetSelector);

    // Reverse text animation
    textSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove('active');
      }, index * 50); // Reverse stagger effect
    });

    // Reverse new text animation
    newTextSpans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.remove('active');
      }, index * 50); // Reverse stagger effect
    });

    // Fade out the new text
    targetDiv.querySelector('.new-text').style.opacity = 0;

    // Shrink and remove the circle
    const circle = targetDiv.querySelector(`.${targetSelector.replace('.', '')}-circle`);
    if (circle) {
      circle.style.width = '0';
      circle.style.height = '0';

      // Remove the circle after the shrinking effect
      setTimeout(() => {
        circle.remove();
      }, 300); // Matches the duration of the shrinking effect
    }
  });
}

// Initialize text splitting and hover animations
const aboutElement = document.querySelector('.about');
const homeElement = document.querySelector('.home');

if (aboutElement) {
  splitText(aboutElement.querySelector('.text'));
  splitText(aboutElement.querySelector('.new-text'));
  handleHoverAnimation('.about');
} else {
  console.warn('Missing .about element on the page.');
}

if (homeElement) {
  splitText(homeElement.querySelector('.text'));
  splitText(homeElement.querySelector('.new-text'));
  handleHoverAnimation('.home');
} else {
  console.warn('Missing .home element on the page.');
}


  document.addEventListener('DOMContentLoaded', () => {
    console.log("index.js loaded successfully");
  
    // Check if we're on the Index/Project Pages (by URL)
    if (window.location.pathname !== '/about') {
      // This is the Index or Project Page
      const aboutLinkContainer = document.querySelector('.about-link');
      const aboutButton = document.querySelector('.about-link .about-button');
      
      console.log('aboutLinkContainer:', aboutLinkContainer);
      console.log('aboutButton:', aboutButton);
  
      if (aboutLinkContainer) {
        // Event listener for the about container (click anywhere inside it)
        aboutLinkContainer.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default anchor behavior
          const currentPageUrl = window.location.href; // Get current page URL
          sessionStorage.setItem('returnUrl', currentPageUrl); // Store in sessionStorage
          console.log('Return URL set to:', currentPageUrl); // Debugging
          
          // Now trigger the navigation to the About page
          window.location.href = '/about'; // Redirect to the About page
        });
      }
  
      if (aboutButton) {
        // Event listener for the about button (click specifically on the button)
        aboutButton.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default anchor behavior
          const currentPageUrl = window.location.href; // Get current page URL
          sessionStorage.setItem('returnUrl', currentPageUrl); // Store in sessionStorage
          console.log('Return URL set to:', currentPageUrl); // Debugging
          
          // Redirect to the About page
          window.location.href = '/about'; // Redirect to the About page
        });
      }
    } else {
      // This is the About page
      const aboutContentContainer = document.querySelector('.about-content');  // The container holding the Close button
      console.log('aboutContentContainer:', aboutContentContainer);
  
      if (aboutContentContainer) {
        // Event listener for the about-content container (click anywhere inside it)
        aboutContentContainer.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default anchor behavior
          
          const returnUrl = sessionStorage.getItem('returnUrl'); // Get the stored return URL
          console.log('Return URL retrieved:', returnUrl); // Debugging
          if (returnUrl) {
            window.location.href = returnUrl; // Redirect to the stored URL
          } else {
            window.location.href = '/'; // Default to home page if no return URL is found
          }
        });
      }
    }
  });
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
    // Select the parent container with class 'about'
    const aboutElements = document.querySelectorAll('.about');
  
    aboutElements.forEach(function(about) {
      // Check if the .close-button exists within the .about element
      if (about.querySelector('.close-button')) {
        about.style.backgroundColor = '#000'; // Change the background color
      }
    });

    const logoIntro = document.querySelector('.logo-container');
    const aboutIntro = document.querySelector('.about');
    const homeIntro = document.querySelector('.home');
    logoIntro.classList.add('visible'); // Add the class to trigger the animation
    aboutIntro.classList.add('visible'); // Add the class to trigger the animation
    homeIntro.classList.add('visible'); // Add the class to trigger the animation


  });



  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".locker__section");
    const options = { threshold: 0.5 };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const targetClass = entry.target.dataset.swap;
        const textElement = document.querySelector(`.text.${targetClass}`);
        const imgElement = entry.target.querySelector("img");
        const descriptionElement = textElement?.nextElementSibling;
  
        if (entry.isIntersecting) {
          // Make the corresponding text and image visible
          textElement?.classList.add("active");
          imgElement?.classList.add("visible");
           if (descriptionElement) descriptionElement.classList.add("active");
        } else {
          // Remove visibility when out of view
          textElement?.classList.remove("active");
          imgElement?.classList.remove("visible");
           if (descriptionElement) descriptionElement.classList.remove("active");
        }
      });
    }, options);
  
    sections.forEach((section) => observer.observe(section));
  });
  
  


// const container1 = document.getElementById('container1');
// const container2 = document.getElementById('container2');

// // Timing constants
// const pauseDuration = 6000; // Increased pause duration for longer stays in view (e.g., 4000ms)
// const transitionDuration = 1500; // Duration for the container sliding animation

// // Animation state
// let isContainer1Visible = true;

// function animateContainers() {
//   if (isContainer1Visible) {
//     // Start moving container 1 out of view and container 2 into view
//     container1.style.transition = `transform ${transitionDuration / 1000}s cubic-bezier(0.25, 0.05, 0.5, 1)`;
//     container2.style.transition = `transform ${transitionDuration / 1000}s cubic-bezier(0.25, 0.05, 0.5, 1)`;

//     container1.style.transform = 'translateX(100%)';  // Move container 1 out of view
//     container2.style.transform = 'translateX(0)';  // Bring container 2 into view

//     // Pause before reversing the animation
//     setTimeout(() => {
//       // Longer pause before switching containers
//       setTimeout(() => {
//         isContainer1Visible = false;
//         animateContainers();  // Transition to container 2
//       }, pauseDuration);
//     }, transitionDuration);
//   } else {
//     // Start moving container 2 out of view and container 1 into view
//     container1.style.transition = `transform ${transitionDuration / 1000}s cubic-bezier(0.25, 0.05, 0.5, 1)`;
//     container2.style.transition = `transform ${transitionDuration / 1000}s cubic-bezier(0.25, 0.05, 0.5, 1)`;

//     container1.style.transform = 'translateX(0)';  // Bring container 1 into view
//     container2.style.transform = 'translateX(-100%)';  // Move container 2 out of view

//     // Pause before restarting the animation
//     setTimeout(() => {
//       // Longer pause before switching containers
//       setTimeout(() => {
//         isContainer1Visible = true;
//         animateContainers();  // Transition to container 1
//       }, pauseDuration);
//     }, transitionDuration);
//   }
// }

// // Start the animation with an initial pause
// setTimeout(animateContainers, pauseDuration);

// // Gradient animation logic (running independently)
// document.querySelectorAll('.gradient-overlay, .gradient-overlay-2').forEach((gradient) => {
//   const parentWidth = gradient.parentElement.offsetWidth;
//   const gradientWidth = parentWidth * 0.35; // 35% of the parent width

//   const durationSlowToFast = 2000; // Slow-to-fast duration (left to right)
//   const durationSlow = 6000; // Continuous slow duration (right to left)
//   const shortPauseDuration = 1000; // Short pause when gradient reaches the right side
//   const longPauseDuration = 2500; // Longer pause when gradient reaches the left side after a full cycle

//   let isAnimatingToRight = true;
//   let isPaused = false;

//   const animateGradient = () => {
//     if (isPaused) return;

//     if (isAnimatingToRight) {
//       gradient.style.transition = `transform ${durationSlowToFast / 1000}s ease-in-out`;
//       gradient.style.transform = `translateX(${parentWidth - gradientWidth / 2}px)`;  // Move gradient to the right

//       setTimeout(() => {
//         setTimeout(() => {
//           isAnimatingToRight = false;
//           animateGradient();
//         }, shortPauseDuration);  // Short pause when gradient reaches the right side
//       }, durationSlowToFast);
//     } else {
//       gradient.style.transition = `transform ${durationSlow / 1000}s ease-in-out`;
//       gradient.style.transform = `translateX(-${gradientWidth / 2}px)`;  // Move gradient to the left

//       setTimeout(() => {
//         isAnimatingToRight = true;
//         isPaused = true;  // Pause after reaching left side
//         setTimeout(() => {
//           isPaused = false;  // Unpause after the long pause
//           animateGradient();  // Start next cycle
//         }, longPauseDuration);
//       }, durationSlow);
//     }
//   };

//   animateGradient();
// });