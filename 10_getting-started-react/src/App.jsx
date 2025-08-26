import './App.css'
import { useState } from 'react';
import guitarImage from './assets/guitar.jpg';

function App() {

  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(!showImage); 
  };

  return (
    <div className="bento-container">
      
      <div className="bento-title">About Me</div>


      <div className="bento-row">
        <div className="bento-card">
          <img 
            src="https://media.tenor.com/FvthnLepGgAAAAAM/hi-hello.gif" 
            alt="Amber Rosana" 
          />
        </div>

        <div className="bento-card">
          <h2>👋 Hi!</h2>
          <p>Nice to see you here!</p>
          <p>I am <strong>Amber Princess S. Rosana</strong>!</p>
        </div>

        <div className="bento-card">
          <h2>🎓 Education</h2>
          <p>I am a 3rd-year Bachelor of Science in Information Systems student at La Verdad Christian College.</p>
        </div>
      </div>


      <div className="bento-row">
        <div className="bento-card">
          <h2>🎸 Fun Fact</h2>
          
          {showImage ?  (
            <img
              src={guitarImage}
              alt="Guitar"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
            />
          ) :
          (
            <p>When I’m stressed, I pause everything and play guitar.</p>

          )}
          <button onClick={handleClick}>{showImage ? '❌' : '?'}</button>
        </div>

        <div className="bento-card why-react">
          <h2>⚛️ Why React?</h2>
          <p>I want to learn React because I’ve learned 
          that it is in high demand and can be very useful when looking for a job. 
          I found out that it’s commonly used to build single-page and interactive 
          applications, and that it provides tools that make development easier. 
          Knowing this, I want to study React not only to meet my academic 
          requirements but also to expand my knowledge and strengthen my skills 
          for the future.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
