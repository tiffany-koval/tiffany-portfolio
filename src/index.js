import _ from 'lodash';

if (module.hot) {
    module.hot.accept();
}

// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll(".locker__section");
//   const headers = document.querySelectorAll(".header");
//   const mainElement = document.querySelector("main");
//   const footer = document.querySelector("footer");
//   const projectsSection = document.querySelector(".projects-section");

//   if (projectsSection) {
//     console.log("Projects section found:", projectsSection);
//   } else {
//     console.log("Projects section not found");
//   }

//   mainElement.style.backgroundImage =
//     "radial-gradient(at 30% 50%, rgba(255, 245, 245, .65) 38%, rgba(240, 246, 255, 0.65) 80%, rgba(240, 246, 255, 0.65) 100%)";
//   mainElement.style.backgroundColor = "";

//   const textElementOne = document.querySelector(".text--1");
//   if (textElementOne) {
//     textElementOne.style.opacity = "1";
//   } else {
//     console.error("text--1 not found in the DOM.");
//   }

//   function resetActiveContent() {
//     sections.forEach((section) => {
//       const textElement = section.querySelector(".text");
//       const imgElement = section.querySelector("img");
//       const descriptionElement = textElement?.nextElementSibling;
//       textElement?.classList.remove("active");
//       imgElement?.classList.remove("visible");
//       descriptionElement?.classList.remove("active");
//     });
//   }

//   function activateSection(targetClass) {
//     const targetSection = document.querySelector(
//       `.locker__section[data-swap="${targetClass}"]`
//     );
//     if (!targetSection) return;

//     const textElement = targetSection.querySelector(`.text.${targetClass}`);
//     const imgElement = targetSection.querySelector("img");
//     const descriptionElement = textElement?.nextElementSibling;

//     textElement?.classList.add("active");
//     imgElement?.classList.add("visible");
//     descriptionElement?.classList.add("active");

//     if (textElement?.classList.contains("text--1")) {
//       mainElement.style.backgroundImage =
//         "radial-gradient(farthest-corner at 0% 90%, #FFF5F5 30%, #F0F6FF 60%, #F0F6FF 100%)";
//       mainElement.style.backgroundColor = "";
//     } else if (textElement?.classList.contains("text--2")) {
//       mainElement.style.backgroundColor = "";
//       mainElement.style.backgroundImage =
//         "radial-gradient(farthest-corner at 0% 90%, #F2F1FC 30%, #F0F6FF 50%, #F0F6FF 100%)";
//     } else if (textElement?.classList.contains("text--3")) {
//       mainElement.style.backgroundImage = "";
//       mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//     } else if (textElement?.classList.contains("text--4")) {
//       mainElement.style.backgroundImage = "";
//       mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
//     } else if (textElement?.classList.contains("text--5")) {
//       mainElement.style.backgroundImage = "";
//       mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//     }
//   }

//   headers.forEach((header) => {
//     header.addEventListener("click", (event) => {
//       event.preventDefault();
//       const targetClass = header.querySelector("h1").classList[1];
//       resetActiveContent();
//       activateSection(targetClass);
//     });
//   });

//   const observerOptions = { threshold: 0.1 };
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const targetClass = entry.target.dataset.swap;
//       const textElement = document.querySelector(`.text.${targetClass}`);
//       const imgElement = entry.target.querySelector("img");
//       const descriptionElement = textElement?.nextElementSibling;

//       const testOne = document.querySelector('.test--1');
//       const testTwo = document.querySelector('.test--2');
//       const testThree = document.querySelector('.test--3');
//       const testFour = document.querySelector('.test--4');
//       const testFive = document.querySelector('.test--5');

//       if (entry.isIntersecting) {
//         if (entry.target === projectsSection) {
//           mainElement.style.backgroundImage = "";
//           mainElement.style.backgroundColor = "transparent";
//           console.log("Projects is intersecting, background set to transparent");
//         } else if (entry.target === footer) {
//           mainElement.style.backgroundImage = "";
//           mainElement.style.backgroundColor = "transparent";
//           console.log("Footer section is intersecting, background set to transparent");
//         } else {
//           if (textElementOne && textElement !== textElementOne) {
//             textElementOne.style.opacity = "0.3";
//           } else if (textElementOne && textElement === textElementOne) {
//             textElementOne.style.opacity = "1";
//           }

//           textElement?.classList.add("active");
//           imgElement?.classList.add("visible");
//           descriptionElement?.classList.add("active");

//           if (textElement?.classList.contains("text--1")) {
//             testOne.style.filter = "none";
//             mainElement.style.backgroundImage =
//               "radial-gradient(farthest-corner at 0% 90%, rgba(255, 245, 245, .85) 50%, rgba(240, 246, 255, .85) 65%, rgba(240, 246, 255, .85) 100%)";
//             mainElement.style.backgroundColor = "";
//           } else if (textElement?.classList.contains("text--2")) {
//             testOne.style.filter = "blur(1.25px)";
//             testTwo.style.filter = "none";
//             mainElement.style.backgroundColor = "";
//             mainElement.style.backgroundImage =
//               "radial-gradient(farthest-corner at 0% 90%, rgba(255, 245, 245, .85) 0%, rgba(242, 241, 252, .85) 55%, rgba(240, 246, 255, .85) 60%, rgba(240, 246, 255, .8) 100%)";
//           } else if (textElement?.classList.contains("text--3")) {
//             testTwo.style.filter = "blur(1.25px)";
//             testThree.style.filter = "none";
//             mainElement.style.backgroundImage = "";
//             mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//           } else if (textElement?.classList.contains("text--4")) {
//             testThree.style.filter = "blur(1.25px)";
//             testFour.style.filter = "none";
//             mainElement.style.backgroundImage = "";
//             mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
//           } else if (textElement?.classList.contains("text--5")) {
//             testFour.style.filter = "blur(1.25px)";
//             mainElement.style.backgroundImage = "";
//             mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//           }
//         }
//       } else {
//         textElement?.classList.remove("active");
//         imgElement?.classList.remove("visible");
//         descriptionElement?.classList.remove("active");
//       }
//     });
//   }, observerOptions);

//   sections.forEach((section) => observer.observe(section));
//   observer.observe(footer);
//   observer.observe(projectsSection);
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const lockerSections = document.querySelector(".locker__sections");
//   const projectsSection = document.querySelector(".projects-section");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           console.log(`${entry.target.className} is in view`);
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   observer.observe(lockerSections);
//   observer.observe(projectsSection);
// });


// document.addEventListener("scroll", () => {
//   const headerText = document.querySelectorAll(".locker__container h1");
//   console.log(headerText);
//   const paragraphText = document.querySelectorAll(".locker__container p");
//   const topContainer = document.querySelector(".locker__content");
//   const topContainerHeight = topContainer.offsetHeight;

//   // Get the current scroll position
//   const scrollTop = window.scrollY;

//   // Calculate progress for the scroll effect (extend beyond 100vh)
//   const maxScrollDistance = topContainerHeight * 1; // Stretch effect over 200vh
//   const progress = Math.min(scrollTop / maxScrollDistance, 1); // Normalize to 0-1

//   // Apply easing to progress using a cubic function for smoothness
//   const easedProgress = Math.pow(progress, 0.8); // Easing factor (0.8 creates smooth deceleration)

//   // Scale text size and opacity based on eased progress
//   const scale = Math.max(1 - easedProgress * 0.2, 0.85); // Min scale is 70%
//   const opacity = Math.max(1 - easedProgress, 0);       // Fade out to 0

//   headerText.forEach((element => element.style.opacity = opacity));

//   // headerText.style.fontSize = `${scale * 3}rem`; // Adjust font size
//   // paragraphText.style.fontSize = `${scale * 3}rem`;
//   // headerText.style.opacity = opacity;           // Adjust opacity
//   // paragraphText.style.opacity = opacity; 
// }); 


// document.addEventListener("DOMContentLoaded", () => {
//   //window.scrollTo(0, 0); 

//   const sections = document.querySelectorAll(".locker__section");
//   const headers = document.querySelectorAll(".header");
//   const mainElement = document.querySelector("main");
//   const footer = document.querySelector("footer");
//   // const projectsSection = document.querySelector(".projects-section");

//   // Set initial background for the main element
//   mainElement.style.backgroundImage =
//     "radial-gradient(at 30% 50%, rgba(255, 245, 245, .65) 38%, rgba(240, 246, 255, 0.65) 80%, rgba(240, 246, 255, 0.65) 100%)";
//   mainElement.style.backgroundColor = "";

//   // Set text--1 opacity to 1 on load
//   const textElementOne = document.querySelector(".text--1");
//   if (textElementOne) {
//     textElementOne.style.opacity = "1";
//   } else {
//     console.error("text--1 not found in the DOM.");
//   }

//   // Function to reset all sections and styles
//   function resetActiveContent() {
//     sections.forEach((section) => {
//       const textElement = section.querySelector(".text");
//       const imgElement = section.querySelector("img");
//       const descriptionElement = textElement?.nextElementSibling;

//       // Reset active classes
//       textElement?.classList.remove("active");
//       imgElement?.classList.remove("visible");
//       descriptionElement?.classList.remove("active");
//     });
//   }

//   // Function to activate a clicked section
//   function activateSection(targetClass) {
//     const targetSection = document.querySelector(
//       `.locker__section[data-swap="${targetClass}"]`
//     );
//     if (!targetSection) return;

//     const textElement = targetSection.querySelector(`.text.${targetClass}`);
//     const imgElement = targetSection.querySelector("img");
//     const descriptionElement = textElement?.nextElementSibling;

//     textElement?.classList.add("active");
//     imgElement?.classList.add("visible");
//     descriptionElement?.classList.add("active");

//     console.log(`Clicked on header with class: ${targetClass}`);


//     if (textElement?.classList.contains("text--1")) {
//       mainElement.style.backgroundImage =
//         "radial-gradient(farthest-corner at 0% 90%, #FFF5F5 30%, #F0F6FF 60%, #F0F6FF 100%)";
//       mainElement.style.backgroundColor = "";
//     } else if (textElement?.classList.contains("text--2")) {
//       mainElement.style.backgroundColor = "";
//       mainElement.style.backgroundImage =
//         "radial-gradient(farthest-corner at 0% 90%, #F2F1FC 30%, #F0F6FF 50%, #F0F6FF 100%)";
//     } else if (textElement?.classList.contains("text--3")) {
//       mainElement.style.backgroundImage = "";
//       mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//     } else if (textElement?.classList.contains("text--4")) {
//       mainElement.style.backgroundImage = "";
//       mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
//     } else if (textElement?.classList.contains("text--5")) {
//       mainElement.style.backgroundImage = "";
//       mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//     }
//   }

//   // Event listener for headers
//   headers.forEach((header) => {
//     header.addEventListener("click", (event) => {
//       event.preventDefault();
//       const targetClass = header.querySelector("h1").classList[1];
//       resetActiveContent();
//       activateSection(targetClass);
//     });
//   });

//   // IntersectionObserver for sections and footer
//   const observerOptions = { threshold: 0.5 };
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const targetClass = entry.target.dataset.swap;
//       const textElement = document.querySelector(`.text.${targetClass}`);
//       const imgElement = entry.target.querySelector("img");
//       const descriptionElement = textElement?.nextElementSibling;


//       const testOne = document.querySelector('.test--1');
//       const testTwo = document.querySelector('.test--2');
//       const testThree = document.querySelector('.test--3');
//       const testFour = document.querySelector('.test--4');
//       const testFive = document.querySelector('.test--5');

//       if (entry.isIntersecting) {
//         if (entry.target === footer) {
//           // Footer-specific logic
//           mainElement.style.backgroundImage = "";
//           mainElement.style.backgroundColor = "transparent";
//         } 
//         // else if (entry.target === projectsSection) {
//         //   // projects section-specific logic
//         //   mainElement.style.backgroundImage = "";
//         //   mainElement.style.backgroundColor = "transparent";
//         // }  
        
//         else {

//           if (textElementOne && textElement !== textElementOne) {
//             textElementOne.style.opacity = "0.3";
//         } else if (textElementOne && textElement === textElementOne) {
//             textElementOne.style.opacity = "1";
//         } 

//           // Section-specific logic
//           textElement?.classList.add("active");
//           imgElement?.classList.add("visible");
//           descriptionElement?.classList.add("active");

//           if (textElement?.classList.contains("text--1")) {
//             testOne.style.filter = "none";
//             mainElement.style.backgroundImage =
//               "radial-gradient(farthest-corner at 0% 90%, rgba(255, 245, 245, .85) 50%, rgba(240, 246, 255, .85) 65%, rgba(240, 246, 255, .85) 100%)";
//             mainElement.style.backgroundColor = "";
//           } else if (textElement?.classList.contains("text--2")) {
//             testOne.style.filter = "blur(1.25px)";
//             testTwo.style.filter = "none";
//             mainElement.style.backgroundColor = "";
//             mainElement.style.backgroundImage =
//               "radial-gradient(farthest-corner at 0% 90%, rgba(255, 245, 245, .85) 0%, rgba(242, 241, 252, .85) 55%, rgba(240, 246, 255, .85) 60%, rgba(240, 246, 255, .8) 100%)";
//           } else if (textElement?.classList.contains("text--3")) {
//             testTwo.style.filter = "blur(1.25px)";
//             testThree.style.filter = "none";
//             mainElement.style.backgroundImage = "";
//             mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//           } else if (textElement?.classList.contains("text--4")) {
//             testThree.style.filter = "blur(1.25px)";
//             testFour.style.filter = "none";
//             mainElement.style.backgroundImage = "";
//             mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
//           } else if (textElement?.classList.contains("text--5")) {
//             testFour.style.filter = "blur(1.25px)";
//             mainElement.style.backgroundImage = "";
//             mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//             // testFive.style.filter = "none";
//           }
//         }
//       } else {
//         textElement?.classList.remove("active");
//         imgElement?.classList.remove("visible");
//         descriptionElement?.classList.remove("active");
//       }
//     });
//   }, observerOptions);

//   // Start observing each section and footer
//   sections.forEach((section) => observer.observe(section));
//   observer.observe(footer);
// });




// document.addEventListener("DOMContentLoaded", () => {
//   // window.scrollTo(0, 0); 

//   const projectsSection = document.querySelector(".project-one");
//   const mainElement = document.querySelector("main");

//   // IntersectionObserver for sections and footer
//   const observerOptions = { threshold: 0.1 };
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {

//       if (entry.isIntersecting) {
//          if (entry.target === projectsSection) {
//           // projects section-specific logic
//           mainElement.style.backgroundImage = "";
//           mainElement.style.backgroundColor = 'transparent';
//           console.log('test')
//         } else {
//         }
//       } else {
//       }
//     });
//   }, observerOptions);

//   // Start observing each section and footer
//   observer.observe(projectsSection);
// });






// document.addEventListener("DOMContentLoaded", () => {
//     window.scrollTo(0, 0); // Ensure the page starts at the top on load
  
//     const sections = document.querySelectorAll(".locker__section");
//     const headers = document.querySelectorAll(".header");
//     const mainElement = document.querySelector("main");
//     const footer = document.querySelector("footer");
  
//     // Set initial background for the main element
//     mainElement.style.backgroundImage =
//       "radial-gradient(at 30% 50%, rgba(255, 245, 245, .65) 38%, rgba(240, 246, 255, 0.65) 80%, rgba(240, 246, 255, 0.65) 100%)";
//     mainElement.style.backgroundColor = "";
  
//     // Set text--1 opacity to 1 on load
//     const textElementOne = document.querySelector(".text--1");
//     if (textElementOne) {
//       textElementOne.style.opacity = "1";
//     } else {
//       console.error("text--1 not found in the DOM.");
//     }
  
//     // Function to reset all sections and styles
//     function resetActiveContent() {
//       sections.forEach((section) => {
//         const textElement = section.querySelector(".text");
//         const imgElement = section.querySelector("img");
//         const descriptionElement = textElement?.nextElementSibling;
  
//         // Reset active classes
//         textElement?.classList.remove("active");
//         imgElement?.classList.remove("visible");
//         descriptionElement?.classList.remove("active");
//       });
//     }
  
//     // Function to activate a clicked section
//     function activateSection(targetClass) {
//       const targetSection = document.querySelector(
//         `.locker__section[data-swap="${targetClass}"]`
//       );
//       if (!targetSection) return;
  
//       const textElement = targetSection.querySelector(`.text.${targetClass}`);
//       const imgElement = targetSection.querySelector("img");
//       const descriptionElement = textElement?.nextElementSibling;
  
//       textElement?.classList.add("active");
//       imgElement?.classList.add("visible");
//       descriptionElement?.classList.add("active");
  
//       if (textElement?.classList.contains("text--1")) {
//         mainElement.style.backgroundImage =
//           "radial-gradient(farthest-corner at 0% 90%, #FFF5F5 30%, #F0F6FF 60%, #F0F6FF 100%)";
//         mainElement.style.backgroundColor = "";
//       } else if (textElement?.classList.contains("text--2")) {
//         mainElement.style.backgroundColor = "";
//         mainElement.style.backgroundImage =
//           "radial-gradient(farthest-corner at 0% 90%, #F2F1FC 30%, #F0F6FF 50%, #F0F6FF 100%)";
//       } else if (textElement?.classList.contains("text--3")) {
//         mainElement.style.backgroundImage = "";
//         mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//       } else if (textElement?.classList.contains("text--4")) {
//         mainElement.style.backgroundImage = "";
//         mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
//       } else if (textElement?.classList.contains("text--5")) {
//         mainElement.style.backgroundImage = "";
//         mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//       }
//     }
  
//     // Event listener for headers
//     headers.forEach((header) => {
//       header.addEventListener("click", (event) => {
//         event.preventDefault();
//         const targetClass = header.querySelector("h1").classList[1];
//         resetActiveContent();
//         activateSection(targetClass);
//       });
//     });
  
//     // IntersectionObserver for sections and footer
//     const observerOptions = { threshold: 0.5 };
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         const targetClass = entry.target.dataset.swap;
//         const textElement = document.querySelector(`.text.${targetClass}`);
//         const imgElement = entry.target.querySelector("img");
//         const descriptionElement = textElement?.nextElementSibling;
  
//         if (entry.isIntersecting) {
//           if (entry.target === footer) {
//             // Footer-specific logic
//             mainElement.style.backgroundImage = "";
//             mainElement.style.backgroundColor = "transparent";
//           } else {
//             // Section-specific logic
//             textElement?.classList.add("active");
//             imgElement?.classList.add("visible");
//             descriptionElement?.classList.add("active");
  
//             if (textElement?.classList.contains("text--1")) {
//               mainElement.style.backgroundImage =
//                 "radial-gradient(farthest-corner at 0% 90%, rgba(255, 245, 245, .85) 50%, rgba(240, 246, 255, .85) 65%, rgba(240, 246, 255, .85) 100%)";
//               mainElement.style.backgroundColor = "";
//             } else if (textElement?.classList.contains("text--2")) {
//               mainElement.style.backgroundColor = "";
//               mainElement.style.backgroundImage =
//                 "radial-gradient(farthest-corner at 0% 90%, rgba(255, 245, 245, .85) 0%, rgba(242, 241, 252, .85) 55%, rgba(240, 246, 255, .85) 60%, rgba(240, 246, 255, .8) 100%)";
//             } else if (textElement?.classList.contains("text--3")) {
//               mainElement.style.backgroundImage = "";
//               mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//             } else if (textElement?.classList.contains("text--4")) {
//               mainElement.style.backgroundImage = "";
//               mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
//             } else if (textElement?.classList.contains("text--5")) {
//               mainElement.style.backgroundImage = "";
//               mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//             }
//           }
//         } else {
//           textElement?.classList.remove("active");
//           imgElement?.classList.remove("visible");
//           descriptionElement?.classList.remove("active");
//         }
//       });
//     }, observerOptions);
  
//     // Start observing each section and footer
//     sections.forEach((section) => observer.observe(section));
//     observer.observe(footer);
//   });




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
  // const padding = parseFloat(getComputedStyle(logoContainer).paddingLeft); // .75rem in px
  // const starSize = parseFloat(starSVG.getAttribute('width')); // SVG size
  // const circleSize = starSize + 2 * padding; // Total size

  // Hover In: Expand the circle
  logoContainer.addEventListener('mouseenter', () => {
    gsap.to(circle, {
      width: '50px', // Circle's final size
      height: '50px',
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


  

  document.addEventListener("DOMContentLoaded", function () {
      // Select the logo-container and hamburger elements
      const logoIntro = document.querySelector('.logo-container');
      const hamburgerNav = document.querySelector('.hamburger');

  
      if (logoIntro) {
          logoIntro.classList.add('visible'); // Add the class to trigger the animation
      }
  
      if (hamburgerNav) {
          hamburgerNav.classList.add('visible'); // Add the class to the hamburger menu
      }

  
  });
  
  // Attach the scroll event listener with passive option
  window.addEventListener('scroll', onScroll, { passive: true });

  let hamburgerClicking = false;
  
  function hamburgerClick() {
      if (hamburgerClicking) return; // Prevent multiple rapid clicks
      hamburgerClicking = true;

  
      const hamburger = document.querySelector('.main-nav-toggle');
      const aboutNav = document.querySelector('.about');
      const workNav = document.querySelector('.work');

      if (hamburger.classList.contains('active-menu')) {
          hamburger.classList.remove('active-menu');
              aboutNav.classList.remove('visible'); // Add the class to the hamburger menu
              workNav.classList.remove('visible'); // Add the class to the hamburger menu

      } else {
          hamburger.classList.add('active-menu');
          if (aboutNav) {
              aboutNav.classList.add('visible'); // Add the class to the hamburger menu
          }
  
          if (workNav) {
              workNav.classList.add('visible'); // Add the class to the hamburger menu
          }
      }
  
      setTimeout(() => {
          hamburgerClicking = false; // Re-enable click after a short delay
      }, 500);
  }

  const hamburgerNav = document.querySelector('.hamburger');
   // Attach the click event to the hamburger
   hamburgerNav.addEventListener('click', hamburgerClick);







   document.addEventListener("DOMContentLoaded", () => {

    window.scrollTo(0, 0);  
  
    const sections = document.querySelectorAll(".locker__section");
    const headers = document.querySelectorAll(".header");
  
    const mainElement = document.querySelector('main');
    // const projectsSection = document.querySelector(".projects-section");
  
    mainElement.style.backgroundImage = "radial-gradient(at 30% 50%, rgba(255, 245, 245, .75) 38%, rgba(240, 246, 255, 0.75) 80%, rgba(240, 246, 255, 0.75) 100%)";
    mainElement.style.backgroundColor = "";
  
    
  
        const textElementOne = document.querySelector(".text--1");
  
      // Set text--1 opacity to 1 on load
      if (textElementOne) {
          textElementOne.style.opacity = "1";
      } else {
          console.error("text--1 not found in the DOM.");
      }
        
  
    // Function to reset all sections and styles
    function resetActiveContent() {
        console.log("Resetting active content");
  
        sections.forEach((section) => {
            const textElement = section.querySelector(".text");
            const imgElement = section.querySelector("img");
            const descriptionElement = textElement?.nextElementSibling;
  
            // Reset active classes
            if (textElement) textElement.classList.remove("active");
            if (imgElement) imgElement.classList.remove("visible");
            if (descriptionElement) descriptionElement.classList.remove("active");
        });
  
    }
  
    // Function to activate the clicked section
    function activateSection(targetClass) {
        console.log("Activating section for:", targetClass);
  
        // Find the corresponding section with the matching data-swap
        const targetSection = document.querySelector(`.locker__section[data-swap="${targetClass}"]`);
        if (!targetSection) {
            console.log("Target section not found for class:", targetClass);
            return;
        }
  
        // Select the elements inside the section
        const textElement = targetSection.querySelector(`.text.${targetClass}`);
        const imgElement = targetSection.querySelector("img");
        const descriptionElement = textElement?.nextElementSibling;
  
        // Debugging: Log elements to verify they're found
        console.log("Text Element:", textElement); // Debugging
        console.log("Image Element:", imgElement); // Debugging
        console.log("Description Element:", descriptionElement); // Debugging
  
        // Check if the textElement exists before proceeding
        if (textElement) {
            textElement.classList.add("active");
        } else {
            console.log("No text element found for target class:", targetClass);
        }
  
        // If image element is found, make it visible
        if (imgElement) {
            imgElement.classList.add("visible");
            // Scroll the image into view and center it
            imgElement.scrollIntoView({
                behavior: "smooth",
                block: "center" // Center the image
            });
        } else {
            console.log("No image element found for target class:", targetClass);
        }
  
        // If description element exists, make it active
        if (descriptionElement) {
            descriptionElement.classList.add("active");
        } else {
            console.log("No description element found for target class:", targetClass);
        }
  
        // Change background based on the activated section
        if (textElement && textElement.classList.contains("text--1")) {
          mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 90%, #FFF5F5 30%, #F0F6FF 60%, #F0F6FF 100%)";
          mainElement.style.backgroundColor = "";
        } else if (textElement && textElement.classList.contains("text--2")) {
          mainElement.style.backgroundColor = "";
          mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 90%, #F2F1FC 30%, #F0F6FF 50%, #F0F6FF 100%)";
        } else if (textElement && textElement.classList.contains("text--3")) {
          mainElement.style.backgroundImage = "";
          mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
        } else if (textElement && textElement.classList.contains("text--4")) {
          mainElement.style.backgroundImage = "";
          mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
      } else if (textElement && textElement.classList.contains("text--5")) {
          mainElement.style.backgroundImage = "";
          mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
      } 
      
    }
  
  
  
    // Event listener for headers
    headers.forEach(header => {
        console.log("Attaching click listener to header:", header);  // Debugging
        header.addEventListener("click", (event) => {
            event.preventDefault();  // Optional, depending on the behavior you're expecting
            console.log("Header clicked:", header);
  
            // Get the target class based on the clicked header's class (text--1, text--2, text--3)
            const targetClass = header.querySelector("h1").classList[1]; // Assuming text--1, text--2, or text--3 is always present
            console.log("Target class for section:", targetClass);  // Debugging
  
            // Reset all sections and styles before activating the new one
            resetActiveContent();
  
            // Activate the clicked section
            activateSection(targetClass);
        });
    });
  
    // Intersection Observer setup for scrolling
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const targetClass = entry.target.dataset.swap;
            const textElement = document.querySelector(`.text.${targetClass}`);
            const imgElement = entry.target.querySelector("img");
            const descriptionElement = textElement?.nextElementSibling;
  
  
            // Log to ensure the target element is intersecting
            console.log("Entry isIntersecting:", entry.isIntersecting);
  
            if (entry.isIntersecting) {
                // Make the corresponding text and image visible
                textElement?.classList.add("active");
                imgElement?.classList.add("visible");
                if (descriptionElement) descriptionElement.classList.add("active");
  
  
                if (textElementOne && textElement !== textElementOne) {
                  textElementOne.style.opacity = "0.3";
              } else if (textElementOne && textElement === textElementOne) {
                  textElementOne.style.opacity = "1";
              } 
  
            } else {
                // Remove visibility when out of view
                textElement?.classList.remove("active");
                imgElement?.classList.remove("visible");
                if (descriptionElement) descriptionElement.classList.remove("active");
            }
  
  
          const testOne = document.querySelector('.test--1');
          const testTwo = document.querySelector('.test--2');
          const testThree = document.querySelector('.test--3');
          const testFour = document.querySelector('.test--4');
          const testFive = document.querySelector('.test--5');
  
          const mainElement = document.querySelector('main');
  
            // If any textElement is intersecting, change background style
            if (entry.isIntersecting) {
                if (textElement === document.querySelector(".text--1")) {
                  mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, rgba(255, 245, 245, .85) 50%, rgba(240, 246, 255, .85) 65%, rgba(240, 246, 255, .85) 100%)";
                  mainElement.style.backgroundColor = "";
                    testOne.style.filter = "none";
                } else if (textElement === document.querySelector(".text--2")) {
                    testOne.style.filter = "blur(1.25px)";
                    testTwo.style.filter = "none";
                    mainElement.style.backgroundColor = "";
                    mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, rgba(255, 245, 245, .85) 0%, rgba(242, 241, 252, .85) 55%, rgba(240, 246, 255, .85) 60%, rgba(240, 246, 255, .8) 100%)";
                } else if (textElement === document.querySelector(".text--3")) {
                  testTwo.style.filter = "blur(1.25px)";
                  testThree.style.filter = "none";
                  mainElement.style.backgroundImage = "";
                  mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
                } else if (textElement && textElement.classList.contains("text--4")) {
                  testThree.style.filter = "blur(1.25px)";
                  testFour.style.filter = "none";
                  mainElement.style.backgroundImage = "";
                  mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
              } else if (textElement && textElement.classList.contains("text--5")) {
                  testFour.style.filter = "blur(1.25px)";
                  mainElement.style.backgroundImage = "";
                  mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
              } else if ((textElement !== document.querySelector(".text--1")) || (textElement !== document.querySelector(".text--2")) || (textElement !== document.querySelector(".text--3")) || (textElement !== document.querySelector(".text--4")) || (textElement !== document.querySelector(".text--5"))) {
                  mainElement.style.backgroundColor = "";
              }
            } else {
                // Optional: Reset the background styles when no text is intersecting
              //   mainElement.body.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, #FFF5F5 0%, #F0F6FF 70%, #F0F6FF 100%)";
              //   mainElement.style.backgroundColor = "";
            }
  
  
        });
    }, options);
  
    // Start observing each section
    sections.forEach((section) => observer.observe(section));
  });
  

//   document.addEventListener("DOMContentLoaded", () => {

//     const sections = document.querySelectorAll(".locker__section");
//     const mainElement = document.querySelector("main");


//     // Intersection Observer setup for scrolling
//     const options = { threshold: 1.0 }; // Fully in view
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             const targetClass = entry.target.dataset.swap;
//             const textElement = document.querySelector(`.text.${targetClass}`);
//             const descriptionElement = textElement?.nextElementSibling;

//             if (entry.isIntersecting) {
//                 // Handle project-one specific behavior
//                 if (entry.target.classList.contains("project-one")) {
//                     const lastTextElement = document.querySelector(".text--5");
//                     const lastDescriptionElement = lastTextElement?.nextElementSibling;

//                     // Remove active classes from last text and description
//                     lastTextElement?.classList.remove("active");
//                     lastDescriptionElement?.classList.remove("active");

//                     // Apply blur filter
//                     lastTextElement.style.filter = "blur(5px)";
//                     if (!lastTextElement) {
//                       console.error(".text--5 not found in the DOM.");
//                       return;
//                   }
                  
//                 }

//                 // Handle fifth text element specific behavior
//                 if (textElement?.classList.contains("text--5")) {
//                     document.querySelectorAll(".text").forEach(el => el.style.filter = "none");
//                     textElement.style.filter = "none"; // Remove blur from the fifth text element
//                 }

//                 textElement?.classList.add("active");
//                 descriptionElement?.classList.add("active");

//                 // Background changes
//                 if (textElement?.classList.contains("text--5")) {
//                     mainElement.style.backgroundImage = "";
//                     mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//                 }
//             } else {
//                 textElement?.classList.remove("active");
//                 descriptionElement?.classList.remove("active");
//             }
//         });
//     }, options);

//     // Start observing each section
//     sections.forEach((section) => observer.observe(section));
// });


//   document.addEventListener("DOMContentLoaded", () => {
//   const projectOne = document.querySelector(".project-one");
//   const textFive = document.querySelector('.text--5');
//   const mainElement = document.querySelector('main');
//   const lockerContainer = document.querySelector('.locker__container')
//   const descriptionFive = document.querySelector('.description--5')
  

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           console.log(`${entry.target.className} is in view`);
//           // textFive.style.filter = "blur(1.25px)";
//           // textFive.classList.remove('active');
//           // descriptionFive .classList.remove('active');
//           // textFive.style.opacity = "0.3";
//           mainElement.style.backgroundImage = "";
//           mainElement.style.backgroundColor = "";
//           lockerContainer.style.opacity = "0";
//         } else {
//           textFive.style.filter = "none";
//           lockerContainer.style.opacity = "1";
//           // textFive.classList.add('active');
//           // descriptionFive .classList.add('active');
//         }
//       });
//     },
//     { threshold: 1 }
//   );

//   observer.observe(projectOne);
// });



// document.addEventListener("DOMContentLoaded", () => {
//   const projectOne = document.querySelector(".project-one");
//   const lockerContainer = document.querySelector('.locker__container');
//   const footer = document.querySelector('footer');

//   // Observer for hiding lockerContainer when footer is in view
//   const footerObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Footer is in view, hide lockerContainer
//           lockerContainer.style.opacity = "0";
//           // lockerContainer.style.display = "none";
//         } else {
//           // Footer is not in view, restore display if necessary
//           // lockerContainer.style.display = "block";
//         }
//       });
//     },
//     {
//       threshold: 0, // Trigger when at least 10% of the footer is in view
//     }
//   );

//   footerObserver.observe(footer);
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const projectsSection = document.querySelector(".projects-section");
//   const lockerContainer = document.querySelector('.locker__container');

//   // Observer for hiding lockerContainer when footer is in view
//   const projectsSectionObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Footer is in view, hide lockerContainer
//           lockerContainer.style.opacity = "0";
//           // lockerContainer.style.display = "none";
//         } else {
//           // Footer is not in view, restore display if necessary
//           // lockerContainer.style.display = "block";
//         }
//       });
//     },
//     {
//       threshold: 0.2, // Trigger when at least 10% of the footer is in view
//     }
//   );

//   projectsSectionObserver.observe(projectsSection);
// });



document.addEventListener("DOMContentLoaded", () => {
  const projectOne = document.querySelector(".project-one");
  const footer = document.querySelector("footer");
  const projectsSection = document.querySelector(".projects-section");
  const lockerContainer = document.querySelector(".locker__content");

  // Shared state to track intersections
  let projectOneInView = false;
  let footerInView = false;
  let projectsSectionInView = false;

  // Function to update lockerContainer visibility
  const updateLockerVisibility = () => {
    console.log({ projectOneInView, footerInView, projectsSectionInView });
    if (projectOneInView || footerInView || projectsSectionInView) {
      lockerContainer.style.opacity = "0";
    } else {
      lockerContainer.style.opacity = "1";
    }
  };

  // Observer for projectOne and footer with one threshold
  const observerOne = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === projectOne) {
          projectOneInView = entry.isIntersecting;
          console.log('try')
        } 
        updateLockerVisibility();
      });
    },
    { threshold: .5 } // Example: Trigger when 50% of the target is in view
  );

  // Observer for projectsSection with a different threshold
  const observerTwo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === projectsSection) {
          projectsSectionInView = entry.isIntersecting;
          console.log('test')
        }
        updateLockerVisibility();
      });
    },
    { threshold: 0.2 } // Example: Trigger when 20% of the target is in view
  );

    // Observer for projectsSection with a different threshold
    const observerThree = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === footer) {
            footerInView = entry.isIntersecting;
            console.log('best')
          }
          updateLockerVisibility();
        });
      },
      { threshold: 0 } // Example: Trigger when 20% of the target is in view
    );

  // Observe projectOne and footer with observerOne
  observerOne.observe(projectOne);
  observerTwo.observe(projectsSection);
  observerThree.observe(footer);
});
