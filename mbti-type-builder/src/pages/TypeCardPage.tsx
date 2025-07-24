import PersonalityTypeInfo from "../components/PersonalityTypeInfo";
import { PersonalityType } from "../types/personalityTypes";
import { useParams } from "react-router-dom";

const TypeCardPage = () => {
  const { typeParam } = useParams();

  return (
    <PersonalityTypeInfo type={typeParam.toUpperCase() as PersonalityType} />
  );
};

export default TypeCardPage;
