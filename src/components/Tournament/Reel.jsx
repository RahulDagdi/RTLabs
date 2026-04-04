
// import React from 'react';
// import './Reel.css';

// const Reel = () => {
//   const qualities = [
//     { id: 1, name: "Adobe Photoshop " },
//     { id: 2, name: "Adobe Illustrator" },
//     { id: 3, name: "Adobe Premiere Pro" },
//     { id: 4, name: "Wondershare filmora" },
//     { id: 5, name: "Adobe Illustrator" },
//     { id: 6, name: "Adobe After Effects" },
//   ];

//   return (

//     <div className='my-5'>

//     <div className="reel-wrapper ">
//       <div className="reel">
//         {qualities.concat(qualities).map((item) => (
//           <div key={item.id} className="reel-item gap-3">
//             <img
//               src="https://wordpress.themeholy.com/bame/wp-content/uploads/2023/12/star.png"
//               alt="icon"
//               height="30px"
//               width="30px"
//             />
//             <span className="reel-name">{item.name}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Reel;


import React from 'react';
import './Reel.css';

const Reel = () => {
  const qualities = [
    { id: 1, name: "Adobe Photoshop" },
    { id: 2, name: "Adobe Illustrator" },
    { id: 3, name: "Adobe Premiere Pro" },
    { id: 4, name: "Wondershare Filmora" },
    { id: 5, name: "Adobe XD" },
    { id: 6, name: "Adobe After Effects" },
  ];

  const duplicatedQualities = [...qualities, ...qualities];

  return (
    <div className="my-5">
      <div className="reel-wrapper">
        <div className="reel">
          {duplicatedQualities.map((item, index) => (
            <div key={`${item.id}-${index}`} className="reel-item gap-3">
              <img
                src="/img/star.png"
                alt="star img"
                height="30px"
                width="30px"
              />
              <span className="reel-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reel;
