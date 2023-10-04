// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // Create an animation timeline for the main body parts
  const robotAnimation = gsap.timeline({ repeat: -1, yoyo: true });

  // Select all the main SVG parts you want to animate (excluding the arms)
  const mainParts = gsap.utils.toArray(".cls-1:not(#Arm-left, #Arm-right)");

  // Define the bounce animation for the main parts and scale for the rocket
  const bounceMain = { y: 10, ease: "power1.inOut", duration: 1.5 };
  const scaleRocket = { scale: 1.2, transformOrigin: "center center", duration: 1.5 };

  // Add simultaneous animations for the main parts to the timeline
  robotAnimation.to(mainParts, { y: "-=10", ...bounceMain });
  robotAnimation.to("#Rocket", { ...scaleRocket }, 0);

  // Create an animation timeline for the arms
  const armAnimation = gsap.timeline({ repeat: -1, yoyo: true });

  // Select the arm elements
  const armRight = document.getElementById("Arm-right");
  const armLeft = document.getElementById("Arm-left");

  // Define a slightly different bounce animation for the arms
  const bounceArms = { y: 8, ease: "power1.inOut", duration: 1.5 };

  // Add animations for the arms to their respective timeline
  armAnimation.to(armRight, { y: "-=8", ...bounceArms });
  armAnimation.to(armLeft, { y: "-=8", ...bounceArms }, 0); // Start at the same time as armRight

  // Play both animations when the page loads
  robotAnimation.play();
  armAnimation.play();
});
