import React, { useRef } from "react";
import { useOutsideClick } from "../../common/useOutSideClick";

const Modal = ({ open, close, children }) => {
  const ref = useRef();
  const containerRef = useRef();

  useOutsideClick(ref, containerRef, close);

  // const escFunction = useCallback(
  //   (event) => {
  //     if (event.keyCode === 27) {
  //       close();
  //     }
  //   },
  //   [close]
  // );

  // React.useEffect(() => {
  //   document.addEventListener("keydown", escFunction);

  //   return () => {
  //     document.removeEventListener("keydown", escFunction);
  //   };
  // }, []);

  return (
    <>
      {open && (
        <div
          ref={containerRef}
          className={`fixed flex justify-center items-center h-full w-full top-0 right-0 left-0 z-10 bg-black bg-opacity-50`}
        >
          <div
            className="text-themeblue bg-white rounded-3xl modalcard"
            ref={ref}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
