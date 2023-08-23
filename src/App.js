import Nav from './components/Nav';
import Sidebar from './components/Sidebar';
import Tabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <Nav />
      <section className='assessments container-xxl p-0'>
        <Sidebar />
        <Tabs />
      </section>
    </div>
  );
}

export default App;
