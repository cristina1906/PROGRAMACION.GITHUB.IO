var game = new Phaser.Game(600, 600, Phaser.CANVAS, 'Auto', {preload: preload, create: create, update: update});

function preload(){
    game.load.image('auto', 'imagen/mbkart.png');
}

// Agregar fisicas, agrega peso al objeto para que vaya con la gravedad y detecte inercia, coliciones,etc.
function create(){
    game.physics.startSystem(Phaser.physics,'ARCADE')
    
    sprite = game.add.sprite(450, 80, 'auto');
    sprite.anchor.setTo(0.5, 0.5); //cambia el punto de ancla del objeto, en este caso el carro para que gire desde el centro

    game.physics.enable(sprite); // habilitar las físicas
    sprite.body.collideWorldBounds = true; //evita que se salga del escenario

    cursors = game.input.keyboard.createCursorKeys(); //agregar las teclas en este caso son las flechas del teclado
}

function update(){
    sprite.body.velocity.x = 0; 
    sprite.body.velocity.y = 0;
    sprite.body.angularVelocity = 0; // es la que permite que se mueva el carro

    if (cursors.left.isDown){sprite.body.angularVelocity = -200 }

    else if (cursors.right.isDown){sprite.body.angularVelocity = 200 };

    if (cursors.up.isDown){sprite.body.velocity.copyFrom(game.physics.arcade.velocityFromAngle(sprite.angle, 300)
    )};
}