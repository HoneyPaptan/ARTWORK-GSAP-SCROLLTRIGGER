
import './App.css'
import "./index.css"
import battery from "./assets/icons8-battery-90.png"
import baby from "./assets/icons8-sleeping-baby-90.png"
import circle from "./assets/icons8-circle-50.png"
function App() {


  return (
    <>
     <div className="hero">
  <section className="frame-parent">
    <div className="frame-parent-inner">
      <div className="frame-group">
        <div className="rectangle-child-parent">
          <div className="rectangle-child">
            <img className="sleeping-in-bed" loading="eager" alt src="./public/sleeping-in-bed@2x.png" />
          </div>
          <div className="newborn-incubator">
            <p className="newborn">NEWBORN</p>
            <p className="incubator">INCUBATOR</p>
          </div>
        </div>
        <div className="prevents-hypothermia-deaths-in-parent">
          <b className="prevents-hypothermia-deaths-container">
            <p className="prevents-hypothermia">Prevents hypothermia deaths in sub-Sahara</p>
           
          </b>
          <div className="thanks-to-a-container">
            <p className="thanks-to-a">
              Thanks to a special thermal battery, it’s developed
            </p>
            <p className="to-resist-power">
              to resist power cuts, be easily and safely transported
            </p>
            <p className="and-prevent-a">
              and prevent a common cause of newborn deaths.
            </p>
          </div>
          <div className="rectangle-parent">
            <div className="frame-child" />
            <div className="contact-us">Contact Us</div>
          </div>
        </div>
      </div>
    </div>
    <img className="sign-in-icon" loading="eager" alt src="https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
  </section>
  <footer className="line-parent-parent">
    <div className="line-parent">
      <div className="circle-child">
        <div className="full-battery-parent">
          <img className="full-battery-icon" loading="eager" alt src={battery} />
          <b className="h">8h</b>
        </div>
        <div className="battery">Battery</div>
      </div>
    </div>
    <div className="battery-frame">
      <div className="line-frame">
        <div className="log-in" />
      </div>
      <div className="cycle-frame">
        <div className="m-text">
          <img className="circle-icon" loading="eager" alt src={circle}/>
          <b className="m">1m</b>
        </div>
        <div className="cycles">Cycles</div>
      </div>
    </div>
    <div className="sensitive-areas-group">
      <div className="polycarbonate-line" />
      <div className="babys-room-frame">
        <div className="group">
          <div className="sensitive-areas-frame">
            <img className="babys-room-icon" loading="eager" alt src={baby} />
            <b className="m1">1m</b>
          </div>
          <div className="lifes">Lifes</div>
        </div>
      </div>
    </div>
    <div className="line-group">
      <div className="frame-item" />
      <div className="sensitive-areas-frame-group-parent">
        <div className="sensitive-areas-frame-group">
          <img className="sensitive-areas-frame-group-child" alt src="" />
          <div className="rectangle-group">
            <div className="frame-inner" />
            <div className="sensitive-areas">sensitive areas</div>
          </div>
        </div>
        <div className="sensitive-areas-frame-group1">
          <img className="sensitive-areas-frame-group-item" alt src="" />
          <div className="rectangle-container">
            <div className="rectangle-div" />
            <div className="polycarbonate">Polycarbonate</div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    </>
  )
}

export default App
