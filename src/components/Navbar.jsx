// import React, { useContext, useState } from 'react';
// import { Badge, Drawer } from 'antd';
// import {
//   MenuOutlined,
//   CloseOutlined,
//   ShoppingCartOutlined,
//   SearchOutlined
// } from '@ant-design/icons';
// import "../App.css";
// import { Link } from 'react-router-dom';
// import { CartContext } from '../context/CartContext';

// const WebsiteNavbar = ({ cartedProductLength, input, setInput }) => {
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const [searchVisible, setSearchVisible] = useState(false);


//   let { cartItems } = useContext(CartContext)


//   const toggleDrawer = () => setDrawerVisible(!drawerVisible);


//   const toggleSearch = () => setSearchVisible(!searchVisible);

//   return (
//     <>
//       <nav className="w-100 bg-black  z-10">
//         <div className="container">
//           <div className="d-flex justify-content-between align-items-center py-3">

//             {/* Logo */}
//             <Link to={'/'} className="d-flex align-items-center" style={{ textDecoration: "none", color: "#f5f5f5" }}>
//               <span className="text-lg font-bold ml-2" style={{ color: "#ffff" }}>E-Commerce Website</span>
//             </Link>

//             {/* Center menu for large screens */}
//             <div className="d-none d-md-flex flex-nowrap">
//               <Link to="/" className="nav-link-hover mx-3 hover:text-black transition duration-300" style={{ textDecoration: "none", fontSize: "15px", color: "#fff" , paddingBottom: "5px"}}>Home</Link>
//               <Link to="/collection" className="nav-link-hover mx-3 hover:text-black transition duration-300" style={{ textDecoration: "none", fontSize: "15px", color: "#fff" , paddingBottom: "5px"}}>Shop</Link>
//               <Link to="/about" className="nav-link-hover mx-3 hover:text-black transition duration-300" style={{ textDecoration: "none", fontSize: "15px", color: "#fff" , paddingBottom: "5px"}}>About</Link>
//               <Link to="/contact" className="nav-link-hover mx-3 hover:text-black transition duration-300" style={{ textDecoration: "none", fontSize: "15px", color: "#fff", paddingBottom: "5px" }}>Contact</Link>
//             </div>

//             {/* Icons on the right for large screens */}
//             <div className="d-none d-md-flex align-items-center gap-2">
//               <Link to={'/cart'}>
//                 <Badge count={cartItems.length} style={{
//                   backgroundColor: "black",
//                   color: "goldenrod",
//                   fontWeight: "bold",
//                   fontSize: "15px"
//                 }}>
//                   <ShoppingCartOutlined className="cursor-pointer text-white" style={{ fontSize: '30px', color: "white" }} />
//                 </Badge>
//               </Link>

//               {/* Toggle between Search Icon and X (Close) Icon */}
//               {searchVisible ? (
//                 <CloseOutlined className="text-xl cursor-pointer text-black" style={{ fontSize: '30px' }} onClick={toggleSearch} />
//               ) : (
//                 <SearchOutlined className="text-xl cursor-pointer text-black" style={{ fontSize: '30px' }} onClick={toggleSearch} />
//               )}

//               {/* Search bar toggle for large screens */}
//               {searchVisible && (
//                 <div className="position-absolute start-0 w-100 p-4 bg-black shadow-md z-20">
//                   <input
//                     type="text"
//                     placeholder="Search..."
//                     className="form-control border"
//                     value={input}
//                     onChange={(event) => setInput(event.target.value)}
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Hamburger menu and search for small/medium screens */}
//             <div className="d-md-none d-flex align-items-center gap-2">
//               {/* Toggle between Search Icon and X (Close) Icon */}
//               {/* {searchVisible ? (
//                 <CloseOutlined className="text-xl cursor-pointer text-black" onClick={toggleSearch} />
//               ) : (
//                 <SearchOutlined className="text-xl cursor-pointer text-black" onClick={toggleSearch} />
//               )} */}
//               <Link to={'/cart'}>
//                 <Badge count={cartItems.length} style={{
//                   backgroundColor: "black",
//                   color: "goldenrod",
//                   fontWeight: "bold",
//                   fontSize: "15px"
//                 }} >
//                   <ShoppingCartOutlined className="cursor-pointer " style={{ fontSize: "20px", color: "#fff", marginRight: "5px" }} />
//                 </Badge>
//               </Link>
//               <MenuOutlined className="text-xl cursor-pointer" style={{ color: "#fff" }} onClick={toggleDrawer} />
//             </div>
//           </div>
//         </div>

//         {/* Drawer for mobile menu */}
//         <Drawer
//           title="Menu"
//           placement="right"
//           closable={true}
//           onClose={toggleDrawer}
//           visible={drawerVisible}
//           closeIcon={<CloseOutlined style={{ color: "#000" }} />}
//         >
//           <div className="d-flex flex-column">
//             <Link to="/" className="nav-link-hovers mx-3" style={{ textDecoration: "none", fontSize: "29px", color: "#000" }}>Home</Link>
//             <Link to="/collection" className="nav-link-hovers mx-3" style={{ textDecoration: "none", fontSize: "29px", color: "#000" }}>Shop</Link>
//             <Link to="/about" className="nav-link-hovers mx-3" style={{ textDecoration: "none", fontSize: "29px", color: "#000" }}>About</Link>
//             <Link to="/contact" className="nav-link-hovers mx-3" style={{ textDecoration: "none", fontSize: "29px", color: "#000" }}>Contact</Link>
//           </div>
//         </Drawer>

//         {/* Search bar for small/medium screens */}
//         {searchVisible && (
//           <div className="position-absolute start-0 w-100 p-4 shadow-md z-20 d-md-none">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="form-control"
//               value={input}
//               onChange={(event) => setInput(event.target.value)}
//             />
//           </div>
//         )}
//       </nav >

//       {/* Carousel section - This will be under the search bar */}
//     </>
//   );
// };

// export default WebsiteNavbar;
import React, { useContext, useState } from 'react';
import { Badge, Drawer } from 'antd';
import {
  MenuOutlined,
  CloseOutlined,
  ShoppingCartOutlined,
  SearchOutlined
} from '@ant-design/icons';
import "../App.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const WebsiteNavbar = ({ cartedProductLength, input, setInput }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  let { cartItems } = useContext(CartContext)

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const toggleSearch = () => setSearchVisible(!searchVisible);

  return (
    <>
      <nav className="w-100 bg-black  z-10 mb-5">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-3">

            {/* Logo */}
            <Link to={'/'} className="d-flex align-items-center" style={{ textDecoration: "none", color: "#f5f5f5" }}>
              <span className="text-lg font-bold ml-2" style={{ color: "#ffff" }}>E-Commerce Website</span>
            </Link>

            {/* Center menu for large screens */}
            <div className="d-none d-md-flex flex-nowrap">
              <Link to="/" className="nav-link-hover mx-3 hover:text-black transition duration-300" style={{ textDecoration: "none", fontSize: "15px", color: "#fff", paddingBottom: "5px" }}>Home</Link>
              <Link to="/collection" className="nav-link-hover mx-3 hover:text-black transition duration-300" style={{ textDecoration: "none", fontSize: "15px", color: "#fff", paddingBottom: "5px" }}>Shop</Link>
              <Link to="/about" className="nav-link-hover mx-3 hover:text-black transition duration-300" style={{ textDecoration: "none", fontSize: "15px", color: "#fff", paddingBottom: "5px" }}>About</Link>
              <Link to="/contact" className="nav-link-hover mx-3 hover:text-black transition duration-300" style={{ textDecoration: "none", fontSize: "15px", color: "#fff", paddingBottom: "5px" }}>Contact</Link>
            </div>

            {/* Icons on the right for large screens */}
            <div className="d-none d-md-flex align-items-center gap-2">
              <Link to={'/cart'}>
                <Badge count={cartItems.length} style={{
                  backgroundColor: "black",
                  color: "goldenrod",
                  fontWeight: "bold",
                  fontSize: "15px"
                }}>
                  <ShoppingCartOutlined className="cursor-pointer text-white" style={{ fontSize: '30px', color: "white" }} />
                </Badge>
              </Link>

              {/* Search bar */}
              <div className="relative">
                {searchVisible ? (
                  <CloseOutlined className="text-xl cursor-pointer text-white absolute top-0 right-0" style={{ fontSize: '20px' }} onClick={toggleSearch} />
                ) : (
                  <SearchOutlined className="text-xl cursor-pointer text-white" style={{ fontSize: '30px' }} onClick={toggleSearch} />
                )}
                {searchVisible && (
                  <div className="position-absolute w-100 p-4  z-20" style={{ top: "110px" , left:"0px" }}>
                    <input
                      type="text"
                      placeholder="Search..."
                      className="form-control"
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Hamburger menu and search for small/medium screens */}
            <div className="d-md-none d-flex align-items-center gap-2">
              {/* Toggle between Search Icon and X (Close) Icon */}
              {searchVisible ? (
                <CloseOutlined className="text-xl cursor-pointer text-white" onClick={toggleSearch} />
              ) : (
                <SearchOutlined className="text-xl cursor-pointer text-white" onClick={toggleSearch} />
              )}
              <Link to={'/cart'}>
                <Badge count={cartItems.length} style={{
                  backgroundColor: "black",
                  color: "goldenrod",
                  fontWeight: "bold",
                  fontSize: "15px"
                }} >
                  <ShoppingCartOutlined className="cursor-pointer " style={{ fontSize: "20px", color: "#fff", marginRight: "5px" }} />
                </Badge>
              </Link>
              <MenuOutlined className="text-xl cursor-pointer" style={{ color: "#fff" }} onClick={toggleDrawer} />
            </div>
          </div>
        </div>

        {/* Drawer for mobile menu */}
        <Drawer
          title="Menu"
          placement="right"
          closable={true}
          onClose={toggleDrawer}
          visible={drawerVisible}
          closeIcon={<CloseOutlined style={{ color: "#000" }} />}
        >
          <div className="d-flex flex-column">
            <Link to="/" className="nav-link-hovers mx-3" style={{ textDecoration: "none", fontSize: "29px", color: "#000" }}>Home</Link>
            <Link to="/collection" className="nav-link-hovers mx-3" style={{ textDecoration: "none", fontSize: "29px", color: "#000" }}>Shop</Link>
            <Link to="/about" className="nav-link-hovers mx-3" style={{ textDecoration: "none", fontSize: "29px", color: "#000" }}>About</Link>
            <Link to="/contact" className="nav-link-hovers mx-3" style={{ textDecoration: "none", fontSize: "29px", color: "#000" }}>Contact</Link>
          </div>
        </Drawer>

        {/* Search bar for small/medium screens */}
        {searchVisible && (
          <div className="position-absolute start-0 w-100 p-4 shadow-md z-20 d-md-none" style={{ marginBottom: "50px", zIndex: "22" }}>
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>
        )}
      </nav>

      {/* Carousel section - This will be under the search bar */}
    </>
  );
};

export default WebsiteNavbar;