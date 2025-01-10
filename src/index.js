import _ from 'lodash';
import './styles.css';


if (module.hot) {
    module.hot.accept();
}

console.log('Hello, world!');


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




//   const lockerSectionVisible = document.querySelectorAll('.locker__section.visible')
//   const lockerSection = document.querySelectorAll('.locker__section')

// // Disable pointer events after mouse click
// lockerSections.addEventListener('mousedown', () => {
//     lockerSections.style.pointerEvents = 'none';
//     lockerSectionVisible.style.pointerEvents = 'none';
//     lockerSection.style.pointerEvents = 'none';
// });

// // Re-enable pointer events when scrolling starts
// lockerSections.addEventListener('scroll', () => {
//     lockerSections.style.pointerEvents = 'auto';
//     lockerSectionVisible.style.pointerEvents = 'auto';
//     lockerSection.style.pointerEvents = 'auto';
// });
// lockerSections.addEventListener('mousedown', () => {
//   setTimeout(() => {
//       lockerSections.style.pointerEvents = 'none';
//   }, 0); // Minimal delay to ensure it applies immediately
// });

// lockerSections.addEventListener('mousedown', () => {
//   lockerSections.style.pointerEvents = 'none';

//   // Reset pointer-events back to 'auto' after a short delay
//   setTimeout(() => {
//       lockerSections.style.pointerEvents = 'auto';
//   }, 2000); // Adjust the timeout as necessary
// });


// lockerSections.addEventListener('mousedown', (event) => {
//   event.preventDefault();
//   event.stopPropagation(); // Prevent bubbling
//   lockerSections.style.pointerEvents = 'none';
//   console.log('Pointer events set to none');
//   console.log(getComputedStyle(lockerSections).pointerEvents); 
// });

// Reset pointer-events on mouseup
// lockerSections.addEventListener('mousedown', () => {
//   lockerSections.style.pointerEvents = 'none';
// });


// // Reset pointer-events on mouseup
// lockerSections.addEventListener('mouseup', () => {
//   lockerSections.style.pointerEvents = 'auto';
// });

// // Optional: Reset pointer-events when scrolling starts
// lockerSections.addEventListener('scroll', () => {
//   lockerSections.style.pointerEvents = 'auto';
// });


// lockerSections.addEventListener('mousedown', () => {
//   console.log('mousedown event fired');
// });



// // Create a GSAP timeline for smooth rotation
// gsap.set(starLogo, { rotation: 0 }); // Initialize rotation

// // Utility to detect the correct scrollable container
// function getScrollOffset() {
//   const containers = [window, document.documentElement, document.body, document.querySelector('.locker__sections')];
//   for (const container of containers) {
//     const scrollY = container.scrollTop || container.scrollY;
//     if (scrollY > 0) return { container, scrollY };
//   }
//   return { container: window, scrollY: 0 }; // Default to window
// }

// // Scroll handler
// function onScroll() {
//   const { scrollY } = getScrollOffset(); // Detect the scroll position
//   const targetRotation = scrollY * 0.2; // Adjust rotation sensitivity
//   gsap.to(starLogo, {
//     rotation: targetRotation,
//     // duration: 0.3, // Smooth easing duration
//     ease: "power2.out", // Smooth easing function
//   });
// }

// // Attach scroll listener to relevant containers
// const scrollContainers = [window, document.documentElement, document.body, document.querySelector('.locker__sections')];
// scrollContainers.forEach((container) => {
//   if (container && container.addEventListener) {
//     container.addEventListener('scroll', onScroll);
//   }
// });




//   function onClick() {
//       if (isClicking) return; // Prevent multiple rapid clicks
//       isClicking = true;

//       const currentScrollY = window.scrollY;
//       // Push the user back to the top if they've clicked the logo and scrolled
//       if (currentScrollY > 0) {
//           window.scrollTo({
//               top: 0,
//               behavior: 'smooth'
//           })
//       }

//       setTimeout(() => {
//           isClicking = false; //Re-enable click after a short delay
//       }, 500);
//   }



// // Create and append the circle dynamically
// const logoContainer = document.querySelector('.logo-container');
// const starSVG = document.querySelector('.star');
// const circle = document.createElement('div');
// circle.classList.add('circle');
// logoContainer.appendChild(circle);

// // Dynamically calculate circle size 
// // const padding = parseFloat(getComputedStyle(logoContainer).paddingLeft); // .75rem in px
// // const starSize = parseFloat(starSVG.getAttribute('width')); // SVG size
// // const circleSize = starSize + 2 * padding; // Total size

// logoContainer.addEventListener('mouseenter', () => {
//   gsap.to(circle, {
//     width: '50px', // Circle's final size
//     height: '50px',
//     duration: 0.3,
//     ease: 'power2.out',
//   });
// });

// // Hover Out: Shrink the circle
// logoContainer.addEventListener('mouseleave', () => {
//   gsap.to(circle, {
//     width: 0,
//     height: 0,
//     duration: 0.3,
//     ease: 'power2.in',
//   });
// });

// // Reference to the SVG container and scrollable sections
// const starLogo = document.querySelector('.star-logo');
// const lockerSections = document.querySelector('.locker__sections');
// let isClicking = false; // Prevents multiple rapid clicks
// let isAnimating = false; // Prevents scroll updates during click animation
// let isScrolling = false; // Prevents scroll-based rotation during smooth scroll
// let lastRotation = 0; // Tracks the last known rotation value for sync

// // Set initial rotation for the star logo
// gsap.set(starLogo, { rotation: lastRotation });

// // Scroll handler for rotation
// function onScroll() {
//   if (isAnimating || isScrolling) return; // Prevent scroll-based rotation during click animation or smooth scroll

//   const scrollY = lockerSections ? lockerSections.scrollTop : window.scrollY; // Get scroll position
//   const targetRotation = scrollY * 0.2; // Adjust rotation sensitivity

//   // Only update rotation if the rotation value has changed significantly
//   if (Math.abs(targetRotation - lastRotation) > 0.5) {
//     gsap.to(starLogo, {
//       rotation: targetRotation,
//       ease: "none", // No easing for smooth continuous rotation
//     });
//     lastRotation = targetRotation; // Update the last known rotation value
//   }
// }

// // Click handler for returning to the top
// function onClick() {
//   if (isClicking || isAnimating) return; // Prevent multiple rapid clicks
//   isClicking = true;
//   isAnimating = true; // Temporarily disable scroll updates
//   isScrolling = true; // Temporarily disable scroll-based rotation

//   // Determine the correct container to scroll to the top
//   const container = lockerSections || window;

//   // Scroll to top with smooth behavior
//   container.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });

//   // Reset rotation to 0 (without interrupting the smooth scroll)
//   gsap.to(starLogo, {
//     rotation: 0,
//     duration: 1,
//     ease: "power2.out",
//     onComplete: () => {
//       isClicking = false; // Reset the click flag
//       isAnimating = false; // Re-enable scroll updates
//       isScrolling = false; // Re-enable scroll-based rotation
//     },
//   });
// }

// // Attach scroll listener
// if (lockerSections) {
//   lockerSections.addEventListener('scroll', onScroll);
// } else {
//   window.addEventListener('scroll', onScroll);
// }

// // Attach click listener
// if (starLogo) {
//   starLogo.addEventListener('click', onClick);
// } else {
//   console.error('Star logo element not found!');
// }


// Select elements from the DOM
const logoContainer = document.querySelector('.logo-container');
const starLogo = document.querySelector('.star-logo');
const lockerSections = document.querySelector('.locker__sections');

// Create the circle element
// const circle = document.createElement('div');
// circle.classList.add('circle');

const circle = document.createElement('div');
circle.classList.add('circle');
logoContainer.appendChild(circle);

logoContainer.addEventListener('mouseenter', () => {
  gsap.to(circle, {
    width: '50px', // Circle's final size
    height: '50px',
    duration: 0.25,
    ease: 'power2.out',
  });
});

// Hover Out: Shrink the circle
logoContainer.addEventListener('mouseleave', () => {
  gsap.to(circle, {
    width: 0,
    height: 0,
    duration: 0.25,
    ease: 'power2.in',
  });
});





// Track rotation for the star logo
let rotation = 0;
let isReversing = false;

// Rotate the star logo on scroll within lockerSections
lockerSections.addEventListener('scroll', () => {
  if (!isReversing) {
    const targetRotation = lockerSections.scrollTop * 0.08; // Adjust the rotation speed as needed
    gsap.to(starLogo, {
      rotation: targetRotation,
      duration: 0.1, // Duration in seconds
      ease: "power2.out", // Smooth easing
      onUpdate: () => {
        rotation = gsap.getProperty(starLogo, "rotation");
      },
    });
  }
});

// Smooth scrolling back to the top of lockerSections and reverse rotation on click
logoContainer.addEventListener('click', (event) => {
  event.preventDefault();

  if (isReversing) return; // Prevent multiple reverse animations
  isReversing = true;

  // Reverse rotation during scroll-to-top animation
  const scrollDuration = 1; // Duration in seconds
  gsap.to(starLogo, {
    rotation: 0,
    duration: scrollDuration,
    ease: "power2.inOut",
    onUpdate: () => {
      rotation = gsap.getProperty(starLogo, "rotation");
    },
    onComplete: () => {
      rotation = 0;
      isReversing = false;
    },
  });

  // Scroll smoothly to the top of lockerSections
  lockerSections.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Select the logo-container and hamburger elements
  const logoIntro = document.querySelector('.logo-container');
  const hamburgerNav = document.querySelector('.hamburger');

  // Ensure the logo and hamburger are visible initially
  if (logoIntro) {
      logoIntro.classList.add('visible'); // Show logo
      console.log('Logo is visible');
  }

  if (hamburgerNav) {
      hamburgerNav.classList.add('visible'); // Show hamburger
      console.log('Hamburger is visible');
  }
});

let hamburgerClicking = false;

function hamburgerClick() {
  if (hamburgerClicking) return; // Prevent multiple rapid clicks
  hamburgerClicking = true;

  const hamburger = document.querySelector('.main-nav-toggle');
  const aboutNav = document.querySelector('.about');
  const workNav = document.querySelector('.work');

  // Toggle the menu visibility
  if (hamburger.classList.contains('active-menu')) {
      hamburger.classList.remove('active-menu');
      if (aboutNav) {
          aboutNav.classList.remove('visible'); // Hide about
          console.log('About section hidden');
      }
      if (workNav) {
          workNav.classList.remove('visible'); // Hide work
          console.log('Work section hidden');
      }
  } else {
      hamburger.classList.add('active-menu');
      if (aboutNav) {
          aboutNav.classList.add('visible'); // Show about
          console.log('About section visible');
      }
      if (workNav) {
          workNav.classList.add('visible'); // Show work
          console.log('Work section visible');
      }
  }

  // Prevent rapid clicks
  setTimeout(() => {
      hamburgerClicking = false;
  }, 500);
}

// Attach the click event to the hamburger
const hamburgerNav = document.querySelector('.hamburger');
if (hamburgerNav) {
  hamburgerNav.addEventListener('click', hamburgerClick);
}



   window.addEventListener("load", () => {
    // Delay checking for textElementOne until everything is loaded
    setTimeout(() => {
        const textElementOne = document.querySelector(".text--1");
        if (textElementOne) {
            console.log("Text element one is present:", textElementOne);
            textElementOne.style.opacity = "1";
            textElementOne.style.color = "#0f0f0f";
        } else {
            console.error("text--1 not found in the DOM.");
        }
    }, 100); // Delay the check a bit to make sure everything is loaded
});





//    document.addEventListener("DOMContentLoaded", () => {

//     window.scrollTo(0, 0);  
  
//     const sections = document.querySelectorAll(".locker__section");
//     const headers = document.querySelectorAll(".header");
  
//     const mainElement = document.querySelector('main');
//     // const projectsSection = document.querySelector(".projects-section");
  
   
//     mainElement.style.backgroundColor = "";
    
  
//         const textElementZero = document.querySelector(".text--0");
//         const textElementOne = document.querySelector(".text--1");
  
//       // Set text--1 opacity to 1 on load
//       if (textElementOne) {
//         textElementOne.style.opacity = "1";
//         textElementOne.style.color = "#0f0f0f";
//           console.log('hey')
//       } else {
//           console.error("text--0 not found in the DOM.");
//       }
        
  
//     // Function to reset all sections and styles
//     function resetActiveContent() {
//         console.log("Resetting active content");
  
//         sections.forEach((section) => {
//             const textElement = section.querySelector(".text");
//             const imgElement = section.querySelector("img");
//             const descriptionElement = textElement?.nextElementSibling;
  
//             // Reset active classes
//             if (textElement) textElement.classList.remove("active");
//             if (imgElement) imgElement.classList.remove("visible");
//             if (descriptionElement) descriptionElement.classList.remove("active");
//         });
  
//     }
  
//     // Function to activate the clicked section
//     function activateSection(targetClass) {
//         console.log("Activating section for:", targetClass);
  
//         // Find the corresponding section with the matching data-swap
//         const targetSection = document.querySelector(`.locker__section[data-swap="${targetClass}"]`);
//         if (!targetSection) {
//             console.log("Target section not found for class:", targetClass);
//             return;
//         }
  
//         // Select the elements inside the section
//         const textElement = targetSection.querySelector(`.text.${targetClass}`);
//         const imgElement = targetSection.querySelector("img");
//         const descriptionElement = textElement?.nextElementSibling;
  
//         // Debugging: Log elements to verify they're found
//         console.log("Text Element:", textElement); // Debugging
//         console.log("Image Element:", imgElement); // Debugging
//         console.log("Description Element:", descriptionElement); // Debugging
  
//         // Check if the textElement exists before proceeding
//         if (textElement) {
//             textElement.classList.add("active");
//         } else {
//             console.log("No text element found for target class:", targetClass);
//         }
  
//         // If image element is found, make it visible
//         if (imgElement) {
//             imgElement.classList.add("visible");
//             // Scroll the image into view and center it
//             imgElement.scrollIntoView({
//                 behavior: "smooth",
//                 block: "center" // Center the image
//             });
//         } else {
//             console.log("No image element found for target class:", targetClass);
//         }
  
//         // If description element exists, make it active
//         if (descriptionElement) {
//             descriptionElement.classList.add("active");
//         } else {
//             console.log("No description element found for target class:", targetClass);
//         }
  
//         // Change background based on the activated section
//         if (textElement && textElement.classList.contains("text--1")) {
//           mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 90%, #FFF5F5 30%, #F0F6FF 60%, #F0F6FF 100%)";
//           mainElement.style.backgroundColor = "";
//         } else if (textElement && textElement.classList.contains("text--2")) {
//           mainElement.style.backgroundColor = "";
//           mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 90%, #F2F1FC 30%, #F0F6FF 50%, #F0F6FF 100%)";
//         } else if (textElement && textElement.classList.contains("text--3")) {
//           mainElement.style.backgroundImage = "";
//           mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//         } else if (textElement && textElement.classList.contains("text--4")) {
//           mainElement.style.backgroundImage = "";
//           mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
//       } else if (textElement && textElement.classList.contains("text--5")) {
//           mainElement.style.backgroundImage = "";
//           mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//       } 
      
//     }
  
//     headers.forEach(header => {
//       console.log("Attaching click listener to header:", header);  // Debugging
//       header.addEventListener("click", (event) => {
//           console.log("Header clicked:", header);
 
//           // Get the target class based on the clicked header's class (text--1, text--2, text--3)
//           const targetClass = header.querySelector("h1").classList[1]; // Assuming text--1, text--2, or text--3 is always present
//           console.log("Target class for section:", targetClass);  // Debugging
 
//           // Reset all sections and styles before activating the new one
//           resetActiveContent();
 
//           // Activate the clicked section
//           activateSection(targetClass);
//       });
//   });
 

    
  
  
//     // Intersection Observer setup for scrolling
//     const options = { threshold: 0.5 };
//     const observer = new IntersectionObserver((entries) => {
//       let isAnySectionIntersecting = false;

//         entries.forEach((entry) => {
//             const targetClass = entry.target.dataset.swap;
//             const textElement = document.querySelector(`.text.${targetClass}`);
//             const imgElement = entry.target.querySelector("img");
//             const descriptionElement = textElement?.nextElementSibling;
  
  
//             // Log to ensure the target element is intersecting
//             console.log("Entry isIntersecting:", entry.isIntersecting);

//             if (entry.isIntersecting === false) {
//               mainElement.style.backgroundImage = "";
//               mainElement.style.backgroundColor = "";
//               }
  
//             if (entry.isIntersecting) {
//               isAnySectionIntersecting = true;
  
//                 if (textElementOne && textElement !== textElementOne) {
//                   textElementOne.style.opacity = ".3";
//                   console.log('test');
//               } else if (textElementOne && textElement === textElementOne) {
//                 textElementOne.style.opacity = "1";
//                 console.log('test 2');
//               } 
    

//     textElement?.classList.add("active");
//     imgElement?.classList.add("visible");
//     if (descriptionElement) descriptionElement.classList.add("active");

//     if (textElement && textElement.classList.contains("text--1")) {
//         mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, rgba(255, 245, 245, .85) 50%, rgba(240, 246, 255, .85) 65%, rgba(240, 246, 255, .85) 100%)";
//         mainElement.style.backgroundColor = "";
//         // testOne.style.filter = "none";
//     } else if (textElement && textElement.classList.contains("text--2")) {
//         mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, rgba(255, 245, 245, .85) 0%, rgba(242, 241, 252, .85) 55%, rgba(240, 246, 255, .85) 60%, rgba(240, 246, 255, .8) 100%)";
//         mainElement.style.backgroundColor = "";
//         // testOne.style.filter = "blur(1.25px)";
//         // testTwo.style.filter = "none";
//     } else if (textElement && textElement.classList.contains("text--3")) {
//       //  testTwo.style.filter = "blur(1.25px)";
//       //  testThree.style.filter = "none";
//         mainElement.style.backgroundImage = "";
//         mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//     } else if (textElement && textElement.classList.contains("text--4")) {
//         // testThree.style.filter = "blur(1.25px)";
//         // testFour.style.filter = "none";
//         mainElement.style.backgroundImage = "";
//         mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
//     } else if (textElement && textElement.classList.contains("text--5")) {
//         // testFour.style.filter = "blur(1.25px)";
//         mainElement.style.backgroundImage = "";
//         mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
//     }
// } else {
//     textElement?.classList.remove("active");
//     imgElement?.classList.remove("visible");
//     if (descriptionElement) descriptionElement.classList.remove("active");
// }
// });

// if (!isAnySectionIntersecting) {
// mainElement.style.backgroundImage = "";
// mainElement.style.backgroundColor = "";
// }
// }, options);
  
//     // Start observing each section
//     sections.forEach((section) => observer.observe(section));
//   });
  

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




  //  document.addEventListener("DOMContentLoaded", () => {

  //   // window.scrollTo(0, 0);  
  
  //   const sections = document.querySelectorAll(".locker__section");
  //   const headers = document.querySelectorAll(".header");
  
  //   const mainElement = document.querySelector('main');
  //   // const projectsSection = document.querySelector(".projects-section");
  
  //   // mainElement.style.backgroundImage = "radial-gradient(at 30% 50%, rgba(255, 245, 245, .75) 38%, rgba(240, 246, 255, 0.75) 80%, rgba(240, 246, 255, 0.75) 100%)";
  //   mainElement.style.backgroundColor = "";
  
    
  
  //       const textElementOne = document.querySelector(".text--1");
  
  //     // Set text--1 opacity to 1 on load
  //     if (textElementOne) {
  //         textElementOne.style.opacity = "1";
  //     } else {
  //         console.error("text--1 not found in the DOM.");
  //     }
        
  
  //   // Function to reset all sections and styles
  //   function resetActiveContent() {
  //       console.log("Resetting active content");
  
  //       sections.forEach((section) => {
  //           const textElement = section.querySelector(".text");
  //           const imgElement = section.querySelector("img");
  //           const descriptionElement = textElement?.nextElementSibling;
  
  //           // Reset active classes
  //           if (textElement) textElement.classList.remove("active");
  //           if (imgElement) imgElement.classList.remove("visible");
  //           if (descriptionElement) {
  //             descriptionElement.classList.remove("active");
  //             descriptionElement.style.maxHeight = '0'; 
  //           }
            
  //       });
  
  //   }
  
  //   // Function to activate the clicked section
  //   function activateSection(targetClass) {
  //       console.log("Activating section for:", targetClass);
  
  //       // Find the corresponding section with the matching data-swap
  //       const targetSection = document.querySelector(`.locker__section[data-swap="${targetClass}"]`);
  //       if (!targetSection) {
  //           console.log("Target section not found for class:", targetClass);
  //           return;
  //       }
  
  //       // Select the elements inside the section
  //       const textElement = targetSection.querySelector(`.text.${targetClass}`);
  //       const imgElement = targetSection.querySelector("img");
  //       const descriptionElement = textElement?.nextElementSibling;
  
  //       // Debugging: Log elements to verify they're found
  //       console.log("Text Element:", textElement); // Debugging
  //       console.log("Image Element:", imgElement); // Debugging
  //       console.log("Description Element:", descriptionElement); // Debugging
  
  //       // Check if the textElement exists before proceeding
  //       if (textElement) {
  //           textElement.classList.add("active");
  //       } else {
  //           console.log("No text element found for target class:", targetClass);
  //       }
  
  //       // If image element is found, make it visible
  //       if (imgElement) {
  //           imgElement.classList.add("visible");
  //           // Scroll the image into view and center it
  //           imgElement.scrollIntoView({
  //               behavior: "smooth",
  //               block: "center" // Center the image
  //           });
  //       } else {
  //           console.log("No image element found for target class:", targetClass);
  //       }
  
  //       // If description element exists, make it active
  //       if (descriptionElement) {
  //           descriptionElement.classList.add("active");
  //       } else {
  //           console.log("No description element found for target class:", targetClass);
  //       }
  
  //       // Change background based on the activated section
  //       if (textElement && textElement.classList.contains("text--1")) {
  //         mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 90%, #FFF5F5 30%, #F0F6FF 60%, #F0F6FF 100%)";
  //         mainElement.style.backgroundColor = "";
  //       } else if (textElement && textElement.classList.contains("text--2")) {
  //         mainElement.style.backgroundColor = "";
  //         mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 90%, #F2F1FC 30%, #F0F6FF 50%, #F0F6FF 100%)";
  //       } else if (textElement && textElement.classList.contains("text--3")) {
  //         mainElement.style.backgroundImage = "";
  //         mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
  //       } else if (textElement && textElement.classList.contains("text--4")) {
  //         mainElement.style.backgroundImage = "";
  //         mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
  //     } else if (textElement && textElement.classList.contains("text--5")) {
  //         mainElement.style.backgroundImage = "";
  //         mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
  //     } 
      
  //   }
  
  
  
  //   // Event listener for headers
  //   headers.forEach(header => {
  //       console.log("Attaching click listener to header:", header);  // Debugging
  //       header.addEventListener("click", (event) => {
  //           event.preventDefault();  // Optional, depending on the behavior you're expecting
  //           console.log("Header clicked:", header);
  
  //           // Get the target class based on the clicked header's class (text--1, text--2, text--3)
  //           const targetClass = header.querySelector("h1").classList[1]; // Assuming text--1, text--2, or text--3 is always present
  //           console.log("Target class for section:", targetClass);  // Debugging
  
  //           // Reset all sections and styles before activating the new one
  //           resetActiveContent();
  
  //           // Activate the clicked section
  //           activateSection(targetClass);
  //       });
  //   });
  
  //   // Intersection Observer setup for scrolling
  //   const options = { threshold: 0.5 };
  //   const observer = new IntersectionObserver((entries) => {
  //       entries.forEach((entry) => {
  //           const targetClass = entry.target.dataset.swap;
  //           const textElement = document.querySelector(`.text.${targetClass}`);
  //           const imgElement = entry.target.querySelector("img");
  //           const descriptionElement = textElement?.nextElementSibling;
  
  
  //           // Log to ensure the target element is intersecting
  //           console.log("Entry isIntersecting:", entry.isIntersecting);
                
  
  //           if (entry.isIntersecting) {
  //               // Make the corresponding text and image visible
  //               textElement?.classList.add("active");
  //               imgElement?.classList.add("visible");
  //               if (descriptionElement) descriptionElement.classList.add("active");
  
  
  //               if (textElementOne && textElement !== textElementOne) {
  //                 textElementOne.style.opacity = "0.3";
  //             } else if (textElementOne && textElement === textElementOne) {
  //                 textElementOne.style.opacity = "1";
  //             } 
  

              
  //           } else {
  //               // Remove visibility when out of view
  //               textElement?.classList.remove("active");
  //               imgElement?.classList.remove("visible");
  //               if (descriptionElement) descriptionElement.classList.remove("active");
  //           }
  
  
  //         const testOne = document.querySelector('.test--1');
  //         const testTwo = document.querySelector('.test--2');
  //         const testThree = document.querySelector('.test--3');
  //         const testFour = document.querySelector('.test--4');
  //         const testFive = document.querySelector('.test--5');
  
  //         const mainElement = document.querySelector('main');
  
  //           // If any textElement is intersecting, change background style
  //           if (entry.isIntersecting) {
  //               if (textElement === document.querySelector(".text--1")) {
  //                 mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, rgba(255, 245, 245, .85) 50%, rgba(240, 246, 255, .85) 65%, rgba(240, 246, 255, .85) 100%)";
  //                 mainElement.style.backgroundColor = "";
  //                   testOne.style.filter = "none";
  //               } else if (textElement === document.querySelector(".text--2")) {
  //                   testOne.style.filter = "blur(1.25px)";
  //                   testTwo.style.filter = "none";
  //                   mainElement.style.backgroundColor = "";
  //                   mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, rgba(255, 245, 245, .85) 0%, rgba(242, 241, 252, .85) 55%, rgba(240, 246, 255, .85) 60%, rgba(240, 246, 255, .8) 100%)";
  //               } else if (textElement === document.querySelector(".text--3")) {
  //                 testTwo.style.filter = "blur(1.25px)";
  //                 testThree.style.filter = "none";
  //                 mainElement.style.backgroundImage = "";
  //                 mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
  //               } else if (textElement && textElement.classList.contains("text--4")) {
  //                 testThree.style.filter = "blur(1.25px)";
  //                 testFour.style.filter = "none";
  //                 mainElement.style.backgroundImage = "";
  //                 mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
  //             } else if (textElement && textElement.classList.contains("text--5")) {
  //                 testFour.style.filter = "blur(1.25px)";
  //                 mainElement.style.backgroundImage = "";
  //                 mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
  //             } else if ((textElement !== document.querySelector(".text--1")) || (textElement !== document.querySelector(".text--2")) || (textElement !== document.querySelector(".text--3")) || (textElement !== document.querySelector(".text--4")) || (textElement !== document.querySelector(".text--5"))) {
  //                 mainElement.style.backgroundColor = "";
  //             }
  //           } else {
  //               // Optional: Reset the background styles when no text is intersecting
  //             //   mainElement.body.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, #FFF5F5 0%, #F0F6FF 70%, #F0F6FF 100%)";
  //             //   mainElement.style.backgroundColor = "";
  //           }
  
  
  //       });
  //   }, options);
  
  //   // Start observing each section
  //   sections.forEach((section) => observer.observe(section));
  // });



//   document.addEventListener("DOMContentLoaded", () => {
//     var played = false; // Flag to check if the audio has been played

//     // Get the section with class .text--4
//     const sectionText4 = document.querySelector('.text--4');
//     const countdownSound = new Audio('./audio/the-vibe.mp3'); // Your countdown audio
//     const lockerSections = document.querySelector('.locker__sections'); // The scrollable section

//     // Track the scroll event on the .locker__sections element
//     lockerSections.addEventListener('scroll', function() {
//         var elemTop = sectionText4.offsetTop - lockerSections.offsetTop, // Top of the section relative to .locker__sections
//             elemHeight = sectionText4.offsetHeight, // Height of the section
//             containerHeight = lockerSections.clientHeight, // Height of the scrollable container
//             containerScroll = lockerSections.scrollTop; // Current scroll position within .locker__sections

//         // Check if the user has scrolled to the section
//         if (containerScroll + containerHeight > elemTop + elemHeight && !played) {
//             countdownSound.play(); // Play the countdown sound
//             played = true; // Set the flag to true so the sound only plays once
//         }
//     });
// });



  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".locker__section");
    const headers = document.querySelectorAll(".header");
    const mainElement = document.querySelector('main');
    const textElementOne = document.querySelector(".text--1");
    const textElementTwo = document.querySelector(".text--2");
    const textElementThree = document.querySelector(".text--2");
    const imageFour = document.querySelector(".image--4");
    const sectionsBackground = document.getElementById('locker__sections-background');
    const headerText = document.querySelectorAll(".locker__container h1");
    const audio = document.getElementById("audio");
    const lockerSections = document.querySelector(".locker__sections");


    // Flag to check if the user has scrolled or clicked at least once
    let userHasInteracted = false;

  // Detect the first scroll event on .locker__sections
  lockerSections.addEventListener("scroll", () => {
    if (!userHasInteracted) {
        userHasInteracted = true;
        console.log('User scrolled within .locker__sections');
    }
});

    
    // Detect the first click event to ensure the browser allows audio to play
    document.body.addEventListener("click", () => {
        if (!userHasInteracted) {
            userHasInteracted = true;
            console.log('click')
        }
    });

    // Detect the first click event to ensure the browser allows audio to play
    document.body.addEventListener("mousemove", () => {
      if (!userHasInteracted) {
          userHasInteracted = true;
          console.log('click')
      }
  });


    // Set to track intersected elements
    const intersectedTextElements = new Map ();

    // Set text--1 opacity to 1 on load
    if (textElementOne) {
        textElementOne.style.opacity = "1";
        textElementOne.style.color = "#0f0f0f";
    } else {
        console.error("text--1 not found in the DOM.");
    }

    // Function to reset background and opacity
    function resetStyles() {
        mainElement.style.backgroundImage = "";
        mainElement.style.backgroundColor = "";
        if (textElementOne) textElementOne.style.opacity = "1";
    }


          //     const testOne = document.querySelector('.test--1');
          // const testTwo = document.querySelector('.test--2');
          // const testThree = document.querySelector('.test--3');
          // const testFour = document.querySelector('.test--4');
          // const testFive = document.querySelector('.test--5');


    // Function to handle background updates based on text elements
    function updateBackgroundAndOpacity(textElement) {
        if (textElement === document.querySelector(".text--1")) {
            // mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, #E9F2EF 0%, #E9F2EF 30%, #F2E9EC 85%)";
            mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, #E9F2EF 0%, #E9F2EF 30%, #F2E9EC 85%, #F2E9EC00 100%)";
            // mainElement.style.backgroundImage = "radial-gradient(ellipse 99% 99% at 25% 75%, rgb(233, 242, 239) 0%, rgb(233, 242, 239) 30%, rgb(242, 233, 236) 75%, rgba(242, 233, 236, 0) 95%)";
            sectionsBackground.style.backgroundImage = "url('./img/Texture.png')";
            mainElement.style.backgroundColor = "";
          //   headerText.forEach(header => {
          //     header.style.color = "#DCC4D7"; 
          //     header.style.opacity = ".7"; 
          // });
            if (textElementOne) textElementOne.style.opacity = "1";
            textElementOne.style.color = "#0F0F0F";
        } else if (textElement && textElement.classList.contains("text--2")) {
        //   headerText.forEach(header => {
        //     header.style.color = "#A2A2A2"; 
        //     header.style.opacity = ".45"; 
        // });
        // if (textElementTwo) textElementTwo.style.opacity = "1";
        // textElementTwo.style.color = "#0F0F0F";
           
            mainElement.style.backgroundColor = "";
            // mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 90%, #F2F1FC 30%, #F0F6FF 50%, #F0F6FF 100%)";
            if (textElementOne) {
              textElementOne.style.opacity = "0.45";
              textElementOne.style.color = "#A2A2A2";
            }
        } else if (textElement && textElement.classList.contains("text--3")) {
        //  textElementTwo.style.opacity = ".45";
        //   textElementTwo.style.color = "#A2A2A2";
        //    textElementThree.style.opacity = "1";
        //   textElementThree.style.color = "#0F0F0F";
            mainElement.style.backgroundImage = "";
            // mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
            // fadeOutAudio(audio, 5);
        } else if (textElement && textElement.classList.contains("text--4")) {
            mainElement.style.backgroundImage = "";
            // mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";
       
            if (userHasInteracted) {
              // If image4 comes into view and user has interacted, fade-in the audio
              fadeInAudio(audio, 5);
              console.log('hi')
          } else {
              // If image4 leaves the view, fade-out the audio
              fadeOutAudio(audio, 5);
              console.log('bye')
          }
    } else if (textElement && textElement.classList.contains("text--5")) {
      // fadeOutAudio(audio, 5);
            mainElement.style.backgroundImage = "";
            imageFour.style.border = ""
            // mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
        }
    }


    function fadeInAudio(audio, duration) {
        let startTime = null;

        function fadeStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                audio.volume = progress; // Increase volume gradually
                requestAnimationFrame(fadeStep);
            } else {
                audio.volume = 1; // Ensure volume is fully 1 after the fade-in
            }
        }

        audio.currentTime = 0; // Reset the audio to the start
        audio.play().catch(error => {
            console.error("Audio play failed:", error);
        }); // Start the audio
        requestAnimationFrame(fadeStep); // Start the fade-in animation
    }

    // Fade-out function to gradually decrease the volume
    function fadeOutAudio(audio, duration) {
        let startTime = null;

        function fadeStep(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = (timestamp - startTime) / (duration * 1000);

            if (progress < 1) {
                audio.volume = 1 - progress; // Decrease volume gradually
                requestAnimationFrame(fadeStep);
            } else {
                audio.volume = 0; // Ensure volume is fully 0 after fade-out
                audio.pause(); // Pause the audio when it reaches the end of the fade
                audio.currentTime = 0; // Reset to the start
            }
        }

        requestAnimationFrame(fadeStep); // Start the fade-out animation
    }

    // Function to reset all sections
    function resetActiveContent() {
        sections.forEach((section) => {
            const textElement = section.querySelector(".text");
            const imgElement = section.querySelector("img");
            const descriptionElement = textElement?.nextElementSibling;

            if (textElement) textElement.classList.remove("active");
            if (imgElement) imgElement.classList.remove("visible");
            if (descriptionElement) {
                descriptionElement.classList.remove("active");
                descriptionElement.style.maxHeight = '0';
            }
        });
    }

    // Function to activate a specific section
    function activateSection(targetClass) {
        const targetSection = document.querySelector(`.locker__section[data-swap="${targetClass}"]`);
        if (!targetSection) return;

        const textElement = targetSection.querySelector(`.text.${targetClass}`);
        const imgElement = targetSection.querySelector("img");
        const descriptionElement = textElement?.nextElementSibling;

        if (textElement) textElement.classList.add("active");
        if (imgElement) {
            imgElement.classList.add("visible");
            imgElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        if (descriptionElement) descriptionElement.classList.add("active");

        updateBackgroundAndOpacity(textElement);
    }

    // Event listener for headers
    headers.forEach(header => {
        header.addEventListener("click", (event) => {
            event.preventDefault();
            const targetClass = header.querySelector("h1").classList[1];
            resetActiveContent();
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
            // const imgContainer = document.querySelector('.image-container')



            if (entry.isIntersecting) {
              if (textElement) {
                  textElement.classList.add("active");

                  // // Only apply the blur after leaving the active state
                  // if (!intersectedTextElements.has(targetClass)) {
                  //     // First time intersecting (after removing active class)
                  //     intersectedTextElements.set(targetClass, "first");
                  // } else if (intersectedTextElements.get(targetClass) === "first") {
                  //     // Remove blur the second time the element is intersected
                  //     textElement.style.filter = "none";
                  //     intersectedTextElements.set(targetClass, "second");
                  // }

                  updateBackgroundAndOpacity(textElement);
              }
              imgElement?.classList.add("visible");
              descriptionElement?.classList.add("active");

              if (targetClass === "text--4") {

              }
          } else {
              textElement?.classList.remove("active");
              imgElement?.classList.remove("visible");
              descriptionElement?.classList.remove("active");

              // // After the active class is removed, apply blur
              // if (textElement && intersectedTextElements.has(targetClass)) {
              //     if (intersectedTextElements.get(targetClass) === "first") {
              //         textElement.style.filter = "blur(1.25px)";
              //     }
              //     intersectedTextElements.set(targetClass, "first");
              // }
          }




            // Reset styles when scrolling past the top section
            if (!entry.isIntersecting && targetClass === "text--1") {
                resetStyles();
                
            }
        });
    }, options);

    // Start observing each section
    sections.forEach((section) => observer.observe(section));
});










document.addEventListener("DOMContentLoaded", () => {
  const mainElement = document.querySelector('main');
  const projectOne = document.querySelector(".project-one");

  // Function to reset background and opacity
  function resetStyles() {
      mainElement.style.backgroundImage = "";
      mainElement.style.backgroundColor = "";
      console.log("Background and styles reset.");
  }

  // Intersection Observer to track .project-one at 50% viewport
  const options = {
      threshold: 0.5 // Trigger when 50% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              // If .project-one reaches 50% viewport, reset background and styles
              if (entry.target.classList.contains("project-one")) {
                  resetStyles();
              }
          }
      });
  }, options);

  // Start observing the .project-one element
  if (projectOne) {
      observer.observe(projectOne);
  } else {
      console.error(".project-one not found in the DOM.");
  }
});




document.addEventListener("DOMContentLoaded", () => {
  const projectOne = document.querySelector(".project-one");
  const footer = document.querySelector("footer");
  const projectsSection = document.querySelector(".projects-section");
  const lockerContainer = document.querySelector(".locker__content");
  const mainElement = document.querySelector('main');

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
            mainElement.style.backgroundImage = "";
            mainElement.style.backgroundColor = "";
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
