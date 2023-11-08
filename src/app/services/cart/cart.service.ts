import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItems';
import { food } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  addToCart(food: food):void{
          let cartItem = this.cart.items.find(item =>item.food.id===food.id);
          if(cartItem){
            this.changeQuantity(food.id, cartItem.quntity + 1);
            return;
          }
          this.cart.items.push(new CartItem(food));           
  }

  removeFormCart(foodId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quntity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }
}
