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
      <h1>This is the About Page</h1>
      <p>This is where we can put our company details. <br/> Like its history, mission, vision, etc. </p>
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
