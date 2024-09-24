import Faq from './components/Faq';
import Hello from './components/Hello';
import Hero from './components/Hero';
import More from './components/More';
import Section from './components/Section';

function App() {
  return (
    <div className="relative min-h-screen">
      
      <div className="absolute inset-0 bg-custom-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </div>

    
      <div className="relative z-20">
        <Hello />
      </div>

    
      <div className="relative z-20 flex justify-center items-center min-h-screen">
        <Hero />
      </div>
      <div className="bg-black relative z-20 flex justify-center items-center overflow-hidden border-t-2">
        
        <Section  />
      </div>
      <div className="bg-black relative z-20 flex  overflow-hidden">
        <More  />
      </div>
      <div className="bg-black relative z-20 flex  overflow-hidden">
        <Faq  />
      </div>
    </div>
  );
}

export default App;
