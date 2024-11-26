export default function Listcomp({ list, ltitle }) {
  return (
    <div className="ml-8">
      <div className="pl-8 font-bold text-2xl">{ltitle}</div>
      {list.map((a, i) => {
        return (
          <div className="text-xl my-8" key={i}>
            - {a}
          </div>
        );
      })}
    </div>
  );
}
