import './App.css'

function Button() {
  return(
    <button>Edit Button</button>
  )
}

function AdminPanel() {
  return(
    <h1>This is the Admin Panel</h1>
  )
}

function AboutPage() {
  return(
    <>
      <h1 style={{color: "aquamarine"}}>This is the About Page</h1>
      <p>This is where we can put our company details. <br/> Like its history, mission, vision, etc. </p>
      <img 
        alt="logo"
        src="https://i.pinimg.com/1200x/30/fd/63/30fd63cfd90bd7bfeda55fae612f97e8.jpg"
        className="logo"
      />
    </>
  )
}

function App() {
  return (
    <>
      <AdminPanel />
      <Button />
      <AboutPage />
    </>
  )
}

export default App
