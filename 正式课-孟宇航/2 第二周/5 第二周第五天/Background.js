/**
 * Created by DELL on 2018/5/13.
 */
class Background{
    constructor(){
        this.w=game.allImg["bg_day"].width;
        this.h=game.allImg["bg_day"].height;
    };
    updata(){
        this.x--;
        this.x<=-this.w?this.x=0:null;
    };
    render(){
        game.draw.fillStyle="#4ec0ca";
        game.draw.fillRect(0,0,game.canvas.width,game .canvas.height);
        game.draw.drawImage(game.allImg["bg_day"],this.x,game.canvas.height-this.h);
        game.draw.drawImage(game.allImg["bg_day"],this.x+this.w, game.canvas.height-this.h);
        game.draw.drawImage(game.allImg["bg_day"],this.x+this.w*2, game.canvas.height-this.h);
    };
}