import "./App.css";
import Myform from "./components/Myform";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <Myform
        user={{
          name: "Josias",
          email: "Josias@gmail.com",
          bio: "sou um advogado",
          role: "usuario",
        }}
      />
    </div>
  );
}

export default App;
