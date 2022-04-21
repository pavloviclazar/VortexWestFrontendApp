import style from "./HeaderButton.module.css";

function HeaderButton(props) {
  // props.isButtonActive [Boolean]
  // props.value [String]
  return (
    <button
      className={
        props.isButtonActive
          ? style["header-button-active"]
          : style["header-button-inactive"]
      }
    >
      {props.value}
    </button>
  );
}

export default HeaderButton;
