import React from 'react';


const Title = () => {
    return (
        <div className="title">
            <h1>GhotoGram</h1>
            <h2>Your Pictures</h2>
            <img src={require('./christmas_2012_new_6669.jpg')} style={{
                width: "335px", height: "233px",
                marginLeft: "314px", marginTop: "-51px"
            }} />
            <p>You can upload your photoes and create your own collection of photoes.</p>
        </div>
    )
}

export default Title;