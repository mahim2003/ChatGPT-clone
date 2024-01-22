const App=()=> {
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
            <div id="submit">➢</div>

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
