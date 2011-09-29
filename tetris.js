
FIELD_OFFSET_X = 150;
FIELD_OFFSET_Y = 0;

function Tetris() {
    var border;
    var background;
    var game;


    this.setup = function () {
	game = new Game();
	
	background = new Background();
	jaws.preventDefaultKeys(['up', 'down', 'left', 'right', 'space', 'z', 'x']);
    }

    this.update = function() {
	game.update();
    }

    this.draw = function() {
	jaws.context.clearRect(0, 0, jaws.width, jaws.height);
	background.draw();
	game.draw();
    }

}

window.onload = function () {
    jaws.assets.add('media/blueblock.png');
    jaws.assets.add('media/cyanblock.png');
    jaws.assets.add('media/greenblock.png');
    jaws.assets.add('media/orangeblock.png');
    jaws.assets.add('media/purpleblock.png');
    jaws.assets.add('media/redblock.png');
    jaws.assets.add('media/yellowblock.png');

    jaws.assets.add('media/greyblock.png');
    jaws.assets.add('media/emptyblock.png');

    jaws.assets.add('media/numbers/0.png');
    jaws.assets.add('media/numbers/1.png');
    jaws.assets.add('media/numbers/2.png');
    jaws.assets.add('media/numbers/3.png');
    jaws.assets.add('media/numbers/4.png');
    jaws.assets.add('media/numbers/5.png');
    jaws.assets.add('media/numbers/6.png');
    jaws.assets.add('media/numbers/7.png');
    jaws.assets.add('media/numbers/8.png');
    jaws.assets.add('media/numbers/9.png');

    jaws.start(Tetris);
};