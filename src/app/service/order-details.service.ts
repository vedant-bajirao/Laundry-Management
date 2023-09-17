import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


    // clothdetails 
  
    clothDetails = [
      {
        id:1,
        clothName:"Shirt",
        clothDetails:"T-shirts,Shirts",
        clothPrice:200,
        clothImg:"../../../assets/img/shirt.png"
      },
      {
        id:2,
        clothName:"Pants",
        clothDetails:"Jeans,Shorts,Trousers",
        clothPrice:369,
        clothImg:"../../../assets/img/jeans.png"
      },
      {
        id:3,
        clothName:"Saree",
        clothDetails:"sareeeeeeeeeee",
        clothPrice:149,
        clothImg:"../../../assets/img/saree.png"
      },
      {
        id:4,
        clothName:"Blazer",
        clothDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
        clothPrice:140,
        clothImg:"../../../assets/img/blazer.png"
      },
      {
        id:5,
        clothName:"Towel",
        clothDetails:"(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
        clothPrice:105,
        clothImg:"../../../assets/img/towel.png"
      },
      {
        id:6,
        clothName:"Bedsheets",
        clothDetails:"Oreo ice cream",
        clothPrice:219,
        clothImg:"../../../assets/img/towels.png"
      }
    ]
  
  
    
  
  }
