export default function Fruit({ name, price, emoji, soldOut }) {
  return (
    <>
      <li>
        {name} {price} {emoji} {soldOut ? "soldOut" : ""}
      </li>
    </>
  );
}
