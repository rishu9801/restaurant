import { Injectable } from '@angular/core';

export interface MenuItem {
  id:number;
  name:string;
  image?:string;
  category:string;
  price:number;
  description?:string;
}

@Injectable({
  providedIn: 'root'
})
  
export class DataService {
  menus:Array<MenuItem> = [];

  constructor() { }

  getData(){
    this.menus = [
      {
      id: 1,
      image: "../../../assets/images/maggi.jpg",
      name: "maggi",
      category: "breakfast",
      price: 12,
      description:
        "I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
     },
     {
      id: 2,
      image: "../../../assets/images/allupakoida.jpg",
      name: "allu pakoida",
      category: "evening",
      price: 20,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 3,
      image: "../../../assets/images/corn.jpg",
      name: "corn",
      category: "breakfast",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 4,
      image: "../../../assets/images/chola.jpg",
      name: "chola",
      category: "lunch",
      price: 50,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 5,
      image: "../../../assets/images/pizza.jpg",
      name: "pizza",
      category: "evening",
      price: 80,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 6,
      image: "../../../assets/images/nonvegthali.jpg",
      name: "Non-Veg Thali",
      category: "dinner",
      price: 180,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 7,
      image: "../../../assets/images/sweet.jpg",
      name: "Sweets",
      category: "dinner",
      price: 60,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 8,
      image: "../../../assets/images/rajmarice.jpg",
      name: "Rajma Rice",
      category: "lunch",
      price: 60,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    },
    {
      id: 9,
      image: "../../../assets/images/samosa.jpg",
      name: "samaso",
      category: "evening",
      price: 10,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
    }];
    return this.menus;
  }
}

