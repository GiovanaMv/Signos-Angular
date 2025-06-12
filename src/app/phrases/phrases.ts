import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-phrases',
  imports: [],
  templateUrl: './phrases.html',
  styleUrl: './phrases.scss'
})
export class PhrasesComponent implements AfterViewInit {
  horoscopos: { [key: string]: string } = {
    aries: "Hoje é dia de ação! Não deixe nada para amanhã.",
    touro: "Foque nas suas prioridades e evite distrações.",
    gemini: "Converse com pessoas novas, será revigorante.",
    cancer: "Priorize seu bem-estar emocional hoje.",
    // ...
  };

  ngAfterViewInit() {
    const elementos = document.querySelectorAll('.signo');
    elementos.forEach(signo => {
      signo.addEventListener('click', () => {
        const nomeSigno = signo.getAttribute('data-signo');
        const mensagem = this.horoscopos[nomeSigno || ''] || 'Signo não encontrado!';
        const msgElemento = document.querySelector('#mensagem');
        if (msgElemento) msgElemento.textContent = mensagem;
      });
    });
  }
}
