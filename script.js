const Btn1 = document.getElementById("btn1");
      const Btn2 = document.getElementById("btn2");
      const Uteks = document.getElementById("teks");
      const Uteks2 = document.getElementById("teks2");
      const Fig = document.querySelector("figure");
      const myImg = document.querySelector("div", "img");

      function ubah() {
        Uteks.innerHTML = "Hallo!, Saya Albab Jannatul Firdaus";
        myImg.innerHTML =
          '<img src="albab.jpg" alt="Image" style="width:100px; height:100px;" tittle="saya">';
        Uteks2.innerHTML =
          "Sedikit Video.";

        var y = document.createElement("iframe");
        y.setAttribute("src", "https://www.youtube.com/embed/L3xJluy1Pvg?start=25");
        y.setAttribute("width", "304");
        y.setAttribute("alt", "Video Saya");
        Fig.insertAdjacentHTML("afterbegin", y.outerHTML);
      }

      function cantik() {
        var CreateStyle = document.createElement("style");
        document.head.appendChild(CreateStyle);
        var styles = `
        html{margin: 0;padding: 0;}
        body{
            background-color: #0097A7;
        }
        img{
            width: 200px;
        }
        .center {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        } 
        p{
            text-align:center;
            font-size:x-large;
            color:#FFFFFF;   
        }
        button {
            background-color: #FFFFFFF;
            color: #757575;
            border-radius: 10px;
            border: none;
            padding: 10px;
            margin: 10px;
        }
        button:hover {
            color: black;
            background-color: #b2ebf2;
            transition: 1s;
        }`;
        var styleSheet = document.querySelector("style");
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);
      }

      Btn1.addEventListener("click", ubah);
      Btn2.addEventListener("click", cantik);