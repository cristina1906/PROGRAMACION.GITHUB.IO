//La función "game" nos sirve para instancia de la copia del juego

var game = new Phaser.Game(502, 401, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var player;

//El juego se divide en tres fases: precargar (preload) cargar (create) y actualizar (update)
//con "proload" cargamos en la memoria de la computadora los elementos que vamos a usar

function preload(){
    game.load.spritesheet('doraemon', 'sprites/odie.png', 31, 60);
    game.load.image("desert", "fondos/background.png");
  };

//La función "create" nos permite colocar objetos en el escenario
  function create(){
      //Agregar color de fondo
      game.stage.backgroundColor = '#8474e2';
      
      //Agregar imagen de fondo que se desplaza con tile.sprite
      fondo = game.add.tileSprite(0, 0, 502, 401, "desert")

      //Colocar el héroe en el escenario
      player = game.add.sprite(game.width/2, game.height/2, 'doraemon');
      
      //Las animaciones 
      //True para repetir la animación y se movera a 10 cuadros x seg
      player.animations.add('der', [0, 1, 2, 3, 4, 5], 10,true);
      player.animations.add('izq', [6, 7, 8, 9, 10, 11], 10,true);
      player.animations.add('arr', [0, 1, 2, 3, 4, 5], 10,true);
      player.animations.add('aba', [6, 7, 8, 9, 10, 11], 10,true);
 
      //Asignar animaciones a teclado y método de entrada a computadora
      derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
      izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
      arriba = game.input.keyboard.addKey(Phaser.Keyboard.F);
      abajo = game.input.keyboard.addKey(Phaser.Keyboard.S);
  };

  //La función "update" permite actualizar las animacioes con velocidad que elijamos 
  
  function update(){
      if(derecha.isDown){
          player.x += 1;
          player.animations.play('der');
      }
      else if(izquierda.isDown){
        player.x -= 1;
        player.animations.play('izq');
    }
    else if(arriba.isDown){
        player.y -= 1;
        player.animations.play('arr');
    }
    else if(abajo.isDown){
        player.y += 1;
        player.animations.play('aba');
    }
    else {
        player.animations.stop();
        player.frame =0;
    }  
};
