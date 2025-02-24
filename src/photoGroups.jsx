
import "./PhotoGallery.css";

// // Importing images
import image1 from "./assets/1.jpg";
import image1_1 from "./assets/1.1.jpg";
import image1_2 from "./assets/1.2.jpg";


import image2 from "./assets/2.jpg";
import image2_1 from "./assets/2.1.jpg";
import image2_2 from "./assets/2.2.jpg";


import image3 from "./assets/3.jpg";
import image3_1 from "./assets/3.1.jpg";
import image3_2 from "./assets/3.2.jpg";

import image4 from "./assets/4.jpg";
import image4_1 from "./assets/4.1.jpg";
import image4_2 from "./assets/4.2.jpg";



const photoGroups = [
  { main: image1, others: [image1_1, image1_2] },
  { main: image2, others: [image2_1, image2_2] },
  { main: image3, others: [image3_1, image3_2] },
  { main: image4, others: [image4_1, image4_2] },


];

export default photoGroups;
