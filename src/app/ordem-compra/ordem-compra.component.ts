import { Component } from '@angular/core';

@Component({
  selector: 'xyz-ordem-compra',
  standalone: true,
  imports: [],
  templateUrl: './ordem-compra.component.html',
  styleUrl: './ordem-compra.component.css'
})
export class OrdemCompraComponent {
  public endereco: string = 'Rua XYZ';
  public numero:number = 10;
  public complemento: string = 'Casa B';
  public formaPagamento: string = 'debito';

  //validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  public atualizaEndereco(endereco:string): void{
    this.endereco = endereco;
  }

  public atualizaNumero(numero:string):void{
    this.numero = parseInt(numero);
  }

  public atualizaComplemento(complemento:string):void{
    this.complemento = complemento;
  }

  public atualizaFormaPagamento(formaPagamento:string):void{
    this.formaPagamento = formaPagamento;
    console.log(formaPagamento);
  }


}
