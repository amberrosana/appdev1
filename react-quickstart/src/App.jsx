import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

function AdminPanel() {
  return (
    <h1>This is the Admin Panel</h1>
  )
}

function LoginForm() {
  return (
    <h1>Login Form</h1>
  )
}

// Conditional Rendering using if...else statement
function App1() {
  let content;
  let isLoggedIn = false;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      {content} 
    </div>
  );
}

// Conditional Rendering using Conditional (ternary) operator
function App2() {
  let isLoggedIn = true;
  return (
    <div>
      {isLoggedIn ? (
        <AdminPanel />
      ) : (
        <LoginForm />
      )}
  </div>
  )
}

// Conditional Rendering using logical && syntax
export default function App3() {
  let isLoggedIn = true;
  return (
    <div>
      {isLoggedIn && <AdminPanel />}
    </div>
  )
}
