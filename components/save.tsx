"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface SaveProps {
  // You can define any additional props you need
}

const Save: React.FC<SaveProps> = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [errorMessage, setErrorMessage] = useState<boolean>(true);
  const router = useRouter();

  if (errorMessage)
    return (
      <div
        className={`${
          errorMessage && "error__animation-shaking"
        } save__container`}
      >
        <div
          className={`${
            errorMessage ? "error__animation-background" : "bg-[#0e0f17]"
          }  rounded-md save_component p-5 slide-bottom ${
            isTyping ? "" : "hidden"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg">
                You have unsaved changes! {errorMessage ? "True" : "False"}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {}}
                className="text-lg font-normal bg-[#3d3e54] hover:bg-[#4c5067] transition-all transition-1 focus:shadow-[#43485d36] inline-flex h-[45px] items-center justify-center rounded-[4px] px-[27px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Cancel
              </button>
              <button
                onClick={() => {}}
                className="text-lg font-normal bg-[#5c70d4] hover:bg-[#667ada] transition-all transition-1 focus:shadow-[#43485d36] inline-flex h-[45px] items-center justify-center rounded-[4px] px-[27px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Save;
