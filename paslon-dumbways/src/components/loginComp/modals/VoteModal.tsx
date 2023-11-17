import "./LoginModal.css";
import { PilihPaslonPart } from "./PilihPaslonPart";

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const VoteModal: React.FC<props> = ({ isOpen, onClose }) => {
  const handleOverlayClick = () => {
    onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="overlay" onClick={handleOverlayClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <PilihPaslonPart />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
