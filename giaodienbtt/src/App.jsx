import { useState } from 'react';
import './App.scss';
import { dummyData } from './dummyData';

function App() {

  const data = dummyData;

  const [example, setExample] = useState(dummyData.week1[0]);


  return (
    <div className="App">
      <div className='sidebar_main'>
        <section className="app">
          <aside className="sidebar">
            <header>
              <strong>Ngô Đức Thắng </strong><br /><br />
              <strong>MSSV: 20183831</strong>
            </header>
            <nav className="sidebar-nav">
              <ul>
                <li>
                  <a href="#">1<span>Tuần số 1</span> <i class="fas fa-angle-down"></i></a>
                  <ul className="nav-flyout">
                    {
                      dummyData.week1.map((exam) => (
                        <li onClick={() => setExample(exam)}>
                          <a href="#">{exam.title}</a>
                        </li>
                      ))
                    }
                  </ul>
                </li>
                <li>
                  <a href="#">2<span>Tuần số 2</span> <i class="fas fa-angle-down"></i></a>
                  <ul className="nav-flyout">
                    {
                      dummyData.week2.map((exam) => (
                        <li onClick={() => setExample(exam)}>
                          <a href="#">{exam.title}</a>
                        </li>
                      ))
                    }
                  </ul>
                </li>
                <li>
                  <a href="#">3<span>Tuần số 3</span> <i class="fas fa-angle-down"></i></a>
                  <ul className="nav-flyout">
                    {
                      dummyData.week3.map((exam) => (
                        <li onClick={() => setExample(exam)}>
                          <a href="#">{exam.title}</a>
                        </li>
                      ))
                    }
                  </ul>
                </li>
                <li>
                  <a href="#">4<span>Tuần số 4</span> <i class="fas fa-angle-down"></i></a>
                  <ul className="nav-flyout">
                    {
                      dummyData.week4.map((exam) => (
                        <li onClick={() => setExample(exam)}>
                          <a href="#">{exam.title}</a>
                        </li>
                      ))
                    }
                  </ul>
                </li>
              </ul>
            </nav>
          </aside>
        </section>
      </div>
      <div className="maincontent">
        <div className="title_main">
          <strong>Đề bài</strong>
          <p>{example.request}</p>
        </div>
        <div className="in_out">
          <div className="input">
            <strong>Input</strong><br />
            <input value={example.input} type="text" />
            <button>Nhập</button>
          </div>
          <br />
          <div className="output">
            <strong>Output</strong><br />
            <textarea value={example.result} disabled name="" id="" cols="100" rows="5">
            </textarea>
          </div>
        </div>
        <div className="content_code">
          <button>Hiển thị code</button>
          <br />
          <br />
          <textarea style={{ height: "20em" }} value={example.code} disabled name="" id="" cols="100" rows="5" />
        </div>
      </div>
    </div>
  );
}

export default App;
