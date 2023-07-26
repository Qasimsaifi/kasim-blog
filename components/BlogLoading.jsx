import React from "react";
import Navbar from './Navbar'
const BlogLoading = () => {
  return (
    <body className="bg-gray-100 dark:bg-gray-900">
      <Navbar/>
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
    
    </body>
  );
};

export default BlogLoading;
