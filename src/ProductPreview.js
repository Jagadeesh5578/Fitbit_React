import React  from "react";
import classes from './ProductPreview.module.css'
const ProductPreview = (props) =>{
   const currentHr = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
  const currentMin = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();

    return (
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewImage} alt="Product Preview" />
          {
            props.showHeartBeatSection ? 
            <div className={classes.HeartBeatSection}>
            <img src="https://cdn-icons-png.flaticon.com/512/865/865969.png"
              alt="heart" />
            <p>78</p>
          </div> :
          <div className={classes.TimeSection}>
          <p>{`${currentHr}:${currentMin}`}</p>
        </div>
          }
          
        

          
        </div>
    );
}
export default ProductPreview;