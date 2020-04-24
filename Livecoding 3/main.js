//shadow Host
const divElement = document.createElement("div");

/*
shadow host : merupakan komponen/node yang terddapat pada regular DOM
                dimana shadow DOM terlampir pada komponen/node ini.
shadow tree : DOM tree didalam shadow DOM.
shadow boundary: batas dari shadow DOM  dengan regular DOm.

shadow root: root node dari shadow DOM
*/


//element yang berada di dalam shadow DOM
const headingElement = document.createElement("h1");
headingElement.innerText = "Ini merupakan konten didalam shadow DOM";
headingElement.value = "test";

//melampirkan shadow root pada shadow host
//mengatur mode shadow dengan nilai open
const shadowRoot = divElement.attachShadow({ mode: "open" });

//const shadowRoot = divElement.attachShadow({ mode: "closed" });
//divElement.shadowRoot //null;
//shadowRoot // # shadow-root (closed)

//menetapkan styling pada shadow DOM
shadowRoot.innerHTML +=
    `
    <style>
    h1 {
        color:green;
    }
    </style>
    `

//memasukkan element heading ke dalam shadow root
shadowRoot.appendChild(headingElement);

//memasukkan elemen shadow host ke regular DOM
document.body.appendChild(divElement);