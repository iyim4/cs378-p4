import React from 'react';

// This is a functional component that represents a single volcano
// it renders the name, observatory, alert level, and synopsis
// vdata is the data entry of ONE volcano
const VolcanoData = ({ vdata }) => {
  return (
    <div className="entry">
      <h2>{vdata.volcano_name_appended}</h2> 
      <p>{vdata.obs_fullname}, {vdata.alert_level}</p> 
      <p>Synopsis: {vdata.synopsis}</p>
    </div>
  )
};

export default VolcanoData;

    // <div class="container-fluid row text-center entry">
    //   <div class="col-4">
    //     <img src={"./images/"+item.imageName} alt={"An image of "+item.title} class="img-fluid rounded float-left"/>
    //   </div>
    //   <div class="col-8">
    //     <h2>{item.title}</h2>
    //     <p>{item.description}</p>
    //     <div class="row">
    //       <div class="col-6">
    //         <p>${item.price}</p>
    //       </div>
    //       <div class="col-6">
    //         {/* price */}
    //         <div class="row">
    //           <div class="col-4">
    //             <button class="cart-button" onClick={() => removeItem(item, itemCounts, setItemCounts, subtotal, setSubtotal)}> 
    //               <BsDashCircle /> 
    //             </button> 
    //           </div>
    //           <div class="col-4">
    //             <p>{itemCounts[item.id - 1]}</p> 
    //           </div>
    //           <div class="col-4">
    //             <button class="cart-button" onClick={() => addItem(item, itemCounts, setItemCounts, subtotal, setSubtotal)}> 
    //               <BsPlusCircle /> 
    //             </button> 
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  // );
// };

// export default VolcanoData;
