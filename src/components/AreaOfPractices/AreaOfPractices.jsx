import styles from "./AreaOfPractices.module.css";
import {Grid} from "@mui/material";
import Rectangle1 from "../../assests/Rectangle 1.png";
import Rectangle6 from "../../assests/Rectangle 2.png";
import Rectangle2 from "../../assests/Rectangle 3.png";
import Rectangle3 from "../../assests/Rectangle 4.png";
import Rectangle4 from "../../assests/Rectangle 5.png";
import Rectangle5 from "../../assests/Rectangle 6.png";

function AreaOfPractices() {
  const columnSizes = [8, 4, 4, 8, 8, 4];
  const rectangleImages = [Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5, Rectangle6];
  const imageDimensions = [
    { width: '752px', height: '342px' },
    { width: '358px', height: '342px' },
    { width: '358px', height: '342px' },
    { width: '752px', height: '342px' },
    { width: '752px', height: '342px' },
    { width: '358px', height: '342px' },
  ];
  const title=["BUSINESSLAW", "Partnership LAW","REAL ESTATE LAW","BUSINESS LAW","LANDLORD DISPUTES","ELDER ABUSE" ]

  return (
    <div className={styles.container}>
      <div className={styles.heading}>Area of Practices</div>
      <Grid container spacing={1}>
        {rectangleImages.map((image, index) => (
          <Grid item  xs={columnSizes[index]} key={index} className={styles.GridItem}>
            <img src={image}  
            style={{ width: imageDimensions[index].width, height: imageDimensions[index].height }} 
            alt={`Rectangle ${index + 1}`} />
          <div className={styles.title}>{title[index]}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AreaOfPractices;

