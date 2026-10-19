$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500,0,20,290,"blue");
createPlatform(350,400,250,20,"blue");
createPlatform(0,300,350,20,"blue");
createPlatform(700,300,100,20,"blue");
createPlatform(800,200,350,20,"blue");
createPlatform(800,200,20,120,"blue");
createPlatform(1100,320,1400,20,"darkblue");
createPlatform(1100,320,20,180,"darkblue");
createPlatform(900,500,220,20,"darkblue");
createPlatform(500,620,380,20,"darkblue");
createPlatform(0,729,160,10,"darkblue");
createPlatform(930,729,470,15,"darkblue");
createPlatform(350,300,20,120,"blue");
createPlatform(500,420,20,220,"darkblue");

    // TODO 3 - Create Collectables
createCollectable("database",1280,673);
createCollectable("database",720,250);
createCollectable("database",630,570);
createCollectable("database",200,680);
    
    // TODO 4 - Create Cannons
createCannon("top",510,720);
createCannon("top",710,770);
createCannon("right",200,1020,20,20,50,200);
createCannon("left",524,1860);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
