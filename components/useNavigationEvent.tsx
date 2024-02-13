"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // Create a ref to store the previous pathname
  const ref = useRef(pathname);

  useEffect(() => {
    // Check if the pathname has changed and if the previous pathname was '/page'
    if (ref.current !== pathname && ref.current === "/") {
      // Do something before the page changes
      // For example, you could show a confirmation dialog or save some data
      console.log("are you sure!");
    }

    // Update the ref to store the current pathname
    ref.current = pathname;
  }, [pathname]);

  // Return null because this component doesn't render any UI elements
  return null;
}
