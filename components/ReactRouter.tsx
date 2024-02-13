import React, { useEffect } from "react";

const PreventNavigation = () => {
  useEffect(() => {
    const handlePopstate = (event: any) => {
      const message =
        "Are you sure you want to leave? Your changes may not be saved.";
      if (!window.confirm(message)) {
        // If the user chooses to stay, prevent the default behavior
        event.preventDefault();
      }
    };

    // Add event listener for popstate
    window.addEventListener("popstate", handlePopstate);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []); // Empty dependency array ensures the effect runs only once during component mount

  // Your component logic goes here

  return <div>{/* Your component content */}</div>;
};

export default PreventNavigation;
