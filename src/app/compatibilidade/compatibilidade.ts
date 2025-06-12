import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 necessário para ngModel
import { CommonModule } from '@angular/common'; // 👈 boa prática também importar

@Component({
  selector: 'app-compatibilidade',
  standalone: true, // 👈 ISSO FAZ TODA A DIFERENÇA!
  imports: [CommonModule, FormsModule],
  templateUrl: './compatibilidade.html',
  styleUrls: ['./compatibilidade.scss']
})
export class CompatibilidadeComponent {
  signo1: string = '';
  signo2: string = '';
  resultado: string = '';

  private niveisCompatibilidade: string[] = [
    "Baixa",
    "Paixão fraquinha!",
    "Alta",
    "Paixão Explosiva!",
    "Amor Eterno!"
  ];

  gerarCompatibilidadeAleatoria(): string {
    const randomIndex = Math.floor(Math.random() * this.niveisCompatibilidade.length);
    return this.niveisCompatibilidade[randomIndex];
  }

  calcularCompatibilidade(): void {
    const s1 = this.signo1.toLowerCase().trim();
    const s2 = this.signo2.toLowerCase().trim();

    if (!s1 || !s2) {
      this.resultado = "Por favor, insira os dois signos.";
      return;
    }

    this.resultado = this.gerarCompatibilidadeAleatoria();
  }
}
