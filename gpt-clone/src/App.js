import {useState, useEffect} from 'react'

const App=()=> {
 const [value, setValue] = useState('')
 const [message, setMessage] = useState('')
 const [previousChats, setPreviousChats] = useState([])
 const [currentTitle, setCurrentTitle] = useState(null)

 const getMessages = async()=>{
 const options = {
  method: "POST",
  body : JSON.stringify({
    message: value
  }),
  headers: {
    "Content-Type": "application/json"
  }
 }
  try{
    const response = await fetch('http://localhost:8000/completions', options)
    const data = await response.json()
    setMessage(data.choices[0].message)
  } catch(error){
    console.error(error);
  }
}
  
 useEffect(()=>{
    console.log(currentTitle, value, message)
    if (!currentTitle && value && message){
      setCurrentTitle(value)
    }
    if (currentTitle && value && message){
      setPreviousChats(prevChats=>(
        [...prevChats,
        {
          title: currentTitle,
          role: "user",
          content: value 
        },
      {
        title: currentTitle,
        role: message.role,
        content: message.content
      },
    ]
      ))
    }
 }, [message, currentTitle])

 console.log(previousChats)

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
        {!currentTitle && <h1>MahimGPT</h1>}
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e)=>setValue(e.target.value)}/>
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
