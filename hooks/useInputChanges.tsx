"use client";
import { useCallback, useEffect, useState } from "react";
import { useRouteChangeEvents } from "nextjs-router-events";

export default function useInputChanges() {
  const [isTyping, setIsTyping] = useState(false);
  const { confirmationDialog } = useLeaveConfirmation(isTyping, setIsTyping);

  const onInputChange = (e: any) => {
    let inputLength = e.target.value.length;
    if (inputLength === 0) setIsTyping(false);
    else setIsTyping(true);
  };

  return { onInputChange, confirmationDialog };
}

const useLeaveConfirmation = (
  shouldPreventRouteChange: boolean,
  setIsTyping: any,
) => {
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [animate, setAnimate] = useState(false);

  const onBeforeRouteChange = useCallback(() => {
    if (shouldPreventRouteChange) {
      setShowConfirmationDialog(true);
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);
      return false;
    }

    return true;
  }, [shouldPreventRouteChange]);

  // COMMENT OUT THE FOLLOWING useEffect() IF YOU DO NOT WANT SHAKING OF THE WHOLE SCREEN
  useEffect(() => {
    const body = document.querySelector("body");

    if (animate) body?.classList.add("shake");
    else body?.classList.remove("shake");
  }, [animate]);

  const { allowRouteChange } = useRouteChangeEvents({ onBeforeRouteChange });

  return {
    confirmationDialog: (
      <div
        className={`${animate && "error__animation-shaking"} save__container`}
      >
        <div
          className={`${
            animate ? "error__animation-background" : "bg-[#0e0f17] text-white"
          }  rounded-md save_component p-5 slide-bottom ${
            shouldPreventRouteChange ? "" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg" style={{ color: "white" }}>
                You have unsaved changes!{" "}
                {showConfirmationDialog ? "True" : "False"}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setIsTyping(false)}
                className="text-lg font-normal bg-[#3d3e54] hover:bg-[#4c5067] transition-all transition-1 focus:shadow-[#43485d36] inline-flex h-[45px] items-center justify-center rounded-[4px] px-[27px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsTyping(false)}
                className="text-lg font-normal bg-[#5c70d4] hover:bg-[#667ada] transition-all transition-1 focus:shadow-[#43485d36] inline-flex h-[45px] items-center justify-center rounded-[4px] px-[27px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  };
};
