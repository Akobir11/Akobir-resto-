import Styles from "./header.module.css";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className={Styles.headerInfo}>
            <h1>Akobir Resto</h1>
            <p>Dushanba, 15.01 2024</p>
          </div>
          <input type="text" />
        </div>
      </div>
    </header>
  );
}

export default Header;
