import { React, useState } from "react";
import Shows from "./Shows";
import Actor from "./Actor";
import "./index.css";

const HomePage = () => {
  const [radio, setradio] = useState("");
  const [input, setinput] = useState("");
  const [error, seterror] = useState(false);
  // const [flag, setflag] = useState(false);

  function SetRediobtn() {
    // console.log(e.target.value);

    if (radio === "Shows" && input) {
      return <Shows input={input} error={seterror} />;
    } else if (radio === "Actor" && input) {
      return <Actor input={input} error={seterror} />;
    } else {
      return <></>;
    }
  }

  return (
    <>
      <div className="Homepage">
        <div className="inputBox">
          <div className="Tvmaza">
            <i className="fa-solid fa-tv"></i>TVmaze
          </div>
          <div className="SearchText">Search your favourite shows</div>
          <div>
            <form>
              <div className="rdo" onChange={(e) => setradio(e.target.value)}>
                <input className="radio_btn" type="radio" value="Actor" id="people" name="radio" />
                Actor <br />
                <input className="radio_btn" type="radio" value="Shows" id="shows" name="radio"
                  error={seterror}
                />{" "}
                Shows
              </div>

              <div>
                <input
                  className="input"
                  onChange={(e) => setinput(e.target.value)}
                  placeholder={radio ? "Search " + radio : "eg:friends..."}
                />
                <br></br>
                {error ? <p style={{ color: "red" }}>NoFound</p> : <></>}
                {console.log(radio)}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* {console.log(typeof radio)} */}
      {/* {radio === "Show" && input ? <Shows input={input} /> : <Actor />} */}
      {/* {<Shows input={input} />} */}
      {SetRediobtn()}
    </>
  );
};

export default HomePage;