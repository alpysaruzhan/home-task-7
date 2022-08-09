import ComponentB from "./ComponentB";

export default function ComponentA(props) {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentB />
    </div>
  );
}
