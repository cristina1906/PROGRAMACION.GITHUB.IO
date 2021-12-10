// La variable "game" nos sirve para almacenar una instancia (copia) del js del juego, el 512 y el 128 son el tamaaño de la imagen de fondo


var game = new Phaser.Game(512, 128, Phaser.AUTO, "", {preload: preload, create:create, update: update});


// La variable "player" contiene todo lo relacionado al jugador
var player;

// El juego se divide en tre fases, representadas por funciones: preload, create y update
// Con "preload" cargamos en lamemoria de la memoria de la computadora que vamos a usar

function preload(){
    game.load.spritesheet("hero", "sprites/hero.png", 20, 32);
    game.load.image("oceano", "fondo/hielo.jpg");
};

// Con "create" nos permite colocar objetos en el escenario
function create(){
     //Agregar imagen de fondo que se desplaza con tile.sprite
    fondo = game.add.tileSprite(0, 0,512, 128, "oceano")

    //Agregar color de fondo
    game.stage.backgroundColor = "#8474e2";

    //Colocar el heroe en el escenario
    player = game.add.sprite(game.width / 2, 85, "hero");     //SE pone /2, para poner el personej en medio
    
    //animaciones
    player.animations.add('der', [0,1,2,3], 10,true);//10 cuadros por segundo y true indica que la animación se va a repetir
    player.animations.add('izq', [4,5,6,7], 10,true);


    //Asignar las animaciones a teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.T);
};

//La funciónupdate permite actulizar las animaicones con la velocidad que elijamos
function update(){
    if (derecha.isDown){
        fondo.tilePosition.x -= 1;  //+1 es pixel que se agrega al avanzar,si fuera carrera sería +3. El mas es hacia adelnate y menos hacia atras
        player.animations.play ("der");
    }
    else if (izquierda.isDown){
        fondo.tilePosition.x += 1; 
        player.animations.play("izq");
    }

    else{
        player.animations.stop();  //Posición cuando no oprimimos nada
        player.frame = 128;
    }
};
