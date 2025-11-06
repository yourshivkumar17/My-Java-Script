<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 200px;
        gap: 50px;
        background-color: #121212;
    }
    .btn{
        height: 100px;
        width: 100px;
        border-radius: 50%;
    }
</style>
<body>
    <div class="box"></div>
    <button class="btn">Click ME</button>
    <script>
        let div = document.querySelector(".box")
        div.style.height = '200px'
        div.style.width = '200px'
        div.style.backgroundColor = 'red'

        let btn = document.querySelector(".btn")
        btn.addEventListener('click',function(){
            div.style.height = '400px'
            div.style.width = '400px'
            div.style.borderRadius = '50%'
            div.style.backgroundColor = 'yellow'
        })
    </script>
</body>
</html>
