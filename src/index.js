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
const hamburger = document.querySelector('.hamburger');
const aboutButton = document.querySelector('.about');
const workButton = document.querySelector('.work');

// Create the circle elements
const circle = document.createElement('div');
circle.classList.add('circle');
logoContainer.appendChild(circle);

const hamburgerCircle = document.createElement('div');
hamburgerCircle.classList.add('hamburger-circle');
hamburger.appendChild(hamburgerCircle);

const aboutButtonCircle = document.createElement('div');
aboutButtonCircle.classList.add('about-circle');
aboutButton.appendChild(aboutButtonCircle);

const workButtonCircle = document.createElement('div');
workButtonCircle.classList.add('work-circle');
workButton.appendChild(workButtonCircle);

// Function to update button sizes dynamically
function updateButtonSizes(button, circle) {
  const buttonWidth = button.getBoundingClientRect().width;
  const buttonHeight = button.getBoundingClientRect().height;

  // Dynamically set the circle size
  gsap.to(circle, {
    width: `${buttonWidth}px`,
    height: `${buttonHeight}px`,
    duration: 0.2,
    ease: 'power2.out',
  });
}

// Hover animations
logoContainer.addEventListener('mouseenter', () => {
  gsap.to(circle, {
    width: '50px',
    height: '50px',
    duration: 0.2,
    ease: 'power2.out',
  });
});

logoContainer.addEventListener('mouseleave', () => {
  gsap.to(circle, {
    width: 0,
    height: 0,
    duration: 0.2,
    ease: 'power2.in',
  });
});

aboutButton.addEventListener('mouseenter', () => {
  // Update circle size dynamically when hovered
  updateButtonSizes(aboutButton, aboutButtonCircle);
});

aboutButton.addEventListener('mouseleave', () => {
  gsap.to(aboutButtonCircle, {
    width: 0,
    height: 0,
    duration: 0.2,
    ease: 'power2.in',
  });
});

workButton.addEventListener('mouseenter', () => {
  // Update circle size dynamically when hovered
  updateButtonSizes(workButton, workButtonCircle);
});

workButton.addEventListener('mouseleave', () => {
  gsap.to(workButtonCircle, {
    width: 0,
    height: 0,
    duration: 0.2,
    ease: 'power2.in',
  });
});

hamburger.addEventListener('mouseenter', () => {
  gsap.to(hamburgerCircle, {
    width: '50px',
    height: '50px',
    duration: 0.2,
    ease: 'power2.out',
  });
});

hamburger.addEventListener('mouseleave', () => {
  gsap.to(hamburgerCircle, {
    width: 0,
    height: 0,
    duration: 0.2,
    ease: 'power2.in',
  });
});

const projectRightElements = document.querySelectorAll('.project-right');

projectRightElements.forEach((projectRight) => {
  const projectButton = projectRight.querySelector('.project-button');

  if (!projectButton) return; // Ensure there's a button inside project-right

  projectRight.addEventListener('mouseenter', () => {
    let projectCircle = projectButton.querySelector('.project-circle');

    // Create the circle only if it doesn't exist
    if (!projectCircle) {
      projectCircle = document.createElement('div');
      projectCircle.classList.add('project-circle');
      projectButton.appendChild(projectCircle);
    }

    // Animate expansion
    gsap.to(projectCircle, {
      width: '32px',
      height: '32px',
      duration: 0.15,
      ease: 'power2.out',
    });
  });

  projectRight.addEventListener('mouseleave', () => {
    const projectCircle = projectButton.querySelector('.project-circle');

    if (projectCircle) {
      gsap.to(projectCircle, {
        width: 0,
        height: 0,
        duration: 0.15,
        ease: 'power2.in',
        onComplete: () => {
          projectCircle.remove(); // Remove after animation completes
        },
      });
    }
  });
});


let rotation = 0;
let isReversing = false;
let isScrollingToTop = false;

// Track rotation for the star logo
lockerSections.addEventListener('scroll', () => {
  if (!isReversing && !isScrollingToTop) {

    const targetRotation = lockerSections.scrollTop * 0.03; // Adjust the rotation speed as needed
    gsap.to(starLogo, {
      rotation: targetRotation,
      // duration: 0.3, // Duration in seconds
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

  if (isReversing || isScrollingToTop) return; // Prevent multiple reverse animations or scroll-to-top while already scrolling

  isReversing = true;
  isScrollingToTop = true; // Indicate that scrolling to the top is in progress

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
      isScrollingToTop = false; // Allow further scroll events after completing the animation
    },
  });

  // Scroll smoothly to the top of lockerSections
  lockerSections.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});




// // Track rotation for the star logo
// let rotation = 0;
// let isReversing = false;

// // Rotate the star logo on scroll within lockerSections
// lockerSections.addEventListener('scroll', () => {
//   if (!isReversing) {
//     const targetRotation = lockerSections.scrollTop * 0.07; // Adjust the rotation speed as needed
//     gsap.to(starLogo, {
//       rotation: targetRotation,
//       duration: 0.1, // Duration in seconds
//       ease: "power1.out", // Smooth easing
//       onUpdate: () => {
//         rotation = gsap.getProperty(starLogo, "rotation");
//       },
//     });
//   }
// });

// // Smooth scrolling back to the top of lockerSections and reverse rotation on click
// logoContainer.addEventListener('click', (event) => {
//   event.preventDefault();

//   if (isReversing) return; // Prevent multiple reverse animations
//   isReversing = true;

//   // Reverse rotation during scroll-to-top animation
//   const scrollDuration = 1; // Duration in seconds
//   gsap.to(starLogo, {
//     rotation: 0,
//     duration: scrollDuration,
//     ease: "power2.inOut",
//     onUpdate: () => {
//       rotation = gsap.getProperty(starLogo, "rotation");
//     },
//     onComplete: () => {
//       rotation = 0;
//       isReversing = false;
//     },
//   });

//   // Scroll smoothly to the top of lockerSections
//   lockerSections.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// });


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



  //  document.querySelector(".about").addEventListener("click", () => {
  //   const aboutContainer = document.getElementById("about");
  // // Scroll smoothly to the top of lockerSections
  // aboutContainer.scrollTo({
  //   top: 0,
  //   behavior: 'smooth',
  // });
  // })


  document.querySelector('.about a').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
  

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
    const textElementThree = document.querySelector(".text--3");
    const textElementFour = document.querySelector(".text--4");
    const textElementFive = document.querySelector(".text--5");
    const imageFour = document.querySelector(".image--4");
    const sectionsBackground = document.getElementById('locker__sections-background');
    const headerText = document.querySelectorAll(".locker__container h1");
    const audio = document.getElementById("audio");
    const lockerSections = document.querySelector(".locker__sections");
    const lockerSectionFour = document.querySelector(".locker__section--4");
    let lastIntersectedSection = null;
    // const overlay = document.querySelector('.overlay');
    const image1 = document.querySelector(".image--1");
    // const backgroundTexture = document.querySelector('.background-texture');
    const superscript = document.querySelectorAll('sup');

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
        // overlay.style.animation = ''; // Clear the animation property to avoid re-triggering
        //   overlay.style.backgroundImage = 'none'; // Reset the background image
        //   overlay.style.display = 'none'; // Optionally hide the overlay if it's no longer needed
    }


          //     const testOne = document.querySelector('.test--1');
          // const testTwo = document.querySelector('.test--2');
          // const testThree = document.querySelector('.test--3');
          // const testFour = document.querySelector('.test--4');
          // const testFive = document.querySelector('.test--5');

          function isMobile() {
            return window.innerWidth <= 768; // You can adjust the value as needed for your mobile breakpoint
        }

        if (!isMobile()) {
          image1.addEventListener("mouseover", () => {
              image1.classList.add("hovered"); // Apply fade-out effect
              image1.src = './img/tiffers.jpg'; // Change image source
          });
      
          image1.addEventListener("mouseout", () => {
              image1.classList.remove("hovered"); // Remove fade-out effect
              image1.src = './img/tiffers.png'; // Revert to original image
          });
      } else {
          // Optionally, if the user is on mobile, remove hover behavior
          image1.style.transition = "none"; // Disable transition for mobile users
          image1.addEventListener("click", () => {
              // Add click functionality for mobile (optional)
              if (image1.src.includes("tiffers.png")) {
                  image1.src = './img/tiffers.jpg'; // Change to the other image
              } else {
                  image1.src = './img/tiffers.png'; // Change back to the original
              }
          });
      }



    // Function to handle background updates based on text elements
    function updateBackgroundAndOpacity(textElement) {
        if (textElement === document.querySelector(".text--1")) {


          superscript.forEach(superElement => {
            const superText = superElement.textContent.trim();
          
            if (superText === '(01)') {
              superElement.textContent = '(👋)';
            } 
            else if (superText === '()') {
              superElement.textContent = '(👋)';
            }  else if (superText === '(🌱)') {
              superElement.textContent = '(02)';
            } 
          });
          
  


    
          // overlay.style.display = 'block';
          // overlay.style.animation = 'gradient-animation 0.75s ease forwards';

          sectionsBackground.style.backgroundImage = "";
            // mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, #E9F2EF 0%, #E9F2EF 30%, #F2E9EC 85%)";
            // mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 100%, #E9F2EF 0%, #E9F2EF 30%, #F2E9EC 85%, #F2E9EC00 100%)";
            // mainElement.style.backgroundImage = "radial-gradient(ellipse 99% 99% at 25% 75%, rgb(233, 242, 239) 0%, rgb(233, 242, 239) 30%, rgb(242, 233, 236) 75%, rgba(242, 233, 236, 0) 95%)";
            // mainElement.style.backgroundImage = "radial-gradient(at 50% 50%, rgba(250, 96, 201, 1) 0%, rgba(250, 96, 201, 0) 100%)";
            // mainElement.style.backgroundColor = "";

        
          //   headerText.forEach(header => {
          //     header.style.color = "#DCC4D7"; 
          //     header.style.opacity = ".7"; 
          // });
            if (textElementOne) textElementOne.style.opacity = "1";
            textElementOne.style.color = "#0F0F0F";
            textElementOne.style.filter = "";
        } else if (textElement && textElement.classList.contains("text--2")) {

          superscript.forEach(superElement => {
            const superText = superElement.textContent.trim();
          
            if (superText === '(👋)') {
              superElement.textContent = '(01)';
            } 
            else if (superText === '(02)') {
              superElement.textContent = '(🌱)';
            } else if (superText === '(🕵️‍♀️)') {
              superElement.textContent = '(03)';
            } 
          });

          // overlay.style.animation = ''; // Clear the animation property to avoid re-triggering
          // overlay.style.backgroundImage = 'none'; // Reset the background image
          // overlay.style.display = 'none'; // Optionally hide the overlay if it's no longer needed

          // overlay.style.display = 'block';
          // overlay.style.animation = 'gradient-animation-yellow 0.75s ease forwards';
  

          // document.querySelector(".image--2").style.display = 'none';

          sectionsBackground.style.backgroundImage = "";
        //   headerText.forEach(header => {
        //     header.style.color = "#A2A2A2"; 
        //     header.style.opacity = ".45"; 
        // });
        // if (textElementTwo) textElementTwo.style.opacity = "1";
        // textElementTwo.style.color = "#0F0F0F";
        // backgroundTexture.style.display = "none";
           
            mainElement.style.backgroundColor = "";
            // mainElement.style.backgroundImage = "radial-gradient(farthest-corner at 0% 90%, #F2F1FC 30%, #F0F6FF 50%, #F0F6FF 100%)";
            if (textElementOne) {
              textElementOne.style.opacity = "0.45";
              textElementOne.style.color = "#A2A2A2";
            }
            textElementOne.style.filter = "blur(1.5px)";
            textElementTwo.style.filter = "";
        } else if (textElement && textElement.classList.contains("text--3")) {


          superscript.forEach(superElement => {
            const superText = superElement.textContent.trim();
          
            if (superText === '(🌱)') {
              superElement.textContent = '(02)';
            } 
            else if (superText === '(03)') {
              superElement.textContent = '(🕵️‍♀️)';
            } else if (superText === '(🎹)') {
              superElement.textContent = '(04)';
            } 
          });


          // overlay.style.animation = ''; // Clear the animation property to avoid re-triggering
          // overlay.style.backgroundImage = 'none'; // Reset the background image
          // overlay.style.display = 'none'; // Optionally hide the overlay if it's no longer needed

          // overlay.style.display = 'block';
          // overlay.style.animation = 'gradient-animation-black 0.75s ease forwards';

          // backgroundTexture.style.display = "block";

          textElementTwo.style.filter = "blur(1.5px)";
          textElementThree.style.filter = "";
        //  textElementTwo.style.opacity = ".45";
        //   textElementTwo.style.color = "#A2A2A2";
        //    textElementThree.style.opacity = "1";
        //   textElementThree.style.color = "#0F0F0F";
            mainElement.style.backgroundImage = "";
            // mainElement.style.backgroundColor = "rgba(255, 165, 0, .5)";
            // fadeOutAudio(audio, 5);
            // Remove the "visible" class to hide the image and box-shadow
document.querySelector('.overlay-image').classList.remove('visible');
document.querySelector('.background-image').classList.remove('visible');
        } else if (textElement && textElement.classList.contains("text--4")) {



          superscript.forEach(superElement => {
            const superText = superElement.textContent.trim();
          
            if (superText === '(04)') {
              superElement.textContent = '(🎹)';
            } 
            else if (superText === '(🕵️‍♀️)') {
              superElement.textContent = '(03)';
            } 
          });

          // backgroundTexture.style.display = "none";


          // overlay.style.animation = ''; // Clear the animation property to avoid re-triggering
          // overlay.style.backgroundImage = 'none'; // Reset the background image
          // overlay.style.display = 'none'; // Optionally hide the overlay if it's no longer needed

          // overlay.style.display = 'block';
          // overlay.style.animation = 'gradient-animation-cyan 0.75s ease forwards';

          textElementThree.style.filter = "blur(1.5px)";
          textElementFour.style.filter = "";
            mainElement.style.backgroundImage = "";
            // mainElement.style.backgroundColor = "rgba(255, 0, 0, .5)";

            // Add the "visible" class to show the image and box-shadow

document.querySelector('.overlay-image').classList.add('visible');
document.querySelector('.background-image').classList.add('visible');


       
          //   if (userHasInteracted) {
          //     // If image4 comes into view and user has interacted, fade-in the audio
          //     fadeInAudio(audio, 5);
          //     console.log('hi')

          // } else {
          //     // If image4 leaves the view, fade-out the audio
          //     fadeOutAudio(audio, 5);
          //     console.log('bye')
          // }
          


    } else if (textElement && textElement.classList.contains("text--5")) {



      superscript.forEach(superElement => {
        const superText = superElement.textContent.trim();
      
        if (superText === '(🎹)') {
          superElement.textContent = '(04)';
        } 
      });

      document.querySelector('.overlay-image').classList.remove('visible');
document.querySelector('.background-image').classList.remove('visible');
      // overlay.style.animation = ''; // Clear the animation property to avoid re-triggering
      //     overlay.style.backgroundImage = 'none'; // Reset the background image
      //     overlay.style.display = 'none'; // Optionally hide the overlay if it's no longer needed
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
    // headers.forEach(header => {
    //     header.addEventListener("click", (event) => {
    //         event.preventDefault();
    //         const targetClass = header.querySelector("h1").classList[1];
    //         resetActiveContent();
    //         activateSection(targetClass);
    //     });
    // });
    headers.forEach(header => {
      header.addEventListener("click", (event) => {
          event.preventDefault();
          const targetClass = header.querySelector("h1").classList[1];
          resetActiveContent();
  
          const targetSection = document.querySelector(`.locker__section[data-swap="${targetClass}"]`);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          
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
                  lastIntersectedSection = targetClass;

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


          } else {
              textElement?.classList.remove("active");
              imgElement?.classList.remove("visible");
              descriptionElement?.classList.remove("active");


              
          }


  // Check if last intersected section was "text--5"
  if (!entry.isIntersecting && lastIntersectedSection === "text--5") {
    if (textElementFour) {
        textElementFour.style.filter = "blur(1.25px)";
    }
}

            // Reset styles when scrolling past the top section
            if (!entry.isIntersecting && targetClass === "text--1") {
                resetStyles();
                // overlay.style.animation = ''; // Clear the animation property to avoid re-triggering
                // overlay.style.backgroundImage = 'none'; // Reset the background image
                // overlay.style.display = 'none'; // Optionally hide the overlay if it's no longer needed

                superscript.forEach(superElement => {
                  const superText = superElement.textContent.trim();
                
                  if (superText === '(👋)') {
                    superElement.textContent = '(01)';
                  } 
                
                });
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
  const projectOne = document.querySelector(".section");
  const footer = document.querySelector("footer");
  const projectsSection = document.querySelector(".projects-section");
  const lockerContainer = document.querySelector(".locker__content");
  const lockerSection = document.querySelector(".locker__sections"); // Track only the actual locker section
  const mainElement = document.querySelector('main');
  const fourthTextElement = document.querySelector(".text--4");

  // Shared state to track intersections
  let projectOneInView = false;
  let footerInView = false;
  let projectsSectionInView = false;
  let lockerInView = false;  // Track visibility of locker section specifically
  let projectOneWasInView = false; // To track the state of projectOne leaving the viewport

  // Function to update lockerContainer visibility
  const updateLockerVisibility = () => {
    console.log({ projectOneInView, footerInView, projectsSectionInView, lockerInView });

    // If projectOne is in view, hide the lockerContainer
    if (projectOneInView || footerInView || projectsSectionInView) {
      gsap.to(lockerContainer, { opacity: 0, duration: 0.5, ease: "power2.out" });
    } else {
      // If projectOne is NOT in view, check if the locker section is in view
      if (lockerInView) {
        // Show the lockerContainer if locker section is visible
        gsap.to(lockerContainer, { opacity: 1, duration: 0.5, ease: "power2.in" });
      }
    }
  };

  // Observer for projectOne visibility
  const observerOne = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === projectOne) {
          if (entry.isIntersecting) {
            projectOneInView = true;  // When projectOne is in view, hide lockerContainer
            gsap.to(lockerContainer, { opacity: 0, duration: 0.5, ease: "power2.out" });
            console.log("Project One is in view, hiding locker");
          } else {
            projectOneInView = false;  // When projectOne is out of view, check locker section
            // Make sure we set the flag for tracking when projectOne leaves the viewport
            projectOneWasInView = true;
          }
          console.log({
            boundingClientRect: entry.boundingClientRect,
            intersectionRatio: entry.intersectionRatio,
            isIntersecting: entry.isIntersecting,
          });
        }
      });
      updateLockerVisibility();
    },
    { threshold: 0.3 } // Trigger when 30% of projectOne is in view
  );

  // Observer for the locker section visibility (not the locker content itself)
  const observerTwo = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === lockerSection) {  // Now we're observing the locker section
          lockerInView = entry.isIntersecting;  // Update when locker section is in view
          console.log("Locker section is in view:", lockerInView);
        }
      });
      updateLockerVisibility();  // Adjust the visibility of locker based on this
      console.log({
        boundingClientRect: entry.boundingClientRect,
        intersectionRatio: entry.intersectionRatio,
        isIntersecting: entry.isIntersecting,
      });
    },
    { threshold: 0.1 } // Trigger when 10% of locker section is in view
  );

  // Observer for footer visibility (same logic as before)
  const observerThree = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === footer) {
          footerInView = entry.isIntersecting;
          console.log('Footer in view:', footerInView);
        }
        console.log({
          boundingClientRect: entry.boundingClientRect,
          intersectionRatio: entry.intersectionRatio,
          isIntersecting: entry.isIntersecting,
        });
      });
      updateLockerVisibility();  // Adjust the visibility of locker based on footer visibility
    },
    { threshold: 0 } // Trigger when footer is visible
  );


    // Observer for footer visibility (same logic as before)
    const observerFour = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === projectsSection) {
            projectsSectionInView = entry.isIntersecting;
            console.log('Projects section in view:', projectsSectionInView);
          }
          console.log({
            boundingClientRect: entry.boundingClientRect,
            intersectionRatio: entry.intersectionRatio,
            isIntersecting: entry.isIntersecting,
          });
        });
        updateLockerVisibility();  // Adjust the visibility of locker based on footer visibility
      },
      
      { threshold: 0 } // Trigger when footer is visible
    );
  // Observe elements with their respective observers
  observerOne.observe(projectOne);  // Observe the first section (projectOne)
  observerTwo.observe(lockerSection);  // Observe the actual locker section (not the locker content)
  observerThree.observe(footer);  // Observe footer visibility
  observerFour.observe(projectsSection);  // Observe footer visibility
});



document.addEventListener("DOMContentLoaded", () => {
  const bottomText = document.querySelector(".header--1.bottom");
  const topText = document.querySelector(".header--2.top");
  const topCenterText = document.querySelector(".header--3.bottom");
  const bottomCenterText = document.querySelector(".header--4.top");
  const lockerSections = document.querySelector("  .locker__sections");

 let animationFinished = false;

 if (animationFinished == false) {
  lockerSections.style.overflowY = "hidden";
 }

  // Create a timeline for sequential animations
  const timeline = gsap.timeline({
    onComplete: () => {
      console.log("All animations in the timeline have finished!");
      // Additional code to execute when the entire timeline is done
      animationFinished = true;
      lockerSections.style.overflowY = "scroll";
    }
  });

  // Animate topText (2) and topCenterText (3) simultaneously
  timeline.to([topText, topCenterText], {
    duration: .7,
    y: 0,
    opacity: 1,
    ease: "power2.out",
    onComplete: () => {
      animationFinished = false;
      console.log(animationFinished);
    }
  }, "+=0.6");

  // Animate bottomText (1) and bottomCenterText (4) simultaneously
  timeline.to([bottomText, bottomCenterText], {
    duration: .7,
    y: 0,
    opacity: 1,
    ease: "power2.out",
    onComplete: () => {
      animationFinished = false;
      console.log(animationFinished);
    }
  }, "+=0.2");
});


let currentIndex = 0;
const images = document.querySelectorAll('.image-flash-slider .hey');

function flashImages() {
  // Hide all images
  images.forEach((img) => img.classList.remove('visible'));

  // Show the current image
  images[currentIndex].classList.add('visible');

  // Move to the next image (loop back to the first after the last)
  currentIndex = (currentIndex + 1) % images.length;
}

// Automatically change images every 500ms
setInterval(flashImages, 500);

// Initialize the first image as visible
images[currentIndex].classList.add('visible');

// Select all elements with the class "first-container"
const firstContainers = document.querySelectorAll('.first-container');

// Get the grid container
const gridContainer = document.querySelector('.grid');

// Function to set the height dynamically
function setFirstContainerHeight() {
    // Get the computed styles of the grid container
    const gridStyles = window.getComputedStyle(gridContainer);
    const gridRows = gridStyles.gridTemplateRows.split(" ");

    // Extract row heights
    const firstRow = parseFloat(gridRows[0]); // The fixed "1rem" row (assumed to be in pixels)
    const remainingRows = gridRows.slice(1).map(parseFloat); // Convert "1fr" to numbers

    // Calculate 1fr in pixels
    const totalFr = remainingRows.length;
    const totalHeight = gridContainer.clientHeight - firstRow; // Subtract the fixed 1rem row
    const frValue = totalHeight / totalFr; // Height of 1fr in pixels

    // Calculate desired height (1fr + 1rem)
    const targetHeight = frValue + firstRow; 

    // Apply the calculated height to all elements
    firstContainers.forEach(container => {
        container.style.height = `${targetHeight}px`;
    });
}

// Run on page load and resize
window.addEventListener('load', setFirstContainerHeight);
window.addEventListener('resize', setFirstContainerHeight);



document.addEventListener('DOMContentLoaded', () => {
  const image = document.querySelector('.image--3');
  const container = document.querySelector('.locker__section--3');

  // Create the fixed circle with a glass effect
  const glassCircle = document.createElement('div');
  glassCircle.classList.add('glass-circle');
  container.appendChild(glassCircle);

  // Style the glass circle
  Object.assign(glassCircle.style, {
    position: 'absolute',
    width: '148px',
    height: '148px',
    borderRadius: '50%',
    // background: 'rgba(255, 255, 255, 0.4)',
    background: 'rgba(249, 249, 249, .75)',
    backdropFilter: 'blur(1px)',
    pointerEvents: 'none',
    transform: 'translate(-25%, -76%)', // Center the glass circle
    zIndex: '100',
    mixBlendMode: 'exclusion',
  });

  // Disable default drag behavior for the image
  image.addEventListener('dragstart', (e) => e.preventDefault());

  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  // Function to update glass circle position
  const updateGlassCirclePosition = () => {
    const imageRect = image.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const newX = imageRect.left - containerRect.left + image.offsetWidth / 2;
    const newY = imageRect.top - containerRect.top + image.offsetHeight / 2;

    glassCircle.style.left = `${newX}px`;
    glassCircle.style.top = `${newY}px`;
  };

  // Function to position the image based on layout
  const positionImageOnLoad = () => {
    const containerRect = container.getBoundingClientRect();

    if (window.matchMedia('(min-width: 1100px)').matches) {
      // Grid layout (1100px and up)
      const gridColumns = window.getComputedStyle(container).gridTemplateColumns.split(' ');
      const columnOffset = gridColumns.slice(0, 2).reduce((a, b) => a + parseFloat(b), 0); // Sum of the widths of columns 1 and 2

      // Position image 1rem (16px) away from the right edge of column 3
      const imageLeft = columnOffset + parseFloat(gridColumns[2]) - image.offsetWidth - 16; // 1rem = 16px
      const imageTop = (containerRect.height - image.offsetHeight) / 2; // Center vertically in the container

      image.style.left = `${Math.max(0, Math.min(imageLeft, containerRect.width - image.offsetWidth))}px`;
      image.style.top = `${Math.max(0, Math.min(imageTop, containerRect.height - image.offsetHeight))}px`;
    } else {
      // Flex layout (less than 1100px)
      // const imageLeft = (containerRect.width - image.offsetWidth) / 2;
      // const imageTop = (containerRect.height - image.offsetHeight) / 2;

      // image.style.left = `${Math.max(0, Math.min(imageLeft, containerRect.width - image.offsetWidth))}px`;
      // image.style.top = `${Math.max(0, Math.min(imageTop, containerRect.height - image.offsetHeight))}px`;
    }

    image.style.position = 'absolute'; // Ensure proper positioning
    updateGlassCirclePosition(); // Position the glass circle accordingly
  };

  // Start dragging (for mouse and touch)
  const startDrag = (e) => {
    isDragging = true;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const imageRect = image.getBoundingClientRect();
    offsetX = clientX - imageRect.left;
    offsetY = clientY - imageRect.top;

    image.style.cursor = 'grabbing';
  };

  // Dragging (for mouse and touch)
  const drag = (e) => {
    if (!isDragging) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const containerRect = container.getBoundingClientRect();

    // Calculate new position
    let newX = clientX - containerRect.left - offsetX;
    let newY = clientY - containerRect.top - offsetY;

    // Constrain within container (adjusting for image dimensions)
    newX = Math.max(0, Math.min(newX, containerRect.width - image.offsetWidth));
    newY = Math.max(0, Math.min(newY, containerRect.height - image.offsetHeight));

    // Apply the new position
    image.style.left = `${newX}px`;
    image.style.top = `${newY}px`;

    // Update glass circle position
    updateGlassCirclePosition();
  };

  // Stop dragging (for mouse and touch)
  const stopDrag = () => {
    isDragging = false;
    image.style.cursor = 'grab';
    updateGlassCirclePosition(); // Ensure the circle is correctly positioned after dragging
  };

  // Allow scrolling on mobile when not dragging
  const preventScrollWhileDragging = (e) => {
    if (isDragging) e.preventDefault();
  };

  // Add event listeners for mouse
  image.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);

  // Add event listeners for touch
  image.addEventListener('touchstart', startDrag, { passive: true });
  document.addEventListener('touchmove', drag, { passive: false });
  document.addEventListener('touchmove', preventScrollWhileDragging, { passive: false });
  document.addEventListener('touchend', stopDrag);

  // Position the image on load
  positionImageOnLoad();

  // Reposition image on window resize to handle layout changes
  window.addEventListener('resize', positionImageOnLoad);
});


let soundClicking = false;

const clickMusicButton = document.querySelector('.click-music-button');
console.log(`Initial Text Content: "${clickMusicButton.textContent}"`);

function soundClick() {
    if (soundClicking) return;
    soundClicking = true;

    console.log('Click detected');
    const buttonText = clickMusicButton.textContent.trim(); // Remove extra spaces or newlines

    if (buttonText === '(Pause music ‖)') {
        console.log('Pause music');
        clickMusicButton.textContent = '(Play music ▶︎)';
        audio.pause();
        // fadeOutAudio(audio, 5);
    } else if (buttonText === '(Play music ▶︎)') {
      audio.play();
        console.log('Play music');
        clickMusicButton.textContent = '(Pause music ‖)';
        // fadeInAudio(audio, 5);
    } else if (!audio.paused) {
      audio.play();
      clickMusicButton.textContent = '(Pause music ‖)';
        console.log(`Unmatched text: "${buttonText}"`);
    }

    setTimeout(() => {
        soundClicking = false; // Re-enable click after a short delay
    }, 500);
}

const descriptionFour = document.querySelector('.description--4');
// Attach the click event to the header
descriptionFour.addEventListener('click', soundClick);






const descriptionDiv = document.querySelector('.header--4 .description--4');
const headerFour = document.querySelector('.header--4');

// Check if the description div exists inside header--4
if (descriptionDiv) {
    descriptionDiv.addEventListener('click', (event) => {
        event.stopPropagation();  // Prevent the event from bubbling up to the header
    });
}

if (headerFour) {
    headerFour.addEventListener("click", (event) => {
        // Ensure the click is not on the description--4 inside header--4
        if (event.target !== descriptionDiv && !descriptionDiv.contains(event.target)) {
            event.preventDefault();
            const targetClass = headerFour.querySelector("h1").classList[1];
            resetActiveContent();
            activateSection(targetClass);
        }
    });
}


document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll('.locker__container h1');

  headers.forEach(header => {
    header.addEventListener('click', (event) => {
      event.preventDefault();
      playAudio();
    })
  })

function playAudio() {
  const audioClick = document.getElementById('audio-click');
  audioClick.play();
}
})


document.addEventListener("DOMContentLoaded", () => {
  const logoContainer = document.querySelector('.logo-container');

 
    logoContainer.addEventListener('click', (event) => {
      event.preventDefault();
      playAudio();
    })


function playAudio() {
  const audioClick = document.getElementById('audio-click');
  audioClick.play();
}
})


document.addEventListener("DOMContentLoaded", () => {
  // Select all anchor links with the class "footer-link"
  const anchorLinks = document.querySelectorAll('a.footer-link');

  anchorLinks.forEach(link => {

    let isAudioPlaying = false; 

    link.addEventListener('mouseenter', (event) => {
      // Check if the hovered link has the excluded ID
      if (event.target.id === 'no-sound-link') {
        return; // Skip playing audio if the ID matches
      }

      // Check if the event target is the <a> element itself
      if (event.target !== event.currentTarget) {
        return; // Do nothing if the event is triggered by a child element
      }

      // Get the href attribute of the anchor tag
      const href = event.currentTarget.getAttribute('href');
      if (!href || href === "#") {
        return; // Skip audio if href is missing or invalid
      }

    if (!isAudioPlaying) {
      playAudio();
      isAudioPlaying = true;
    }
    });

    link.addEventListener('mouseleave', () => {
      isAudioPlaying = false;
    })

  });

  function playAudio() {
    const audioClick = document.getElementById('audio-click');
    if (audioClick) {
      // Reset the audio to the beginning in case it's already playing
      audioClick.currentTime = 0;
      audioClick.play();
    }
  }
});





document.addEventListener("DOMContentLoaded", () => {
  const hoverContainers = document.querySelectorAll(".hover-overlay-message");

  function playAudio() {
    const audioClick = document.getElementById("audio-click");
    if (audioClick && audioClick.paused) {
      audioClick.currentTime = 0;
      audioClick.play();
    }
  }

  hoverContainers.forEach((container) => {
    let isAudioAllowed = false;
    let hasExited = true;
    let hoverTimeout;

    // Detect when parent container is hovered
    container.parentElement.addEventListener("mouseenter", () => {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        isAudioAllowed = true;
        
        // If the cursor is already over the `.hover-overlay-message`, trigger the event
        if (container.matches(":hover")) {
          container.dispatchEvent(new Event("mouseenter"));
        }
      }, 800); // 0.8 seconds delay
    });
    
    

    container.parentElement.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimeout);
      isAudioAllowed = false;
      hasExited = true;
    });

    container.addEventListener("mouseenter", () => {
      if (isAudioAllowed && hasExited) {
        playAudio();
        hasExited = false;
      }
    });

    container.addEventListener("mouseleave", () => {
      hasExited = true;
    });
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//   const hoverContainers = document.querySelectorAll(".hover-overlay-message");

//   hoverContainers.forEach(container => {
//     container.addEventListener('click', (event) => {
//       event.preventDefault();
//       playAudio();
//     })
//   })

// function playAudio() {
//   const audioClick = document.getElementById('audio-click');
//   audioClick.play();
// }
// })




document.addEventListener("DOMContentLoaded", () => {
  // Select the .work container
  const workContainer = document.querySelector('.work');
  
  let isAudioPlaying = false;  // Flag to check if audio is already playing

  // Add the mouseenter event to the .work container (only triggers when entering the container)
  workContainer.addEventListener('mouseenter', (event) => {
    // Check if the event target is the .work container itself, not its child elements
    if (event.target !== event.currentTarget) {
      return; // Do nothing if the event is triggered by a child element
    }

    // Play audio only if it's not already playing
    if (!isAudioPlaying) {
      playAudio();
      isAudioPlaying = true; // Set flag to indicate audio is playing
    }
  });

  // Add the mouseout event to reset the flag when the mouse leaves the .work container
  workContainer.addEventListener('mouseout', () => {
    isAudioPlaying = false; // Reset the flag when the mouse leaves
  });

  function playAudio() {
    const audioClick = document.getElementById('audio-click');
    
    if (audioClick && audioClick.paused) {
      // Reset the audio to the beginning and play it
      audioClick.currentTime = 0;
      audioClick.play();
    }
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // Select the .work container
  const aboutContainer = document.querySelector('.about');
  
  let isAudioPlaying = false;  // Flag to check if audio is already playing

  // Add the mouseenter event to the .about container (only triggers when entering the container)
  aboutContainer.addEventListener('mouseenter', (event) => {
    // Check if the event target is the .about container itself, not its child elements
    if (event.target !== event.currentTarget) {
      return; // Do nothing if the event is triggered by a child element
    }

    // Play audio only if it's not already playing
    if (!isAudioPlaying) {
      playAudio();
      isAudioPlaying = true; // Set flag to indicate audio is playing
    }
  });

  // Add the mouseout event to reset the flag when the mouse leaves the .work container
  aboutContainer.addEventListener('mouseout', () => {
    isAudioPlaying = false; // Reset the flag when the mouse leaves
  });

  function playAudio() {
    const audioClick = document.getElementById('audio-click');
    
    if (audioClick && audioClick.paused) {
      // Reset the audio to the beginning and play it
      audioClick.currentTime = 0;
      audioClick.play();
    }
  }
});


document.addEventListener("DOMContentLoaded", () => {
  startAnimation();
});

// function startAnimation() {
//   const container = document.querySelector(".companylogos-container");
//   if (!container) {
//     console.error("Container not found!");
//     return;
//   }

//   const balls = [
//     { element: document.getElementById("spotify-logo"), posX: 0, posY: 0, velocityX: 4, velocityY: 4 },
//     { element: document.getElementById("casper-logo"), posX: 100, posY: 100, velocityX: -4, velocityY: -4 },
//   ];

//   if (!balls[0].element || !balls[1].element) {
//     console.error("One or more logo elements were not found.");
//     return;
//   }

//   const gravity = 0.1;
//   const friction = 0.99;
//   const containerWidth = container.clientWidth;
//   const containerHeight = container.clientHeight;
//   const ballSize = 75;

//   function animate() {
//     balls.forEach(ball => {
//       ball.velocityY += gravity;
//       ball.posX += ball.velocityX;
//       ball.posY += ball.velocityY;

//       // Collision detection
//       if (ball.posX <= 0 || ball.posX + ballSize >= containerWidth) {
//         ball.velocityX *= -1;
//         ball.velocityX *= friction;
//       }
//       if (ball.posY <= 0 || ball.posY + ballSize >= containerHeight) {
//         ball.velocityY *= -1;
//         ball.velocityY *= friction;
//         if (ball.posY + ballSize >= containerHeight) {
//           ball.posY = containerHeight - ballSize;
//         }
//       }

//       // Apply movement
//       ball.element.style.transform = `translate(${ball.posX}px, ${ball.posY}px)`;
//     });

//     requestAnimationFrame(animate);
//   }

//   animate();
// }



// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.querySelector(".companylogos-container");
//   if (!container) {
//     console.error("Container not found!");
//     return;
//   }

//   const logos = [
//     {
//       id: "spotify-logo",
//       svg: `<svg width="80" height="80" viewBox="0 0 1000 1000.0022" xmlns="http://www.w3.org/2000/svg"><path d="M 519.83691,0.40204111 C 243.89495,-10.566117 11.324418,204.22689 0.40196015,480.16716 -10.56619,756.10802 204.27254,988.63153 480.16822,999.60014 756.10908,1010.5687 988.63259,795.77668 999.6012,519.83586 1010.5241,243.89502 795.72919,11.324491 519.83691,0.40204111 Z M 730.88041,732.84507 c -6.21431,10.96861 -18.32578,16.45433 -30.11722,14.80861 -3.60862,-0.50276 -7.22003,-1.69138 -10.60006,-3.61144 -66.08302,-37.61156 -138.10896,-62.10592 -214.06349,-72.80023 -75.95453,-10.6943 -151.95474,-6.9914 -225.8521,10.96862 -16.0412,3.88289 -32.17353,-5.94289 -36.05783,-21.98292 -3.88458,-16.04005 5.94088,-32.17438 21.98178,-36.05725 81.25624,-19.74291 164.79648,-23.81153 248.24535,-12.06578 83.4488,11.74575 162.60332,38.66301 235.3121,80.02311 14.30574,8.18006 19.3315,26.36867 11.19716,40.71728 z" fill="#1ED760"/></svg>`
//     },
//     {
//       id: "casper-logo",
//       svg: `<svg width="80" height="80" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg"><circle cx="125" cy="125" r="125" fill="#1E306E"/><path d="M120.112 50C77.0041 50 44 83.6777 44 125.438C44 167.198 77.0041 200.876 120.112 200.876C147.727 200.876 173.322 186.058 184.773 165.178L162.545 153.054C153.789 168.545 138.971 177.302 120.112 177.302C106.64 177.302 93.1694 171.913 84.4132 162.483C74.9835 152.38 69.595 139.583 69.595 126.112C69.595 112.64 74.9835 99.843 84.4132 89.7397C93.1694 80.3099 105.967 74.9215 120.112 74.9215C134.93 74.9215 143.686 79.6364 149.748 84.3512C156.483 89.0661 163.219 93.781 174.669 93.781C195.55 93.781 204.979 76.9422 207 68.186L183.426 63.4711C183.426 64.1446 181.405 70.8802 174.669 70.8802C171.302 70.8802 169.281 69.5331 164.566 66.1653C155.81 58.0826 144.36 50 120.112 50Z" fill="white"/></svg>`
//     }
//   ];

//   function createBubbleGrid() {
//     for (let i = 0; i < 10; i++) { // Adjust number for desired repetition
//       logos.forEach((logo) => {
//         const wrapper = document.createElement("div");
//         wrapper.classList.add("bubble");
//         wrapper.innerHTML = logo.svg;
//         container.appendChild(wrapper);
//       });
//     }
//   }
  

//   createBubbleGrid();
// });




function addLogos() {
  container.innerHTML = "";
  
  const rows = 5;
  const cols = 5;
  const cellWidth = container.clientWidth / cols;
  const cellHeight = container.clientHeight / rows;
  
  let logoIndex = 0;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const logo = logos[logoIndex % logos.length]; // Cycle through logos
      logoIndex++;
  
      const wrapper = document.createElement("div");
      wrapper.classList.add("bubble");
      wrapper.innerHTML = logo.svg;
  
      // Initial position (above container)
      const initialX = col * cellWidth + (Math.random() * 0.9 - 0.15) * cellWidth;
      const initialY = -Math.random() * 100; // Start above the container
  
      // Target position
      const finalX = Math.min(
        Math.max(initialX, 0),
        container.clientWidth - cellWidth
      );
      const finalY = Math.min(
        Math.max(row * cellHeight + (Math.random() * 0.9 - 0.15) * cellHeight, 0),
        container.clientHeight - cellHeight
      );
  
      wrapper.style.position = "absolute";
      wrapper.style.left = `${finalX}px`;
      wrapper.style.top = `${initialY}px`; // Start above container
      wrapper.style.opacity = "0";
      wrapper.style.transition = "top 0.8s ease-out, opacity 0.5s"; // Falling effect
  
      // Click effect: Pop and disappear
      wrapper.addEventListener("click", function () {
        wrapper.style.transform = "scale(1.25)";
        playRandomAudio();
        setTimeout(() => wrapper.remove(), 100);
      });
  
      container.appendChild(wrapper);
  
      // Animate falling effect after slight delay
      setTimeout(() => {
        wrapper.style.top = `${finalY}px`;
        wrapper.style.opacity = "1";
      }, Math.random() * 300);
    }
  }
}















document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jump
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start' // Scroll to the top of the section
      });
    }
  });
});

  // Smooth scroll for the .work div to .projects-section
  const workButtonClick = document.querySelector('.work');

  if (workButtonClick) {
    workButtonClick.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent the default behavior

      const projectsSection = document.querySelector('.projects-section');
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  
      // Smooth scroll for the .work div to .projects-section
      const aboutButtonClick = document.querySelector('.about');
  
      if (aboutButtonClick) {
        aboutButtonClick.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent the default behavior
    
          const aboutSection = document.getElementById('about');
          if (aboutSection) {
            aboutSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      }



// Register GSAP plugins if needed
gsap.registerPlugin(ScrollTrigger);

// Function to animate elements
function animateSection(section) {
  const title = section.querySelector(".project-title");
  const description = section.querySelector(".project-description");
  const button = section.querySelector(".project-button");
  const tags = section.querySelectorAll(".projects-info-tags .tag");
  const projectImage = section.querySelectorAll(".project-image-wrapper img");
  const projectImageWrapper = section.querySelectorAll(".project-image-wrapper");
  const projectImageWrapperOne = section.querySelectorAll(".project-image-wrapper-1");
  const projectImageWrapperTwo = section.querySelectorAll(".project-image-wrapper-2");
  const projectImageOne = section.querySelectorAll(".project-image-1");
  const projectImageTwo = section.querySelectorAll(".project-image-2");
  const projectImageThree = section.querySelectorAll(".project-image-3");
  const projectVideoOne = section.querySelectorAll(".project-video-1");
  const projectVideoTwo = section.querySelectorAll(".project-video-2");
  const projectVideoThree = section.querySelectorAll(".project-video-3");
  const checkoutImageOne = section.querySelector(".checkout-image-1");
  const checkoutImageTwo = section.querySelector(".checkout-image-2");
  const checkoutImageThree = section.querySelector(".checkout-image-3");

  const homepageOneOverlayTop = section.querySelector('.homepage-1-overlay-top');
  if (homepageOneOverlayTop) {
    gsap.fromTo(homepageOneOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}
  const homepageOneOverlayBottom = section.querySelector('.homepage-1-overlay-bottom');
  if (homepageOneOverlayBottom) {
    gsap.fromTo(homepageOneOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}
  const homepageTwoOverlayTop = section.querySelector('.homepage-2-overlay-top');
  if (homepageTwoOverlayTop) {
      gsap.fromTo(homepageTwoOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 0.9 });
  }
  
  const homepageTwoOverlayBottom = section.querySelector('.homepage-2-overlay-bottom');
  if (homepageTwoOverlayBottom) {
    gsap.fromTo(homepageTwoOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.9 });
}
  const homepageThreeOverlayTop = section.querySelector('.homepage-3-overlay-top');
  if (homepageThreeOverlayTop) {
    gsap.fromTo(homepageThreeOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 1.2 });
}
  const homepageThreeOverlayBottom = section.querySelector('.homepage-3-overlay-bottom');
  if (homepageThreeOverlayBottom) {
    gsap.fromTo(homepageThreeOverlayBottom, { opacity: 0  }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 1.2 });
}

if (checkoutImageOne && checkoutImageTwo && checkoutImageThree) {
    // Animate the description slightly after the title and button
    gsap.fromTo(
      [checkoutImageOne, checkoutImageTwo, checkoutImageThree],
      {opacity: 0 }, // Start 10px below, opacity 0
      {
        opacity: 1, // Fade in
        duration: 1.5, // Duration of the animation
        ease: "power1.out", // Smooth easing
        stagger: 0.3, // Delay for each tag
        delay: 0.6, // Slight delay after the title and button
      }
    );
}

const checkoutOneOverlayTop = section.querySelector('.checkout-1-overlay-top');
if (checkoutOneOverlayTop) {
  gsap.fromTo(checkoutOneOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}
const checkoutOneOverlayBottom = section.querySelector('.checkout-1-overlay-bottom');
if (checkoutOneOverlayBottom) {
  gsap.fromTo(checkoutOneOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}

const checkoutTwoOverlayTop = section.querySelector('.checkout-2-overlay-top');
if (checkoutTwoOverlayTop) {
  gsap.fromTo(checkoutTwoOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 0.9 });
}
const checkoutTwoOverlayBottom = section.querySelector('.checkout-2-overlay-bottom');
if (checkoutTwoOverlayBottom) {
  gsap.fromTo(checkoutTwoOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.9 });
}

const checkoutThreeOverlayTop = section.querySelector('.checkout-3-overlay-top');
if (checkoutThreeOverlayTop) {
  gsap.fromTo(checkoutThreeOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 1.2 });
}
const checkoutThreeOverlayBottom = section.querySelector('.checkout-3-overlay-bottom');
if (checkoutThreeOverlayBottom) {
  gsap.fromTo(checkoutThreeOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 1.2 });
}


const shakiraImageOne = section.querySelector(".shakira-image-1");
const shakiraVideoOne = section.querySelector(".shakira-video-1");
const shakiraImageTwo = section.querySelector(".shakira-image-2");

if (shakiraImageOne && shakiraVideoOne && shakiraImageTwo) {
  // Check if the screen width is larger than 768px
  if (window.matchMedia("(min-width: 768px)").matches) {
    gsap.fromTo(
      shakiraVideoOne, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5, ease: "power1.out", delay: 0.6 }
    );

    gsap.fromTo(
      shakiraImageOne, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5, ease: "power1.out", delay: 0.9 } // Delays after video
    );

    gsap.fromTo(
      shakiraImageTwo, 
      { opacity: 0 }, 
      { opacity: 1, duration: 1.5, ease: "power1.out", delay: 1.2 } // Further delay after first image
    );
  } else {
    // Fallback for smaller screens (staggered animation)
    gsap.fromTo(
      [shakiraImageOne, shakiraVideoOne, shakiraImageTwo],
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power1.out",
        stagger: 0.3,
        delay: 0.6,
      }
    );
  }
}

const quizVideoOne = section.querySelector(".project-video-quiz-1");
const quizVideoTwo = section.querySelector(".project-video-quiz-2");
const quizImageOne = section.querySelector(".project-image-quiz-3");

if (quizVideoOne && quizVideoTwo && quizImageOne) {
  // Animate the description slightly after the title and button
  gsap.fromTo(
    [quizVideoOne, quizVideoTwo, quizImageOne],
    {opacity: 0 }, // Start 10px below, opacity 0
    {
      opacity: 1, // Fade in
      duration: 1.5, // Duration of the animation
      ease: "power1.out", // Smooth easing
      stagger: 0.3, // Delay for each tag
      delay: 0.6, // Slight delay after the title and button
    }
  );
}


const quizOneOverlayTop = section.querySelector('.quiz-overlay-1-top');
if (quizOneOverlayTop) {
  gsap.fromTo(quizOneOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}
const quizOneOverlayBottom = section.querySelector('.quiz-overlay-1-bottom');
if (quizOneOverlayBottom) {
  gsap.fromTo(quizOneOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}

const quizTwoOverlayTop = section.querySelector('.quiz-overlay-2-top');
if (quizTwoOverlayTop) {
  gsap.fromTo(quizTwoOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 0.9 });
}
const quizTwoOverlayBottom = section.querySelector('.quiz-overlay-2-bottom');
if (quizTwoOverlayBottom) {
  gsap.fromTo(quizTwoOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.9 });
}

const reviewsImageOne = section.querySelector(".reviews-image-1");
const reviewsImageTwo = section.querySelector(".reviews-image-2");
const reviewsImagethree = section.querySelector(".reviews-image-3");

if (reviewsImageOne && reviewsImageTwo && reviewsImagethree) {
  // Animate the description slightly after the title and button
  gsap.fromTo(
    [reviewsImageOne, reviewsImageTwo, reviewsImagethree],
    {opacity: 0 }, // Start 10px below, opacity 0
    {
      opacity: 1, // Fade in
      duration: 1.5, // Duration of the animation
      ease: "power1.out", // Smooth easing
      stagger: 0.3, // Delay for each tag
      delay: 0.6, // Slight delay after the title and button
    }
  );
}

const reviewsOneOverlayTop = section.querySelector('.reviews-overlay-1-top');
if (reviewsOneOverlayTop) {
  gsap.fromTo(reviewsOneOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}
const reviewsOneOverlayBottom = section.querySelector('.reviews-overlay-1-bottom');
if (reviewsOneOverlayBottom) {
  gsap.fromTo(reviewsOneOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}

const reviewsTwoOverlayTop = section.querySelector('.reviews-overlay-2-top');
if (reviewsTwoOverlayTop) {
  gsap.fromTo(reviewsTwoOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 0.9 });
}
const reviewsTwoOverlayBottom = section.querySelector('.reviews-overlay-2-bottom');
if (reviewsTwoOverlayBottom) {
  gsap.fromTo(reviewsTwoOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.9 });
}


const stickyVideoOne = section.querySelector(".sticky-video-1");
const stickySideBySide = section.querySelector(".sticky-sidebyside");
const stickyImageTwo = section.querySelector(".sticky-image-2");
const stickyImageThree = section.querySelector(".sticky-image-3");

if (stickyVideoOne) {
  gsap.fromTo(stickyVideoOne, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}

if (stickySideBySide) {
  gsap.fromTo(stickySideBySide, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.9 });
}

if (stickyImageTwo) {
  gsap.fromTo(stickyImageTwo, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.9 });
}

if (stickyImageThree) {
  gsap.fromTo(stickyImageThree, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 1.2 });
}

const stickyOneOverlayTop = section.querySelector('.sticky-overlay-1-top');
if (stickyOneOverlayTop) {
  gsap.fromTo(stickyOneOverlayTop, { opacity: 0 }, { opacity: .75, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}
const stickyOneOverlayBottom = section.querySelector('.sticky-overlay-1-bottom');
if (stickyOneOverlayBottom) {
  gsap.fromTo(stickyOneOverlayBottom, { opacity: 0 }, { opacity: 1, duration: 1.5, ease: 'power1.out', delay: 0.6 });
}


  // Animate the title and button simultaneously
  gsap.fromTo(
    [title],
    { opacity: 0}, // Start 10px below, opacity 0
    {
      y: 0, // Move to original position
      opacity: 1, // Fade in
      duration: 1.75, // Duration of the animation
      ease: "power1.out", // Smooth easing
    }
  );

  
    // Animate the title and button simultaneously
    gsap.fromTo(
      [button],
      {opacity: 0 }, // Start 10px below, opacity 0
      {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 1.75, // Duration of the animation
        ease: "power1.out", // Smooth easing
      }
    );

  // Animate the description slightly after the title and button
  gsap.fromTo(
    [description],
    {opacity: 0 }, // Start 10px below, opacity 0
    {
      y: 0, // Move to original position
      opacity: 1, // Fade in
      duration: 2.5, // Duration of the animation
      ease: "power1.out", // Smooth easing
      delay: 0.2, // Slight delay after the title and button
    }
  );

  // Animate the tags with a staggered effect
  gsap.fromTo(
    tags,
    { opacity: 0, backgroundColor: "rgba(231, 231, 231, 0)", color: "rgba(128, 128, 128, 0)" }, // Start with transparent background
    {
      opacity: 1, // Fade in
      backgroundColor: "rgba(231, 231, 231, 1)", // Animate background color
      color: "rgba(128, 128, 128, 1)",
      duration: .75, // Duration for each tag
      ease: "power1.out", // Smooth easing
      stagger: 0.2, // Delay for each tag
      delay: 0.3, // Slight delay after the title and button
    }
  );

  // // Animate the description slightly after the title and button
  // gsap.fromTo(
  //   [projectImageOne, projectImageTwo, projectImageThree],
  //   {top: 5 }, // Start 10px below, opacity 0
  //   {
  //    top: 0,
  //     duration: .5, // Duration of the animation
  //     ease: "power3.out", // Smooth easing
  //     stagger: 0.3, // Delay for each tag
  //     delay: 0.6, // Slight delay after the title and button
  //   }
  // );


  // // Animate the description slightly after the title and button
  // gsap.fromTo(
  //   [projectVideoOne, projectVideoTwo, projectVideoThree],
  //   {top: 5 }, // Start 10px below, opacity 0
  //   {
  //    top: 0,
  //     duration: .5, // Duration of the animation
  //     ease: "power3.out", // Smooth easing
  //     stagger: 0.3, // Delay for each tag
  //     delay: 0.6, // Slight delay after the title and button
  //   }
  // );

  // Animate the description slightly after the title and button
  gsap.fromTo(
    [projectImageOne, projectImageTwo, projectImageThree],
    {opacity: 0 }, // Start 10px below, opacity 0
    {
      opacity: 1, // Fade in
      duration: 1.5, // Duration of the animation
      ease: "power1.out", // Smooth easing
      stagger: 0.3, // Delay for each tag
      delay: 0.6, // Slight delay after the title and button
    }
  );

 // Animate the description slightly after the title and button
 gsap.fromTo(
  [projectVideoOne],
  {opacity: 0 }, // Start 10px below, opacity 0
  {
    opacity: 1, // Fade in
    duration: 1.5, // Duration of the animation
    ease: "power1.out", // Smooth easing
    delay: 0.6, // Slight delay after the title and button
  }
);


 // Animate the description slightly after the title and button
 gsap.fromTo(
  [projectVideoTwo],
  {opacity: 0 }, // Start 10px below, opacity 0
  {
    opacity: 1, // Fade in
    duration: 1.5, // Duration of the animation
    ease: "power1.out", // Smooth easing
    delay: 0.9, // Slight delay after the title and button
  }
);


 // Animate the description slightly after the title and button
 gsap.fromTo(
  [projectVideoThree],
  {opacity: 0 }, // Start 10px below, opacity 0
  {
    opacity: 1, // Fade in
    duration: 1.5, // Duration of the animation
    ease: "power1.out", // Smooth easing
    delay: 1.2, // Slight delay after the title and button
  }
);





}


// Intersection Observer to trigger animations when visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSection(entry.target); // Animate the section
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  },
  { threshold: 0.1 } // Trigger when 20% of the section is visible
);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});





function updateImageStructure() {
  const stickyWrapper = document.querySelector(".project-floatingimage-wrapper"); // Select the original wrapper
  const parentContainer = stickyWrapper ? stickyWrapper.parentNode : null;

  // Ensure we only proceed if the wrapper exists, we're on a large screen, and we haven't already replaced it
  if (stickyWrapper && parentContainer && window.innerWidth >= 768) {
    // Remove all existing project-floatingimage-wrapper elements
    document.querySelectorAll(".project-floatingimage-wrapper").forEach(el => el.remove());

    // Function to create a new image wrapper with a hover-overlay
    function createImageWrapper(containerClass, imageClass, imageSrc) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("project-floatingimage-wrapper", containerClass);

      // // Create hover-overlay div with text content
      // const hoverOverlay = document.createElement("div");
      // hoverOverlay.classList.add("hover-overlay-message");
      // hoverOverlay.textContent = "View more ↗"; // Add the desired text

      // Create image element
      const img = document.createElement("img");
      img.classList.add(imageClass);
      img.src = imageSrc;
      img.style.filter = 'drop-shadow(0px 8px 20px rgba(162, 162, 162, .35))';

      // Append hover-overlay before the image
      // wrapper.appendChild(hoverOverlay);
      wrapper.appendChild(img);

      return wrapper;
    }

    // Create first new wrapper
    const newWrapper1 = createImageWrapper("sticky-container-2", "sticky-image-2", "./img/sticky-instock.png");

    // Create second new wrapper
    const newWrapper2 = createImageWrapper("sticky-container-3", "sticky-image-3", "./img/sticky-outofstock.png");

    // Append both new wrappers to the original parent
    parentContainer.appendChild(newWrapper1);
    parentContainer.appendChild(newWrapper2);
  }
}

// Run on page load
updateImageStructure();

// Run only once when resizing to 768px or above
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    updateImageStructure();
    window.removeEventListener("resize", arguments.callee); // Remove event listener after execution
  }
});







const footer = document.querySelector("footer");

function animateFooter(footer) {
  const footerHeaderOne = footer.querySelector(".footer-header-1");
  const footerHeaderTwo = footer.querySelector(".footer-header-2");
  const footerLinkOne = footer.querySelector(".footer-link-1");
  const footerLinkTwo = footer.querySelector(".footer-link-2");
  const footerLinkThree = footer.querySelector(".footer-link-3");
  const footerLinkFour = footer.querySelector(".footer-link-4");
  const footerArrowOne = footer.querySelector('.footer-arrow-1')
  const footerArrowTwo = footer.querySelector('.footer-arrow-2')
  const footerArrowThree = footer.querySelector('.footer-arrow-3')
  const footerArrowFour = footer.querySelector('.footer-arrow-4')
  const songAlbumCover = footer.querySelector('.song-album-cover')
  const songName = footer.querySelector('.songName')
  const songArtist = footer.querySelector('.songArtist')
  const lastPlayedCircle = footer.querySelector('.last-played-circle')
  const lastPlayedDescription = footer.querySelector('.last-played p')
  const creditsInfo = footer.querySelector('.credits-info')
  const creditsLine = footer.querySelector('.credits-line')

  // Animate the title and button simultaneously
  gsap.fromTo(
    [footerHeaderOne],
    { opacity: 0}, // opacity 0
    {
      y: 0, // Move to original position
      opacity: 1, // Fade in
      duration: 1.75, // Duration of the animation
      ease: "power1.out", // Smooth easing
    }
  );

    // Animate the title and button simultaneously
    gsap.fromTo(
      [footerLinkOne],
      { opacity: 0}, // opacity 0
      {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 1.75, // Duration of the animation
        ease: "power1.out", // Smooth easing
        delay: 0.2,
      }
    );


        // Animate the title and button simultaneously
        gsap.fromTo(
          [footerArrowOne],
          { opacity: 0}, // opacity 0
          {
            y: 0, // Move to original position
            opacity: 1, // Fade in
            duration: 1.75, // Duration of the animation
            ease: "power1.out", // Smooth easing
            delay: 0.2,
          }
        );

            // Animate the title and button simultaneously
    gsap.fromTo(
      [footerLinkThree],
      { opacity: 0}, // opacity 0
      {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 1.75, // Duration of the animation
        ease: "power1.out", // Smooth easing
        delay: 0.3,
      }
    );

            // Animate the title and button simultaneously
            gsap.fromTo(
              [footerArrowThree],
              { opacity: 0}, // opacity 0
              {
                y: 0, // Move to original position
                opacity: 1, // Fade in
                duration: 1.75, // Duration of the animation
                ease: "power1.out", // Smooth easing
                delay: 0.3,
              }
            );

                        // Animate the title and button simultaneously
    gsap.fromTo(
      [footerLinkTwo],
      { opacity: 0}, // opacity 0
      {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 1.75, // Duration of the animation
        ease: "power1.out", // Smooth easing
        delay: 0.4,
      }
    );


            // Animate the title and button simultaneously
            gsap.fromTo(
              [footerArrowTwo],
              { opacity: 0}, // opacity 0
              {
                y: 0, // Move to original position
                opacity: 1, // Fade in
                duration: 1.75, // Duration of the animation
                ease: "power1.out", // Smooth easing
                delay: 0.4,
              }
            );

                                    // Animate the title and button simultaneously
    gsap.fromTo(
      [footerLinkFour],
      { opacity: 0}, // opacity 0
      {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 1.75, // Duration of the animation
        ease: "power1.out", // Smooth easing
        delay: 0.5,
      }
    );

                // Animate the title and button simultaneously
                gsap.fromTo(
                  [footerArrowFour],
                  { opacity: 0}, // opacity 0
                  {
                    y: 0, // Move to original position
                    opacity: 1, // Fade in
                    duration: 1.75, // Duration of the animation
                    ease: "power1.out", // Smooth easing
                    delay: 0.5,
                  }
                );


    // Animate the title and button simultaneously
    gsap.fromTo(
      [footerHeaderTwo],
      { opacity: 0}, // opacity 0
      {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 1.75, // Duration of the animation
        ease: "power1.out", // Smooth easing
        delay: 0.3, // Slight delay after the title and button
      }
    );



                // Animate the title and button simultaneously
                gsap.fromTo(
                  [songAlbumCover],
                  { opacity: 0}, // opacity 0
                  {
                    y: 0, // Move to original position
                    opacity: 1, // Fade in
                    duration: 1.75, // Duration of the animation
                    ease: "power1.out", // Smooth easing
                    delay: 0.5, // Slight delay after the title and button
                  }
                );


                // Animate the title and button simultaneously
                gsap.fromTo(
                  [songName],
                  { opacity: 0}, // opacity 0
                  {
                    y: 0, // Move to original position
                    opacity: 1, // Fade in
                    duration: 1.75, // Duration of the animation
                    ease: "power1.out", // Smooth easing
                    delay: 0.6, // Slight delay after the title and button
                  }
                );

                                // Animate the title and button simultaneously
                                gsap.fromTo(
                                  [songArtist],
                                  { opacity: 0}, // opacity 0
                                  {
                                    y: 0, // Move to original position
                                    opacity: 1, // Fade in
                                    duration: 1.75, // Duration of the animation
                                    ease: "power1.out", // Smooth easing
                                    delay: 0.6, // Slight delay after the title and button
                                  }
                                );


                                                                // Animate the title and button simultaneously
                                                                gsap.fromTo(
                                                                  [lastPlayedCircle],
                                                                  { opacity: 0}, // opacity 0
                                                                  {
                                                                    y: 0, // Move to original position
                                                                    opacity: 1, // Fade in
                                                                    duration: 1.75, // Duration of the animation
                                                                    ease: "power1.out", // Smooth easing
                                                                    delay: .7, // Slight delay after the title and button
                                                                  }
                                                                );



                                                                // Animate the title and button simultaneously
                                                                gsap.fromTo(
                                                                  [lastPlayedDescription],
                                                                  { opacity: 0}, // opacity 0
                                                                  {
                                                                    y: 0, // Move to original position
                                                                    opacity: 1, // Fade in
                                                                    duration: 1.75, // Duration of the animation
                                                                    ease: "power1.out", // Smooth easing
                                                                    delay: .7, // Slight delay after the title and button
                                                                  }
                                                                );



                                                                // Animate the title and button simultaneously
                                                                gsap.fromTo(
                                                                  [creditsLine],
                                                                  { width: 0}, // opacity 0
                                                                  {
                                                                    width: '100%', // Move to original position
                                                                    duration: 1.75, // Duration of the animation
                                                                    ease: "power4.out", // Smooth easing
                                                                    delay: 0.8, // Slight delay after the title and button
                                                                  }
                                                                );

                                                                                                     // Animate the title and button simultaneously
                                                                                                     gsap.fromTo(
                                                                                                      [creditsInfo],
                                                                                                      { opacity: 0}, // opacity 0
                                                                                                      {
                                                                                                        y: 0, // Move to original position
                                                                                                        opacity: 1, // Fade in
                                                                                                        duration: 1.75, // Duration of the animation
                                                                                                        ease: "power1.out", // Smooth easing
                                                                                                        delay: 0.8, // Slight delay after the title and button
                                                                                                      }
                                                                                                    );
                                    
                                                                


}


const footerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Footer is visible in the viewport');
      animateFooter(entry.target);
      footerObserver.unobserve(entry.target);
    } else {
      console.log('Footer is no longer visible in the viewport');
    }
  })
}, {
  threshold: 0.3
})

footerObserver.observe(footer);


document.addEventListener("DOMContentLoaded", () => {
  // Create a GSAP timeline for the animation
  const tl = gsap.timeline({defaults: {ease: "power1.out", duration: 1}});

  tl.to(".vertical-line.line-left", {height: "100%"}, 0.2)
  .to(".horizontal-line.line-top", {width: "100%"}, 0.2); // Both animate at the same time

    tl.to(".vertical-line.line-center", {height: "100%",}, 0.5)
    .to(".horizontal-line.line-top-center", {width: "100%"}, 0.5);


    tl.to(".vertical-line.line-right", {height: "100%"}, 0.7)
    .to(".horizontal-line.line-bottom-center", {width: "100%"}, 0.7)
    .to(".horizontal-line.line-bottom", {width: "100%"}, 0.9);
});


// gsap.registerPlugin(ScrollTrigger);

// // Helper function to split text into characters wrapped in <span>
// function splitTextToSpans(element) {
//   const text = element.textContent;
//   element.textContent = ""; // Clear the original text
//   text.split("").forEach((char) => {
//     const span = document.createElement("span");
//     span.textContent = char === " " ? "\u00A0" : char; // Preserve spaces
//     span.style.display = "inline-block"; // Make each character inline-block for animation
//     element.appendChild(span);
//   });
// }

// // Function to animate elements
// function animateSection(section) {
//   const title = section.querySelector(".project-title");
//   const description = section.querySelector(".project-description p");
//   const button = section.querySelector(".project-button");
//   const tags = section.querySelectorAll(".projects-info-tags .tag");

//   // Split title and description text into characters
//   splitTextToSpans(title);
//   splitTextToSpans(description);
//   console.log(title.querySelectorAll("span"));

//   // Animate the title characters
//   gsap.fromTo(
//     title.querySelectorAll("span"),
//     { y: 10, opacity: 0 }, // Start 10px below, opacity 0
//     {
//       y: 0, // Move to original position
//       opacity: 1, // Fade in
//       duration: 1, // Duration for each character
//       ease: "power2.out", // Smooth easing
//       stagger: 0.03, // Stagger for each character
//     }
//   );

//   // Animate the button to appear simultaneously with the title
//   gsap.fromTo(
//     button,
//     { y: 10, opacity: 0 }, // Start 10px below, opacity 0
//     {
//       y: 0, // Move to original position
//       opacity: 1, // Fade in
//       duration: 1, // Duration of the animation
//       ease: "power2.out", // Smooth easing
//     }
//   );

//   // Animate the description characters
//   gsap.fromTo(
//     description.querySelectorAll("span"),
//     { y: 5, opacity: 0 }, // Start 10px below, opacity 0
//     {
//       y: 0, // Move to original position
//       opacity: 1, // Fade in
//       duration: .1, // Duration for each character
//       ease: "power2.out", // Smooth easing
//       stagger: 0.02, // Stagger for each character
//     }
//   );

//   // Animate the tags with a staggered effect
//   gsap.fromTo(
//     tags,
//     { opacity: 0, backgroundColor: "rgba(231, 231, 231, 0)", color: "rgba(128, 128, 128, 0)" }, // Start with transparent background
//     {
//       opacity: 1, // Fade in
//       backgroundColor: "rgba(231, 231, 231, 1)", // Animate background color
//       color: "rgba(128, 128, 128, 1)",
//       duration: 1, // Duration for each tag
//       ease: "power4.out", // Smooth easing
//       stagger: 0.2, // Delay for each tag
//       delay: 0.5,
//     }
//   );
// }

// // Intersection Observer to trigger animations when visible
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         animateSection(entry.target); // Animate the section
//         observer.unobserve(entry.target); // Stop observing once animated
//       }
//     });
//   },
//   { threshold: 0.2 } // Trigger when 20% of the section is visible
// );

// // Observe all sections
// document.querySelectorAll(".section").forEach((section) => {
//   observer.observe(section);
// });

//   headers.forEach((header) => {
//     header.addEventListener("click", (event) => {
//       event.preventDefault();
//       const targetClass = header.querySelector("h1").classList[1];
//       resetActiveContent();
//       activateSection(targetClass);
//     });
//   });

