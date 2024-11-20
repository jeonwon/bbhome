/* eslint-disable react/jsx-key */
export default function About() {
  let goods = ["tomato", "pasta", "coconut"];
  return (
    <>
      <h2>About</h2>
      <h4>상품목록</h4>
      {goods.map((a, i) => {
        return (
          <div>
            <h4 key={i}>{a}</h4>
          </div>
        );
      })}
    </>
  );
}
