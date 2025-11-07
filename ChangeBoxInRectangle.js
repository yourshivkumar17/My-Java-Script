<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toggle Box Size</title>
  <style>
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 200px;
      gap: 50px;
      background-color: #121212;
    }
    .btn {
      height: 100px;
      width: 100px;
      border-radius: 50%;
      font-size: 16px;
      cursor: pointer;
    }
    .box {
      height: 200px;
      width: 200px;
      background-color: red;
      transition: all 0.5s ease; /* smooth animation */
    }
  </style>
</head>
<body>
  <div class="box"></div>
  <button class="btn">Click ME</button>

  <script>
    let div = document.querySelector(".box");
    let btn = document.querySelector(".btn");

    // variable to track toggle state
    let isBig = false;

    btn.addEventListener('click', function() {
      if (!isBig) {
        // make big
        div.style.height = '400px';
        div.style.width = '400px';
        div.style.borderRadius = '50%';
        div.style.backgroundColor = 'yellow';
        isBig = true;
      } else {
        // make small again
        div.style.height = '200px';
        div.style.width = '200px';
        div.style.borderRadius = '0';
        div.style.backgroundColor = 'red';
        isBig = false;
      }
    });
  </script>
</body>
</html>
