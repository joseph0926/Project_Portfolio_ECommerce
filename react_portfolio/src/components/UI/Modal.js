import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { uiAction } from "../../store/slice/ui-slice";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  const dispatchFn = useDispatch();
  const modalCloseHandler = () => {
    dispatchFn(uiAction.modalClose);
  };
  return <div className={styles.backdrop} onClick={modalCloseHandler} />;
};

const ModalOverlay = (props) => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <div className={isLoading ? styles["hide-modal"] : styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
