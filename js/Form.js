class Form {
  constructor() {
    this.input=createInput("").attribute("placeholder", "introduce tu nombre");
    this.playButton=createButton("Jugar");
    this.titleImg=createImg("./assets/title.png","titulo del juego");
    this.greeting=createElement("h2"); 
  }
  setElementsPosition(){
    this.input.position(120,100)
    this.playButton.position(width/2-100,height/2-80);
    this.titleImg.position(width/2-500,height/2-300);
    this.greeting.position(width/2-300,height/2-100);
  }
  display(){
    this.setElementsPosition();
    this.setElementsStyle();
  }
  setElementsStyle(){
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting"); 
  }
}
