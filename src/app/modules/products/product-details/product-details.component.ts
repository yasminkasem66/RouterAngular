import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {


  canDeactive: boolean = false;
  productId!: number;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPageId();
  }

  getPageId() {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.productId = +params['id']
    })


  }

  nextBack(id: number) {
    console.log(id);
    // this.router.navigate(['products', id])
    this.router.navigateByUrl(`products/${id}`) //replace the whole route

  }

  canDeactivate() {
    return true;
  }

}
