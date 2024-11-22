/* eslint-disable react/jsx-key */
export default function About() {
  let goods = [
    "현대자동차 10년근무",
    "전원 공인중개사 10년 근무",
    "우리은행 운전직 3년근무",
    "대리운전 5년 근무",
  ];
  return (
    <div className="ml-8">
      <div className="ml-4 font-bold">경력 사항</div>
      {goods.map((a, i) => {
        return <h4 key={i}>- {a}</h4>;
      })}
    </div>
  );
}
