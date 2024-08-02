import styles from "./Textborderline.module.css";

function TextBoderLine({ children, borderLine }) {
  return (
    <>
      <p className={` ` + styles.p}>{children}</p>
    </>
  );
}

export default TextBoderLine;
