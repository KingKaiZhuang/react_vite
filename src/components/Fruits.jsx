import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    { name: "apple", price: 8, emoji: "🍎", soldOut: true },
    { name: "banana", price: 5, emoji: "🍌", soldOut: false },
    { name: "cherry", price: 10, emoji: "🍒", soldOut: true },
    { name: "grape", price: 15, emoji: "🍇", soldOut: false },
    { name: "orange", price: 7, emoji: "🍊", soldOut: true },
  ];
  return (
    <div className="fruit-item">
      {fruits.map((fruit) => (
        <ul>
          <Fruit
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldOut={fruit.soldOut}
          />
        </ul>
      ))}
    </div>
  );
}
