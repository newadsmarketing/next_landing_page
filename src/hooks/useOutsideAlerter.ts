import { useEffect } from "react";

interface IProps {
  wrapperRef: any;
  setOpenNav: (input: boolean) => void;
};

export function useOutsideAlerter({wrapperRef, setOpenNav}: IProps) {
  useEffect(() => {

      function handleClickOutside(event: any) {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
              setOpenNav(false);
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [wrapperRef]);
};