import NavbarScss from "./Navbar.module.scss";
import logo from "./logo.svg";

export function Navbar() {
  return (
    <div className={NavbarScss.navbar}>
      <ul className={NavbarScss.navLinks}>
        <li>
          <a href="">男款</a>
        </li>
        <li>
          <a href="">女款</a>
        </li>
        <li>
          <a href="">最新消息</a>
        </li>
        <li>
          <a href="">客製商品</a>
        </li>
        <li>
          <a href="">聯絡我們</a>
        </li>
      </ul>
      <div className={NavbarScss.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={NavbarScss.iconLinks}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-cart-shopping"></i>
        <i className="fa-regular fa-moon"></i>
      </div>
    </div>
  );
}
