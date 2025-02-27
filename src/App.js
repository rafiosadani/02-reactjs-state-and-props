import "./App.css";
import React, { useState } from "react";
import Counter from "./Counter";
import Greeting from "./Greeting";

function Header() {
  return (
    <header>
      <div className="header">
        <h1>Aplikasi React Saya</h1>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Pertama Saya</h2>
      <p>Ini adalah konten area utamaa.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer">
        <p>&copy; 2025 Aplikasi React Saya - Politeknik Negeri Malang</p>
      </div>
    </footer>
  );
}

function Example() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Nama"
      />
      <input
        type="number"
        value={age}
        onChange={handleAgeChange}
        placeholder="Umur"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        style={{ width: "200px" }}
      />

      <p>
        {name} berumur {age} tahun dan emailnya adalah {email}
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Greeting name="John Doe" />
      <Counter />
      <Example />
      <Footer />
    </div>
  );
}

export default App;
