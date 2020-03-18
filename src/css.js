const string=
`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  .skin {
    position: relative;
    background: yellow;
    height: 100vh;
  }
  .nose {
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 140px;
    margin-left: -10px;
    z-index: 2;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
  
  .nose:hover {
    animation: rotate 80ms infinite;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 8px;
  
    top: -18px;
    margin-left: -10px;
    border-radius: 8px 8px 0 0;
    background: black;
  }
  
  .eye {
    border: 2px solid black;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    content: "";
    border: 3px solid black;
    width: 31px;
    height: 31px;
    display: block;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    top: 2px;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
  }
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  .mouth .up .lip {
    border: 5px solid black;
    height: 30px;
    width: 100px;
    background: yellow;
    border-top-color: transparent;
    position: relative;
    left: 50%;
    margin-left: -50px;
  }
  .mouth .up .lip.left {
    border-radius: 0 0 0 50px;
    border-right-color: transparent;
    transform: rotate(-15deg) translateX(-52px);
  }
  .mouth .up .lip.right {
    border-radius: 0 0 50px 0;
    border-left-color: transparent;
    transform: rotate(15deg) translateX(53px);
    margin-top: -30px;
  }
  .mouth .up .lip::before {
    content: "";
    display: block;
    width: 8px;
    height: 30px;
    position: absolute;
    bottom: 0;
    background: yellow;
  }
  .mouth .up .lip.left::before {
    right: -6px;
  }
  .mouth .up .lip.right::before {
    left: -6px;
  }
  .mouth .down {
    height: 150px;
    position: absolute;
    top: 5px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: red;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -180px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    height: 100px;
    width: 100px;
    margin-left: -50px;
    top: 200px;
    background: red;
  }
  .face.left {
    transform: translateX(-180px);
    border-radius: 50px;
  }
  
  .face.left > img{
      transform: rotateY(180deg) translateY(50px);
      transform-origin:0  ;
  }
  .face.right > img{
      transform: translateX(50px) translateY(50px)
  }
  .face.right {
    transform: translateX(180px);
    border-radius: 50px;
  }
`
export default string