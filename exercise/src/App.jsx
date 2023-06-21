import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import imgItem1 from "./assets/img1.jpg";
import imgItem2 from "./assets/img2.png";
import imgItem3 from "./assets/img3.jpg";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let heightStyle = {
    height: "150px",
  };
  return (
    <>
      <div className="wrap-boxes">
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-3 col-4">
              <div className="box custom-shadow">
                <div className="wrap-img" style={heightStyle}>
                  <img
                    src={imgItem1}
                    className="img-fluid h-100 w-100"
                    alt=""
                  />
                </div>
                <div className="text px-1 py-2">
                  <div className="title fw-medium">
                    7 thủ thuật JavaScript bạn nên biết
                  </div>
                  <div className="description">
                    Javascript tips and tricks to Optimize Performance
                  </div>
                </div>
                <div className="box-footer p-2 border-top border-secondary-subtle d-flex justify-content-between">
                  <div className="watch">
                    <i class="bi bi-eye"></i> <span>29</span>
                  </div>
                  <div className="time">19-06-2023</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-4">
              <div className="box custom-shadow">
                <div className="wrap-img">
                  <img src={imgItem2} className="img-fluid" alt="" />
                </div>
                <div className="text px-1 py-2">
                  <div className="title fw-medium">
                    7 thủ thuật JavaScript bạn nên biết
                  </div>
                  <div className="description">
                    Javascript tips and tricks to Optimize Performance
                  </div>
                </div>
                <div className="box-footer p-2 border-top border-secondary-subtle d-flex justify-content-between">
                  <div className="watch">
                    <i class="bi bi-eye"></i> <span>29</span>
                  </div>
                  <div className="time">19-06-2023</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-4">
              <div className="box custom-shadow">
                <div className="wrap-img">
                  <img src={imgItem3} className="img-fluid" alt="" />
                </div>
                <div className="text px-1 py-2">
                  <div className="title fw-medium">
                    7 thủ thuật JavaScript bạn nên biết
                  </div>
                  <div className="description">
                    Javascript tips and tricks to Optimize Performance
                  </div>
                </div>
                <div className="box-footer p-2 border-top border-secondary-subtle d-flex justify-content-between">
                  <div className="watch">
                    <i class="bi bi-eye"></i> <span>29</span>
                  </div>
                  <div className="time">19-06-2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default App;
