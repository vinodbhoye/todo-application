import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [editID,setEditID]=useState(null);
  const [list,setList]=useState([
    { id: 1, text: "Vinod" },
    { id: 2, text: "Rajaram" },
  ]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      if (text.trim() === "") return;
      if (editID) {
        const updatedList = list.map((item) =>
          item.id === editID ? { ...item, text: text } : item
        );
        setList(updatedList);
        setEditID(null);
      } else {
        const newItem = { id: Date.now(), text: text };
        setList([...list, newItem]);
      }
      setText("");
    }
  };

  const handleEdit = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    if (itemToEdit) {
      setText(itemToEdit.text);
      setEditID(id);
    }
  }

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  }

  return (
    <>
      <section id="center">
          <h1>Todo Application !</h1>
          <input type="text" placeholder="Enter your text here..." value={text} onChange={handleInput} onKeyDown={handleOnKeyDown} />
          <div>
            <ol>
              {list.map(item=>(<li key={item.id}><span>{item.text}</span>
              <button onClick={() => handleEdit(item.id)}>E</button ><button onClick={() => handleDelete(item.id)}>D</button></li>))}
            </ol>
          </div>
      </section>

      <div className="ticks">
        <p>All Rights Reserved.</p>
      </div>
      <section id="spacer">
        <h3>Vinod Rajaram Bhoye</h3>
      </section>
    </>
  )
}

export default App
