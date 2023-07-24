import React from "react";

const Loading = () => {
  return (
    <main className="h-screen ">
      <div className="min-w-screen min-h-screen font-mono  flex items-center justify-center px-5 py-5">
      <div className="dot-wave ">
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
      </div>
      </div>
    </main>
  );
};

export default Loading;
