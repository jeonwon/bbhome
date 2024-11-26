/* eslint-disable react/jsx-key */
export default function About() {
  let haves = [];
  return (
    <div className="ml-8">
      <div className="ml-4 font-bold text-2xl">경력 사항</div>
      <div className="text-xl">
        {haves.map((a, i) => {
          return <div key={i}>- {a}</div>;
        })}
      </div>
    </div>
  );
}
