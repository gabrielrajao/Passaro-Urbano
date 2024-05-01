import { Oferta } from "./shared/oferta.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, retry } from "rxjs";

@Injectable()
export class OfertasService{

    public Ofertas: Array<Oferta> = [
        {
            id: 1,
            categoria: "restaurante",
            titulo: "Super Burger",
            descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
            anunciante: "Original Burger",
            valor: 29.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/1/img1.jpg"},
                {url: "/assets/ofertas/1/img2.jpg"},
                {url: "/assets/ofertas/1/img3.jpg"},
                {url: "/assets/ofertas/1/img4.jpg"}
            ]
        },
        {
            id: 2,
            categoria: "restaurante",
            titulo: "Cozinha Mexicana",
            descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
            anunciante: "Mexicana",
            valor: 32.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/2/img1.jpg"},
                {url: "/assets/ofertas/2/img2.jpg"},
                {url: "/assets/ofertas/2/img3.jpg"},
                {url: "/assets/ofertas/2/img4.jpg"}
            ]
        
        },
        {
            id: 4,
            categoria: "diversao",
            titulo: "Estância das águas",
            descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
            anunciante: "Estância das águas",
            valor: 31.90,
            destaque: true,
            imagens: [
                {url: "/assets/ofertas/3/img1.jpg"},
                {url: "/assets/ofertas/3/img2.jpg"},
                {url: "/assets/ofertas/3/img3.jpg"},
                {url: "/assets/ofertas/3/img4.jpg"},
                {url: "/assets/ofertas/3/img5.jpg"},
                {url: "/assets/ofertas/3/img6.jpg"}
            ]
        }
    ]


    constructor(private http: HttpClient){}

    public getOfertas(): Promise<Oferta[]>{
        return this.http.get('http://localhost:3000/ofertas?destaque=true').toPromise().then((resposta: any)=>{   
            //console.log(resposta);
            return resposta;
        });

    }
    public getOfertasPorCategoria(categoria:string): Promise<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?categoria=${categoria}`).toPromise().then((resposta: any)=>{   
            //console.log(resposta);
            return resposta;
        });

    

    }

    public getOfertasPorId(id:number): Promise<Oferta>{
        return this.http.get(`http://localhost:3000/ofertas?id=${id}`).toPromise().then((resposta: any)=>{   
            //console.log(resposta);
            return resposta[0];
        });
    }


    public getComoUsarOfertaPorId(id: number): Promise<string>{
        return this.http.get(`http://localhost:3000/como-usar?id=${id}`).toPromise().then((resposta: any)=>{
            //console.log(resposta);
            return resposta[0].descricao;
        })
    }

    public getOndeFicaOfertaPorId(id:number): Promise<string>{
        return this.http.get(`http://localhost:3000/onde-fica?id=${id}`).toPromise().then((resposta: any)=>{
            //console.log(resposta);
            return resposta[0].descricao;
        })
    }

    public pesquisaOfertas(entrada:string): Observable<Oferta[]>{
        return this.http.get(`http://localhost:3000/ofertas?descricao_oferta_like=${entrada}`)
        .pipe(
            retry(10),
            map((x:any)=>{
            return x;

        } ));
    }
    
}