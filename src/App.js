/*global chrome*/
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
      <div className="header">
        <div className="content">
          <h1 class="start">
            <span class="end1">Q</span>
            <span class="middle1">Hello World</span>
            <span class="middle2">
              <i class="fas fa-code"></i>
            </span>
            <span class="end2">R</span>
          </h1>
        </div>

        <div className="btn">
          <button  type="">
            <svg
              className="btn-copy"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="App-header">
        <h1></h1>
      </div>
    </div>
  );
}

export default App;
