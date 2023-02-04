import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.scss";
import ImageWrapper from "../ImageWrapper";

// Хук useNavigate возвращает функцию, которая позволяет программно перемещаться, на указанную страницу. После ошибки мы возвращаемся на "/" -home? помилка не зберігається у history
const Error = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/", { replace: true });
  }, 2000);
  return (
    // 1 варіант

    // <div className={styles.container}>
    // <img src="/images/error-404.jpg" alt="error 404"/>
    // </div>

    // 2 варіант
    <ImageWrapper width="100%">
      <img src="/images/error-404.jpg" alt="error 404" />
    </ImageWrapper>
  );
};

export default Error;
