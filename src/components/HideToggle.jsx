import { useState } from "react";

const HideToggle = () => {
  const [visible, setVisible] = useState(true);

  const toggle = () => setVisible(!visible);

  return (
    <div>
      <h2>{visible ? "Hide" : ""}</h2>
      <button onClick={toggle}>{visible ? "Hide" : "Show"}</button>
    </div>
  );
};

export default HideToggle;
