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
  const company = {
    name: "MyCompany",
    address: "Sampaloc, Apalit, Pampanga",
    logo: "https://i.pinimg.com/1200x/30/fd/63/30fd63cfd90bd7bfeda55fae612f97e8.jpg"
  }

  return(
    <>
      <h1 style={{color: "aquamarine"}}>This is the About Page</h1>
      <p>{company.name} is based in <br />{company.address}</p>
      <img 
        alt={company.name + "logo"}
        src={company.logo}
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
