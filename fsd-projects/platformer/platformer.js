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
     toggleGrid();


    //TODO 2 - Create Platforms
    createPlatform(350, 650, 400, 20, "orange");
    createPlatform(1050, 608, 400, 20, "yellow");
    createPlatform(350, 450, 20, 100, "purple");
    createPlatform(800, 300, 20, 200, "blue");
    createPlatform(700, 400, 20, 150, "red");




    // TODO 3 - Create Collectables
    createCollectable("steve", 550, 600);
    createCollectable("diamond", 695, 400);
    createCollectable("steve", 1050, 500);



    
    // TODO 4 - Create Cannons
    createCannon("top", 550, 700);
    createCannon("bottom", 950, 700);
    createCannon("bottom", 250, 800);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
