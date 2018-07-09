// import React from "react";
// import "./Slidebar.css";

const slider = document.getElementById("myslider");
const output = document.getElementById("valueSlidebar");
output.innerHTML = slider.value; // Display the default slider value
console.log("this.props", this.props);

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = this.value;
}

const Slidebar = props => {
    return (
        <div>
            <h1 style="text-align:center;color:rgb(150,150,150);font-size:35px;margin:80px 0  50px">Google Material Sliders</h1>
            <input type="range" max="100" value="0" class="clicked" />
        </div>

            {/* // <div className="''slidecontainer">
    //     <input
    //         type="range"
    //         min="1"
    //         max="100"
    //         value="50"
    //         className="slider"
    //         id="myslider" />
    //     <p>Value:
    //     <span id="valueSlidebar"></span>
    //     </p>
    // </div> */}
            );
            }
            export default Slidebar;
            
            
