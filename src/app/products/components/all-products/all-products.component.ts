import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  products:any[]=[]
  loading:boolean = false;
  categories:string[] = [];
  cartProducts:any[] = []
  constructor(private service:ProductsService){}
  ngOnInit(): void {
      this.getproducts()
      this.getCategories()
  }
  getproducts(){
    this.loading = true
    this.service.getAllproducts().subscribe((res:any) =>{
      this.products = res
      this.loading = false
    }, error => {
      this.loading = false
      alert( error)
     }  )
  }
  getCategories() {
    this.loading = true
    this.service.getAllCategories().subscribe((res:any) => {
      console.log(res)
      this.categories = res
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     })
  }
  filterCategory(event :any){
    let value = event.target.value;
    if(value == "all"){
      this.getproducts()
    }
    else{
      this.getProductsCategory(value)
    }
    
  }
  getProductsCategory(keyword:string) {
    this.loading = true
    this.service.getProductsByCategory(keyword).subscribe((res:any) => {
      this.loading = false
      this.products = res
    })
  }
  addToCart(event:any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let exist = this.cartProducts.find(item => item.item.id == event.item.id)
      if(exist){
        alert("Product in your cart")
      }
      else {
        this.cartProducts.push(event)
        localStorage.setItem("cart" ,JSON.stringify(this.cartProducts))
      }
     
    }
    else{
      this.cartProducts.push(event)
      localStorage.setItem("cart" , JSON.stringify(this.cartProducts))
    }
    

    
  }
  
}
