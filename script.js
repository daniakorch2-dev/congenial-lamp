* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #080808;
    color: white;
    min-height: 100vh;
}

header {
    text-align: center;
    padding: 80px 20px;
    background: linear-gradient(180deg, #151515, #080808);
}

header h1 {
    font-size: 70px;
    font-weight: 900;
    letter-spacing: 5px;
}

header p {
    margin-top: 15px;
    font-size: 20px;
    color: #aaa;
}

main {
    text-align: center;
    padding: 60px 20px;
}

main h2 {
    font-size: 35px;
    margin-bottom: 15px;
}

main p {
    color: #aaa;
    font-size: 18px;
    margin-bottom: 35px;
}

button {
    border: none;
    padding: 15px 30px;
    margin: 10px;
    border-radius: 8px;
    background: #e00000;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #ff1a1a;
    transform: scale(1.05);
}