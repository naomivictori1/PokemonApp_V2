import React from "react";
import DotLoader from "react-spinners/DotLoader";

export default function LoadingPage() {
  return (
    <div className="loading">
      <DotLoader
        color={"#36D7B7"}
        size={200}
        style={{ position: "fixed", top: "50%", left: "50%" }}
      />
    </div>
  );
}
