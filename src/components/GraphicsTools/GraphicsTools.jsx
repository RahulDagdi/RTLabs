// import React from "react";
// import "./Graphicstools.css";

// const tools = [
//   {
//     name: "Adobe Photoshop",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Photoshop-removebg-preview.png",
//   },
//   {
//     name: "Adobe Illustrator",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Illustrator-removebg-preview.png",
//   },
//   {
//     name: "Adobe After Effects",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_After_Effects-removebg-preview.png",
//   },
//   {
//     name: "Adobe Premiere Pro",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Premiere_Pro-removebg-preview.png",
//   },
//   {
//     name: "CorelDRAW",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Corel_Draw_icon-removebg-preview.png",
//   },
//   {
//     name: "Filmora",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Wondershare_filmora_logo.svg-removebg-preview.png",
//   },
//   {
//     name: "Adobe Photoshop",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Photoshop-removebg-preview.png",
//   },
//   {
//     name: "Adobe Illustrator",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Illustrator-removebg-preview.png",
//   },
//   {
//     name: "Adobe After Effects",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_After_Effects-removebg-preview.png",
//   },
//   {
//     name: "Adobe Premiere Pro",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Premiere_Pro-removebg-preview.png",
//   },
//   {
//     name: "CorelDRAW",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Corel_Draw_icon-removebg-preview.png",
//   },
//   {
//     name: "Filmora",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Wondershare_filmora_logo.svg-removebg-preview.png",
//   },
//    {
//     name: "CorelDRAW",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Corel_Draw_icon-removebg-preview.png",
//   },
//   {
//     name: "Filmora",
//     image: "https://dizitalmantras.com/wp-content/uploads/2023/09/Wondershare_filmora_logo.svg-removebg-preview.png",
//   },

// ];

// const GraphicsTools = () => {
//   return (
//     <section className="tools-section">
//       <h2 className="section-title">Tools You Will Learn</h2>
//       <div className="tools-grid">
//         {tools.map((tool, index) => (
//           <div className="tool-card" key={index}>
//             <img src={tool.image} alt={tool.name} className="tool-image" />
//             <p className="tool-name">{tool.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default GraphicsTools;

import React, { useState } from "react";
import "./Graphicstools.css";
import { FiDownload } from "react-icons/fi";

const GraphicsTools = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tools = [
    {
      name: "Adobe Photoshop",
      image:
        "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Photoshop-removebg-preview.png",
    },
    {
      name: "Adobe Illustrator",
      image:
        "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Illustrator-removebg-preview.png",
    },
    {
      name: "Adobe After Effects",
      image:
        "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_After_Effects-removebg-preview.png",
    },
    {
      name: "Adobe Premiere Pro",
      image:
        "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Premiere_Pro-removebg-preview.png",
    },
    {
      name: "CorelDRAW",
      image:
        "https://dizitalmantras.com/wp-content/uploads/2023/09/Corel_Draw_icon-removebg-preview.png",
    },
    {
      name: "Filmora",
      image:
        "https://dizitalmantras.com/wp-content/uploads/2023/09/Wondershare_filmora_logo.svg-removebg-preview.png",
    },
    {
      name: "Canva",
      image:
        "https://dizitalmantras.com/wp-content/uploads/2023/09/Adobe_Premiere_Pro-removebg-preview.png",
    },
  ];

  const handleDownloadBrochure = () => {
    // Simulate brochure download
    alert(
      "✨ Brochure download started! Our detailed curriculum PDF is ready.",
    );
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section className="gt-section">
        {/* Ambient glows */}
        <div className="gt-ambient gt-ambient--1" />
        <div className="gt-ambient gt-ambient--2" />

        {/* Header */}
        <div className="gt-header">
        

           <div className="about-header">
          <h2 className="about-title">
        Tools You Will{" "}
          
            <span className="about-highlight">Master</span>
          </h2> 
           <p className="about-hero-subtitle">
           Industry-standard creative suite — from photo manipulation to motion
            graphics. Gain hands-on expertise with the world's most powerful
            design tools.
            </p>
        </div>



        
        </div>

        {/* Tools Grid */}
        <div className="gt-grid">
          {tools.map((tool, index) => (
            <div className="gt-card" key={index}>
              <div className="gt-card-inner">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="gt-tool-image"
                />
                <p className="gt-tool-name">{tool.name}</p>
              </div>
            </div>
          ))}
        </div>

      
      </section>

     
    </>
  );
};

export default GraphicsTools;
