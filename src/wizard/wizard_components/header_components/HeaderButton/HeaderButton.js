import style from "./HeaderButton.module.css";

function HeaderButton(props) {
  // props.isButtonActive [Boolean]
  // props.value [String]
  const { value, name, isButtonActive } = props;
  return (
    <div className={style["HeaderButton"]}>
      <button
        className={
          isButtonActive
            ? style["header-button-active"]
            : style["header-button-inactive"]
        }
      >
        {value}
      </button>
      <div className={style["StepName"]}>{name}</div>
    </div>
  );
}

export default HeaderButton;
