import React from "react";

// const Navbar = () =>{
//   return(
//     <>
//     <nav className="main-nav">
//       <div className="logo">
//       </div>
//     </nav>
//     </>
//   )
// }
function Nav(){

    return(
        <div>
            <nav class="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <div class="container-fluid">
      <a class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
        <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style="height: 20px" alt="" loading="lazy" />
      </a>
    </div>
  </div>
</nav>
<br/>
<nav class="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <div class="container-fluid">
      <a class="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1" href="#">
        <img class="mr-2" src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style="height: 20px" alt="" loading="lazy" />
        <span class="font-medium"></span>
      </a>
    </div>
  </div>
</nav>
</div>
);
};
export default Nav;