const App=()=> {

const getMessages = async()=>{
 const options = {
  method: "POST",
  body : JSON.stringify({
    message: "hello how are you?"
  }),
  headers: {
    "Content-Type": "application/json"
  }
 }
  try{
    const response = await fetch('http://localhost:8000/completions', options)
    const data = await response.json()
    console.log(data)
  } catch(error){
    console.error(error);
  }
}

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li></li>
        </ul>
        <nav>
          <p>Made by Mahim</p>
        </nav>
      </section>
      <section className="main">
        <h1>MahimGPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit" onClick={getMessages}>➢</div>

          </div>
          <p className="info">
            Mahim GPT. Free Research Preview.
            This project was made with the help of 
            React and Node.js.
          </p>

        </div>
      </section>
    </div>
  );
}

export default App;
