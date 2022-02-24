
const flocoDeNeve = class {
    constructor() {
        this.pos_x = Math.floor(Math.random() * screen.width);
        this.pos_x_inicial = this.pos_x;
        this.pos_y = -10; //Math.floor(Math.random() * screen.height);
        this.deslocamento = Math.floor(Math.random() * 100);
        this.deslocamento = this.deslocamento < 50 ? 50 : this.deslocamento;
        this.pos_x_max = this.pos_x_inicial + ( this.deslocamento / 2 );
        this.pos_x_min = this.pos_x_inicial - this.deslocamento / 2;
        const direcao_inicial_ref = Math.random();
        this.direcao = direcao_inicial_ref <= 0.5 ? 'esquerda' : 'direita';

        this.body = document.getElementsByTagName('body')[0];
        this.body.position = 'absolute';

        this.floco = document.createElement('img');
        this.floco.src = './floco_de_neve.png';
        this.body.appendChild(this.floco);
        this.floco.style.left = this.pos_x+'px';
        this.floco.style.top = this.pos_y+'px';
        this.floco.style.width = '10px'; 
        this.floco.style.height = '10px'; 
        this.floco.style.position = 'absolute';
        this.floco.style.transition = 'left 0.1s, top 0.1s';
        

        const movimentaFloco = setInterval(() => {
            this.pos_y = this.pos_y + 5;
            this.floco.style.top = this.pos_y+'px';
            let deslocamento;
            if (this.direcao == 'esquerda') {
                deslocamento = -1;
                this.pos_x = this.pos_x + deslocamento;
                this.floco.style.left = this.pos_x+'px';                
                if (this.pos_x <= this.pos_x_min)
                    this.direcao = 'direita';
            }
            else {
                deslocamento = +1;
                this.pos_x = this.pos_x + deslocamento;
                this.floco.style.left = this.pos_x+'px';                
                if (this.pos_x >= this.pos_x_max)
                    this.direcao = 'esquerda';
            }

            if (this.pos_y >= screen.height - 180) {
                clearInterval(movimentaFloco);
                this.body.removeChild(this.floco);
            }
        }, 100);
    }
}

// for (i=1; i<=100; i++) {
//     new flocoDeNeve();
// }

setInterval(() => {
    new flocoDeNeve();
}, 200);