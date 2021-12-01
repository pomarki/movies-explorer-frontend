import "./Popup.css";
import Navigation from "../Navigation/Navigation";

function Popup({ isOpen }) {
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
          <div className="popup__section">
              <Navigation isOpen={true} />
          </div>
      </div>
    </section>
  );
}

export default Popup;
