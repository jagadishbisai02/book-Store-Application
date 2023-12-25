import { IoMdClose } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.min.css";
import "./rightSideBar.css";

const RightSideBar = (props) => {
  const drawerClass = props.show ? "cart-drawer open" : "cart-drawer ";
  console.log(drawerClass);
  return (
    <nav className={drawerClass}>
      <div className="cart">
        <div className="row">
          <div className="section-title-center text-center">
            <div className="closer">
              <span>
                <IoMdClose onClick={props.click} />
              </span>
            </div>
            <h3>Your cart item</h3>
            <div className="section-divider divider-triangle"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default RightSideBar;
