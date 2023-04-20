
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <link
            href="https://fonts.googleapis.com/css?family=Montserrat"
            rel="stylesheet"
        />
    </head>
    <body>
     
        <div class="container">
            <h1 class="title">Color Lighten/Darken</h1>
            
            <label for="hex">Color (Hex)</label>
            <input type="text" name="hex" id="hexInput" 
            placeholder="#000000"/>
            
            <label for="slider" id="sliderText">0%</label>
            <input type="range" min="0" max="100" value="0"
                class="slider" id="slider" name="slider"</input>
            <p>Input Color</p>
            <div id="inputColor" class="box"></div>
            <p>Altered Color</p>
            <div id="alteredColor" class="box"></div>
        </div>
        
        <script src="index.pack.js"></script>
    </body>
</html>