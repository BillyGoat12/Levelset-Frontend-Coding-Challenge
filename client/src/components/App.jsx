import React, { useState } from "react";
import catData from "../data";
import PopUp from "./PopUp";
import List from "./List";
import RightView from "./RightView";

// root of all components
const App = () => {
  const [cats, setCats] = useState(catData);
  const [view, setView] = useState({});
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: window.innerWidth * 0.9,
        display: "flex",
        flexDirection: "row",
        height: window.innerHeight * 0.9,
      }}
    >
      <PopUp cats={cats} open={open} setOpen={setOpen} view={view} />
      <List cats={cats} view={view} setView={setView} />
      <RightView
        setOpen={setOpen}
        setView={setView}
        view={view}
        cats={cats}
        setCats={setCats}
      />
    </div>
  );
};

export default App;
