import "./styles.css"
const Navbar = () => {
    return(
        <>
<div className="navbar bg-base-100 shadow-sm h-[100px]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>صفحه اصلی</a></li>
        <li>
          <a>شرکت گلستان</a>
          <ul className="p-2">
            <li><a>معرفی شرکت</a></li>
            <li><a>تاریخچه گلستان</a></li>
            <li><a>اخبار و اطلاعیه ها</a></li>
            <li><a>مسئولیت های اجتماعی</a></li>
            <li><a>سازمان فروش</a></li>
          </ul>
        </li>
        <li><a>محصولات</a></li>
        <li><a>وبلاگ</a></li>
        <li><a>قرعه کشی</a></li>
        <li><a>استخدام</a></li>
        <li><a>تماس با ما</a></li>
        <li><a>En</a></li>
      </ul>
    </div>
    <a className="logo-link">
        <img className="logo" src="./images/logo.png" alt="logo" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="en"><a>En</a></li>
      <li><a>تماس با ما</a></li>
      <li><a>استخدام</a></li>
      <li><a>قرعه کشی</a></li>
      <li><a>وبلاگ</a></li>
      <li><a>محصولات</a></li>
            <li>
        <details>
          <summary>شرکت گلستان</summary>
          <ul className="p-2">
            <li><a>معرفی شرکت</a></li>
            <li><a>تاریخچه گلستان</a></li>
            <li><a>اخبار و اطلاعیه ها</a></li>
            <li><a>مسئولیت های اجتماعی</a></li>
            <li><a>سازمان فروش</a></li>
          </ul>
        </details>
      </li>
      <li><a>صفحه اصلی</a></li>

        
        
        
        
        
        
    </ul>
  </div>
  </div>
        </>
    )
}
export default Navbar;