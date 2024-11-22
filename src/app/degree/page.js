export default function Degree() {
  let goods = [
    "문산동초 졸업",
    "문산동중 졸업",
    "문산제일고 졸업",
    "건국대학교 졸업",
  ];
  return (
    <div className="ml-8">
      <div className="ml-4 font-bold">학력 사항</div>
      {goods.map((a, i) => {
        return (
          <div>
            <h4 key={i}>- {a}</h4>
          </div>
        );
      })}
    </div>
  );
}
