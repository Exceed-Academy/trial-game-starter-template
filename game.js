class mainScene {

  preload() {
      
  }

  create() {
    
  }

  update() {

    if (this.bump(this.player, this.coin)) {
      
    }

    if (this.rightarrowpressed()) {

    } 
      
    if (this.leftarrowpressed()) {

    } 

    if (this.downarrowpressed()) {

    }
      
    if (this.uparrowpressed()) {

    } 
  
  }
  
  coinbump() {

  }
  
    
    
    
    
    
    
    
    
    
  // Exceed Utility Functions
  loadimage(name, location){
      this.load.image(name, location);
  }
    
  place(x, y, name){
      return this.physics.add.sprite(x, y, name);
  }

  createtext(x, y, text){
      let style = { font: '20px Arial', fill: '#fff' };
      return this.add.text(x, y, text, style);
  }

  enablekeyboard(){
      return this.input.keyboard.createCursorKeys();
  }
    
  // Keyboard
  rightarrowpressed(){
      return this.arrow.right.isDown;
  }
   
  leftarrowpressed(){
      return this.arrow.left.isDown;
  }

  uparrowpressed(){
      return this.arrow.up.isDown;      
  }

  downarrowpressed(){
      return this.arrow.down.isDown;      
  }
    
  // Movement
  moveleft(){
      this.player.x -= 3;
  }
    
  moveright(){
      this.player.x += 3;
  }

  moveup(){
      this.player.y -= 3;
  }

  movedown(){
      this.player.y += 3;
  }   
    
  bump(obj1, obj2){
      return this.physics.overlap(obj1, obj2);
  }
    
    increasescore(num){
    this.score += num;
    this.scoreText.setText('score: ' + this.score);
  }
    
  randomlyplace(object){
    object.x = Phaser.Math.Between(100, 600);
    object.y = Phaser.Math.Between(100, 200);      
  }

  playplayeranimation(){
    this.tweens.add({
      targets: this.player,
      duration: 200,
      scaleX: 1.2,
      scaleY: 1.2,
      yoyo: true,
    });
  }

}

colours={ 
     "blue":"#3498db", 
     "red":"#FF0000",
     "green":"#00FF00"
};

new Phaser.Game({
  width: 700,
  height: 300,
  backgroundColor: colours['blue'],
  scene: mainScene,
  physics: { default: 'arcade' },
  parent: 'game',
});