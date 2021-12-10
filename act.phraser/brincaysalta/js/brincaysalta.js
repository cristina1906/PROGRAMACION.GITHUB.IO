// La variable "game" nos sirve para almacenar una instancia (copia) del js del juego, el 512 y el 128 son el tamaaño de la imagen de fondo


var game = new Phaser.Game(512, 128, Phaser.AUTO, "", {preload: preload, create:create, update: update});


// La variable "player" contiene todo lo relacionado al jugador
var player;

// El juego se divide en tre fases, representadas por funciones: preload, create y update
// Con "preload" cargamos en lamemoria de la memoria de la computadora que vamos a usar

function preload(){
    game.load.spritesheet("oceano", "sprites/blanco.png", 64, 64);
    game.load.image("night2", "fondos/oceano_.jpg");
};

// Con "create" nos permite colocar objetos en el escenario
function create(){
     //Agregar imagen de fondo
    game.add.sprite(0,  0, "night2");

    //Agregar color de fondo
    game.stage.backgroundColor = "#8474e2";

    //Colocar el heroe en el escenario
    player = game.add.sprite(game.width / 2, game. height / 3, "oceano");     //SE pone /2, para poner el personej en medio
    
    //animaciones
    player.animations.add("der", [80, 81, 82, 83, 84, 85, 86, 87], 10, true);  //10 cuadros por segundo y true indica que la animación se va a repetir
    player.animations.add("izq", [88, 89, 90, 91, 92, 93, 94, 95], 10, true); 

    player.animations.add("c_der", [8, 9, 10], 10, true);  
    player.animations.add("c_izq", [11, 12, 13], 10, true); 

    //Asignar las animaciones a teclas
    derecha = game.input.keyboard.addKey(Phaser.Keyboard.D);
    izquierda = game.input.keyboard.addKey(Phaser.Keyboard.A);
    corre_der = game.input.keyboard.addKey(Phaser.Keyboard.E);
    corre_izq = game.input.keyboard.addKey(Phaser.Keyboard.Q);
};

//La funciónupdate permite actulizar las animaicones con la velocidad que elijamos
function update(){
    if (derecha.isDown){
        player.x += 1;  //+1 es pixel que se agrega al avanzar,si fuera carrera sería +3. El mas es hacia adelnate y menos hacia atras
        player.animations.play ("der");
    }
    else if (izquierda.isDown){
        player.x -= 1;
        player.animations.play("izq");
    }
    else if (corre_der.isDown){
            player.x += 3;
            player.animations.play("c_izq");
    }
    else if (corre_izq.isDown){
        player.x -= 3;
        player.animations.play("c_der");
}
    else{
        player.animations.stop();  //Posición cuando no oprimimos nada
        player.frame = 128;
    }
};
