import React from "react";
import IndexPage from "./IndexPage";
import RecallPage from "./RecallPage";

export default function App() {
  const [initialPageOn, setInitialPageOn] = React.useState(true);
  return (
    <>
      {initialPageOn ? <IndexPage setInitialPageOn={setInitialPageOn} /> : <RecallPage/>}
    </>
  );
}