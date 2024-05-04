export default function Message() {
  const handler = () => {
    alert("Hello");
  };
  return <button onClick={handler}>Click Return MSG</button>;
}
