import HeaderButtonList from "./header_components/HeaderButtonList/HeaderButtonList";

function WizardHeader(props) {
  const { pages, pageIndex, ...rest } = props;

  return (
    <div className="WizardHeader" {...rest}>
      <HeaderButtonList whichButtonIsActive={pageIndex}></HeaderButtonList>
    </div>
  );
}

export default WizardHeader;
