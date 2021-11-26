var game = new Phaser.Game(900, 150, Phaser.AUTO, '', {preload: preload, create: create, update: update});

var player;
function preload(){
    game.load.spritesheet('doraemon', 'sprites/sprite_sheet_doremon.png', 63, 64);  
    game.load.image("desert", "fondos/nubes.jpg");
  };
  function create(){
      //Agregar color de fondo
      game.stage.backgroundColor = '#8474e2';

      //Agregar imagen de fondo
      game.add.sprite(0,  0, "desert");

      //Colocar el héroe en el escenario
      player = game.add.sprite(game.width / 2, game.height / 2, 'doraemon');
     
      //Las animaciones 
      //True para repetir la animación y se movera a 10 cuadros x seg
      player.animations.add('der', [0,1,2,3], 10,true);
      player.animations.add('izq', [4,5,6,7], 10,true);
      
      //Asignar animaciones a teclado y método de entrada a computadora
      derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
      izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
  };
  function update(){
      if(derecha.isDown){
          player.x += 1;
          player.animations.play('der');
      }
      else if(izquierda.isDown){
        player.x -= 1;
        player.animations.play('izq');
    }
    else {
        player.animations.stop();
        player.frame =1;
    }  
};
