import React from "react";
// import { redirect } from "react-router-dom";
import styles from "./Error.module.scss";
// import ImageWrapper from "../ImageWrapper";

const Error = () => {
  // const navigate = useNavigate();
  // redirect('/')
  return (
    <div className={styles.container}>
    <img src="images/error.jpg" alt="error 404"/>
    </div>
    
// 2 варіант
    // <ImageWrapper width="100%">
    //   <img src="images/error.jpg" alt="error 404" />
    // </ImageWrapper>
  );
};

export default Error;
