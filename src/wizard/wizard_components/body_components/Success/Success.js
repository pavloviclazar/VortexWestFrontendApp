import style from "./Success.module.css";
import confirmation from "../../../../../src/check.png";

function Success(props) {
  const { navigateTo, resetFormFields } = props;
  const resetFormAndNavigateToBeginning = () => {
    resetFormFields();
    navigateTo("genres")();
  };
  return (
    <div className={style["SuccessWindow"]}>
      <img className={style["Confirmation"]} src={confirmation} />
      <div className={style["success-title-div"]}>
        Book added successfully
        <br></br>
        <button
          className={style["success-input-div"]}
          onClick={resetFormAndNavigateToBeginning}
        >
          {" "}
          Add new book{" "}
        </button>
      </div>
    </div>
  );
}

export default Success;
