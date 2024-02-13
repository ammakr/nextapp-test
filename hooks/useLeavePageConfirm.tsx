import { useCallback, useState } from "react";
import useBeforeUnload from "./useBeforeUnload";

export const Demo = () => {
  const [dirty, toggleDirty] = useState(false);

  const dirtyFn = useCallback(() => {
    console.log("hello");
    return dirty;
  }, [dirty]);

  useBeforeUnload(dirtyFn, () => {
    console.log("it worked!!!!!!!!");
  });

  return (
    <div>
      {dirty && <p>Try to reload or close tab</p>}
      <button onClick={() => toggleDirty(!dirty)}>
        {dirty ? "Disable" : "Enable"}
      </button>
    </div>
  );
};
