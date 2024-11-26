import Listcomp from "../component/listcomp";

export default function Carrer() {
  const list = [
    "현대자동차 10년근무",
    "전원 공인중개사 10년 근무",
    "우리은행 운전직 3년근무",
    "대리운전 5년 근무",
  ];
  const ltitle = "경력 사항";
  return (
    <div className="">
      <Listcomp list={list} ltitle={ltitle}></Listcomp>
    </div>
  );
}
