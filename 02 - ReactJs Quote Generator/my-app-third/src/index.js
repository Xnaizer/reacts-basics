import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css"
import 'remixicon/fonts/remixicon.css'

function App() {
    return (
        <>
        <div className="card">
            <div className="top">
                <Header />
                <Identity />
            </div>
            <div className="bottom">
                <Biodata />
                <Highlight />
            </div>
        </div>
        </>  
    );
};

function Header() {
    return (
        <>
            <div className="social-buttons">
                <button><i class="ri-facebook-circle-fill"></i></button>
                <button><i class="ri-instagram-fill"></i></button>
                <button><i class="ri-line-fill"></i></button>
            </div>  
            <div className="social-buttons right">
                <button ><i class="ri-tailwind-css-fill"></i></button>
                <button ><i class="ri-vuejs-fill"></i></button>
            </div>  
        </>
    );
};

function Identity(){
    return (
        <>
            <div className="text">
                <div className="name-wrapper">
                    <div className="name">Xnaizer</div>
                </div>
                <div className="title">Web3 Dev</div>
            </div>  
        </>
    );
};

function Biodata() { 
    return (
        <>
            <div className="desc">
                <p>My name is <b>Xnaizer</b>. I'm a Web Developer.</p>
                <p>sadhjgij kjad sadjkwjk uas wda sadjkawd adaeifasnjd wqtyq9werq0 sadakw dqa8 sahdblaw ausd; sdaiw   saydgw atdfas tsfda gsdkaw asdakh dasujhdgaw aljhda</p>
            </div>  
        </>
    );
};

function Badge({text}) {
    return (
        <>
            <button className="height">{text}</button>
        </>
    )
}

function Highlight() {
    return (
        <> 
            <div className="buttons">
                
                <Badge text="😊 Hello" />
                <Badge text="😊 World" />
                <Badge text="😊 Web3" />
                
            </div>
        </>
    );
};








const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);