import React from "react";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div
      className={styles.modal}
      style={{ display: `${props.showModal ? "flex" : "none"}` }}
    >
      <div className={styles.modalContainer}>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <div className={styles.btns}>
          <button className={styles.action} onClick={props.action}>{props.actionBtnTitle}</button>
          <button className={styles.dismiss} onClick={props.dismiss}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
