import "./styles.css";

//jsx//
/*

let input = document.getElementById("Input")  --JS

 in JS , it is imperative - you have to tell what to do
 in ReactJS, it is Declerative - you tell react i want XYZ thng to happen and React does that
*/

let count = 0;



export default function App() {
  function handleChange(event) {
    console.log(event.target.value);
  }
  function clickHandler() {
    count++;
    console.log(count);
  }


  return (
    <>
      <>
        <h1>Hello people</h1>
        <h2>Week to ReactJS Day-1 !</h2>.
        <input placeholder="Start Writing here" onChange= //generates event
        {handleChange}/>  
      </>
      <button onClick={clickHandler}> Smash it up!! </button>
    </>
  );
}


