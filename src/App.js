import React,{useState} from "react"; 
import "./index.css"

function App() {

  //state
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState('')



  let calcBmi = (event)=>{
    //prevent submitting
    event.preventDefault()

    if(weight === 0 || height === 0){
      alert('please enter a valid weight and height')
    }else{
      let bmi = (weight/(height/100)**2)
      setBmi(bmi.toFixed(1))


      // logic for message

      if (bmi < 25){
        setMessage('you are low weight')
      }else if(bmi >=25 && bmi <30){
        setMessage('you are healthy weight')
      } else {
        setMessage('you are over weight')
      }
    }
  }


  // show image based on bmi calculation
  let imgsrc;

  if(bmi < 1){
    imgsrc = null
  } else {
    if(bmi < 25){
      imgsrc = require('../src/assets/low weight.jpg')
    } else if (bmi >=25 && bmi < 30){
      imgsrc = require('../src/assets/healthy weight.jpeg')
    } else {
      imgsrc = require('../src/assets/over weight.jpg')
    }
  }

  let reload = ()=>{
    window.location.reload()
  }
   


  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>weight(kg)</label>
            <input value={weight} onChange={(event) =>setWeight(event.target.value)}/>
          </div>
          <div>
            <label>Height(cm)</label>
            <input value={height} onChange={(event) =>setHeight(event.target.value)} />
          </div>
          <div>
            <button className="btn" type="submit">submit</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>
        </form>

        <div className="center">
          <h3>your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className="img-container">
          <img src={imgsrc} alt=""></img>

        </div>
      </div>
      
    </div>
  );
}

export default App;
