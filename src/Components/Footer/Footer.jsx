import FooterScss from "./Footer.module.scss";
import logo from "../Navbar/logo.svg";

export function Footer() {
  return (
    <div className={FooterScss.footer}>
      <div className={FooterScss.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={FooterScss.service}>
        <h2>客戶服務</h2>
        <div className={FooterScss.list}>
          <p>
            <a>運送說明</a>
          </p>
          <p>
            <a>退換貨相關</a>
          </p>
          <p>
            <a>付款資訊</a>
          </p>
          <p>
            <a>FAQ</a>
          </p>
        </div>
      </div>
      <div className={FooterScss.about}>
        <h2>關於我們</h2>
        <div className={FooterScss.list}>
          <p>
            <a>品牌故事</a>
          </p>
          <p>
            <a>媒體連繫</a>
          </p>
          <p>
            <a>Press kit</a>
          </p>
        </div>
      </div>
      <div className={FooterScss.info}>
        <h2>資訊</h2>
        <div className={FooterScss.list}>
          <p>
            <a>隱私權政策</a>
          </p>
          <p>
            <a>Cookie</a>
          </p>
          <p>
            <a>GDPR</a>
          </p>
        </div>
      </div>
      <div className={FooterScss.contact}>
        <h2>追蹤 ALPHA Shop</h2>
        <div className={FooterScss.list}>
          <p>+886 02123-45678</p>
          <div className={FooterScss.mediaIcons}>
            <a>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a>
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
