

let clickCount = 0; // Variable to keep track of the number of clicks
let image = null; // Variable to hold the image element
let tail = null; // Variable to hold the tail image element

function togglePumpHandle() {
  const pumpHandle = document.querySelector(".pump-handle");
  const pumpBody = document.querySelector(".pump-body");
  const container = document.querySelector(".main");

  clickCount++; // Increment the click count

  if (image) {
    // Remove the previous image if it exists
    container.removeChild(image);
  }
  if (tail) {
    // Remove the previous tail image if it exists
    container.removeChild(tail);
  }

  image = document.createElement("img");
  tail = document.createElement("img");

  tail.src = "./Graphics/Symbol 100011.png";
  image.src = "./Graphics/Symbol 100002.png";
  image.alt = "Description of the image";

  tail.classList.add("tail-class");
  image.classList.add("image-class");

  const imageSize = clickCount <= 3 ? 100 + (clickCount - 1) * 50 : 200; // Calculate the new image size
  image.style.height = imageSize + "px";

  const tailSize = clickCount === 4 ? 100 + (clickCount - 1) * 50 : 0; // Calculate the new tail image size
  tail.style.height = tailSize + "px";

  container.appendChild(image);
  container.appendChild(tail);

  pumpBody.classList.add("shaking");
  pumpHandle.classList.toggle("clicked");

  setTimeout(() => {
    pumpBody.classList.remove("shaking");
  }, 500);

  setTimeout(() => {
    pumpHandle.classList.remove("clicked");
  }, 300);

  if (clickCount === 4) {
    roamImages();
  }

  // Add click event listener to the image
  image.addEventListener("click", function() {
    image.style.display = "none"; // Make the image disappear
  });
}

function roamImages() {
  const images = document.querySelectorAll(".image-class");
  images.forEach((img) => {
    img.style.position = "absolute";
    img.style.animation = "roam 20s infinite linear";
    img.style.animationName = "roam"; // Apply the "roam" keyframe animation
  });
}


// let clickCount = 0; // Variable to keep track of the number of clicks
// let images = ["./Graphics/Symbol 100001.png", "./Graphics/Symbol 100002.png", "./Graphics/Symbol 100003.png"]; // Array to hold the image elements
// let tail = null; // Variable to hold the tail image element

// function togglePumpHandle() {
//   const pumpHandle = document.querySelector(".pump-handle");
//   const pumpBody = document.querySelector(".pump-body");
//   const container = document.querySelector(".main");

//   clickCount++; // Increment the click count

//   if (images.length > 0) {
//     // Remove the previous images if they exist
//     images.forEach((img) => {
//       container.removeChild(img);
//     });
//     images = [];
//   }
//   if (tail) {
//     // Remove the previous tail image if it exists
//     container.removeChild(tail);
//   }

//   if (clickCount <= 5) {
//     // Create a new set of images for every 5 clicks
//     for (let i = 0; i < clickCount; i++) {
//       const image = document.createElement("img");
//       image.src = "./Graphics/Symbol 100002.png";
//       image.alt = "Description of the image";
//       image.classList.add("image-class");

//       const imageSize = 100 + i * 50; // Calculate the new image size
//       image.style.height = imageSize + "px";

//       container.appendChild(image);
//       images.push(image);
//     }

//     tail = document.createElement("img");
//     tail.src = "./Graphics/Symbol 100011.png";
//     tail.classList.add("tail-class");
//     container.appendChild(tail);
//   }

//   pumpBody.classList.add("shaking");
//   pumpHandle.classList.toggle("clicked");

//   setTimeout(() => {
//     pumpBody.classList.remove("shaking");
//   }, 500);

//   setTimeout(() => {
//     pumpHandle.classList.remove("clicked");
//   }, 300);

//   if (clickCount % 5 === 4) {
//     roamImages();
//   }

//   // Add click event listener to the images
//   images.forEach((img) => {
//     img.addEventListener("click", function() {
//       img.style.display = "none"; // Make the image disappear
//     });
//   });
// }

// function roamImages() {
//   images.forEach((img) => {
//     img.style.position = "absolute";
//     img.style.animation = "roam 20s infinite linear";
//     img.style.animationName = "roam"; // Apply the "roam" keyframe animation
//   });
// }
