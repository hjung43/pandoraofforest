import styles from "./DeleteModal.module.css";
import yes from "../../../assets/confirm.png";
import no from "../../../assets/no.png";
import { deleteArticle } from "./api";
import { useNavigate } from "react-router-dom";
const DeleteModal = ({ setOpenDeleteModal, item, refreshList }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    deleteArticle({ item });
    window.alert("삭제되었습니다!");
    refreshList(); // 삭제 후 목록을 새로 고치기 위해 호출
    navigate("/");
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>정말 삭제하시겠습니까?</div>
      <div className={`${styles.btnC}`}>
        <button className={`${styles.dBtn}`} onClick={handleDelete}>
          <img src={yes} alt="확인" style={{ width: "68px", height: "28px" }} />
        </button>
        <button
          className={`${styles.dBtn}`}
          onClick={() => setOpenDeleteModal(false)}
        >
          <img src={no} alt="취소" style={{ width: "68px", height: "28px" }} />
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;