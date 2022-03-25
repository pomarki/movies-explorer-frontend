import "./LimitErrPopup.css";

function LimitErrPopup({ user, isOpen, onClose }) {

    return (
    <div className={`popup__overlay ${isOpen && "popup_open"}`}>
      <div className="popup__container">
        <div className="popup__main">
          <h1 className="popup__title">{user || "Дорогой друг"}!</h1>
          <p className="popup__text">
            Количество запросов с вашего ip превысило установленный лимит, но
            через некоторое время всё наладится.
          </p>
        </div>
        <button onClick={() => onClose()} className="page__link popup__button">OK</button>
      </div>
    </div>
  );
}

export default LimitErrPopup;
