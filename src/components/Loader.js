import React from "react";

const Loader = () => {
  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div
        className="spinner-border"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
