// import _ from 'lodash';

// if (module.hot) {
//     module.hot.accept();
// }

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


// document.addEventListener("DOMContentLoaded", () => {
//   startAnimation();
// });

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



// Adding event listener for DOMContentLoaded to trigger logo appearance when container is intersected
document.addEventListener("DOMContentLoaded", () => {
  setupIntersectionObserver();
});

// Logos data
const logos = [
  {
    id: "spotify-logo",
    svg: `<svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="57" height="57" fill="url(#pattern0_390_1221)"/>
<defs>
<pattern id="pattern0_390_1221" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_390_1221" transform="translate(0 -0.000416667) scale(0.000833333)"/>
</pattern>
<image id="image0_390_1221" width="1200" height="1201" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>`
  },
  {
    id: "casper-logo",
    svg: `<svg width="80" height="80" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg"><circle cx="125" cy="125" r="125" fill="#1E306E"/><path d="M120.112 50C77.0041 50 44 83.6777 44 125.438C44 167.198 77.0041 200.876 120.112 200.876C147.727 200.876 173.322 186.058 184.773 165.178L162.545 153.054C153.789 168.545 138.971 177.302 120.112 177.302C106.64 177.302 93.1694 171.913 84.4132 162.483C74.9835 152.38 69.595 139.583 69.595 126.112C69.595 112.64 74.9835 99.843 84.4132 89.7397C93.1694 80.3099 105.967 74.9215 120.112 74.9215C134.93 74.9215 143.686 79.6364 149.748 84.3512C156.483 89.0661 163.219 93.781 174.669 93.781C195.55 93.781 204.979 76.9422 207 68.186L183.426 63.4711C183.426 64.1446 181.405 70.8802 174.669 70.8802C171.302 70.8802 169.281 69.5331 164.566 66.1653C155.81 58.0826 144.36 50 120.112 50Z" fill="white"/></svg>`
  }, 
  {
    id: "portfolio-logo", 
    svg: `<svg width="55" height="55" viewBox="0 0 55 55" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.5 55C42.6878 55 55 42.6878 55 27.5C55 12.3122 42.6878 0 27.5 0C12.3122 0 0 12.3122 0 27.5C0 42.6878 12.3122 55 27.5 55ZM27.4901 31.3372L32.2773 38.4476L35.5158 36.1948L30.7285 29.4364L37.9797 27.1836L36.783 23.382L29.3909 25.9868V17.8204H25.5189V25.9868L18.2677 23.4524L17.0709 27.1836L24.1813 29.4364L19.4645 36.1244L22.7029 38.3772L27.4901 31.3372Z" fill="#0F0F0F"/></svg>`
  }
];

// Create logos and pop them into view
function addLogos() {
  const container = document.querySelector(".companylogos-container");
  if (!container) {
    console.error("Container not found!");
    return;
  }
  container.innerHTML = ""; // Clear any existing logos
  
  const rows = 5;
  const cols = 5;
  const cellWidth = container.clientWidth / cols;
  const cellHeight = container.clientHeight / rows;
  
  let logoIndex = 0;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const logo = logos[logoIndex % logos.length];
      logoIndex++;
  
      const wrapper = document.createElement("div");
      wrapper.classList.add("bubble");
      wrapper.innerHTML = logo.svg;
  
      // Initial position (above container)
      const initialX = col * cellWidth + (Math.random() * 0.9 - 0.15) * cellWidth;
      const initialY = -Math.random() * 100;
  
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
      wrapper.style.top = `${initialY}px`; 
      wrapper.style.opacity = "0";
      wrapper.style.transition = "top 0.8s cubic-bezier(.4,0,.2,1), opacity 0.5s"; 
  
      // Click effect: Pop and disappear
      wrapper.addEventListener("click", function () {
        wrapper.style.transform = "scale(1.15)";
        wrapper.style.transition = "cubic-bezier(.4,0,.2,1)";
        playRandomAudio(); // Play random audio on click
        setTimeout(() => wrapper.remove(), 50); // Remove the logo after animation
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

// Intersection Observer to detect when .image--2 img enters viewport
function setupIntersectionObserver() {
  const container = document.querySelector(".companylogos-container");
  if (!container) {
    console.error("Image container not found!");
    return;
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        addLogos(); // Call addLogos when container is in view
        observer.disconnect(); // Stop observing after triggering
      }
    });
  }, { threshold: 0.1 }); // Trigger when 50% of the image is visible

  observer.observe(container); // Start observing the target element
}

// Play random audio on click
function playRandomAudio() {
  const sounds = ["./audio/pop-1.mp3", "./audio/pop-2.mp3", "./audio/pop-3.mp3"];
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio(randomSound);
  audio.play();
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

