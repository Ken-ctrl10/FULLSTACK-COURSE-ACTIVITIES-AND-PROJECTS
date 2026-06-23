import CloseIcon from "@mui/icons-material/Close";

import ViberQR from "../../assets/images/VIBER-QR.jpg";

function ViberModal({ onClose }) {
  return <div
          className="contact-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="viber-modal-title"
          onClick={onClose}
        >
          <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="contact-modal-close"
              onClick={onClose}
              aria-label="Close Viber modal"
            >
              <CloseIcon />
            </button>

            <h3 id="viber-modal-title">Viber QR Code</h3>
            <p>Scan this to connect with me.</p>
            <img src={ViberQR} alt="Viber QR Code" />
          </div>
  </div>
}

export default ViberModal;