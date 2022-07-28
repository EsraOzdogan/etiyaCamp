import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList!:Category[]

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(){
    this.categoryService.getList().subscribe(data=>{
      this.categoryList=data
    })
  }

  getCategoryId(category: Category){
    console.log(category.id)
  }

}
