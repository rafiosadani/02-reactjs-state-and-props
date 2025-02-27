import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Anda menekan tombol tambah sebanyak {count} kali</p>
      <button onClick={handleClick}>Tambah</button>
    </div>
  );
}

export default Counter;
