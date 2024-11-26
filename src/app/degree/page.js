import Listcomp from "../component/listcomp";

export default function Degree() {
  const list = [
    "문산동초 졸업",
    "문산동중 졸업",
    "문산제일고 졸업",
    "건국대학교 졸업",
  ];
  const ltitle = "학력사항";

  return (
    <div>
      <Listcomp list={list} ltitle={ltitle}></Listcomp>
    </div>
  );
}
