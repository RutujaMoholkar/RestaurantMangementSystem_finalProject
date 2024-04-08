// import { Component, OnInit } from '@angular/core';
// import { FoodCategory } from '../food-category.model';
// import { FoodCategoryService } from '../services/foodCategory.service';
// import { NgFor } from '@angular/common';


// @Component({
//   selector: 'app-food-category',
//   standalone: true,
//   imports: [NgFor],
//   templateUrl: './food-category.component.html',
//   styleUrls: ['./food-category.component.css']
// })
// export class FoodCategoryComponent implements OnInit {
//   categories: FoodCategory[] = [];
//   newCategoryName: string = '';

//   constructor(private categoryService: FoodCategoryService) { }

//   ngOnInit(): void {
//     this.fetchCategories();
//   }

//   fetchCategories(): void {
//     this.categoryService.getAllCategories().subscribe(categories => {
//       this.categories = categories;
//     });
//   }

//   addCategory(): void {
//     if (this.newCategoryName.trim() !== '') {
//       const newCategory: FoodCategory = {
//         categoryId: null,
//         categoryName: this.newCategoryName,
//         products: []
//       };
//       this.categoryService.addCategory(newCategory).subscribe(
//         (response) => {
//           console.log('Category added successfully:', response);
//           this.fetchCategories();
//           this.newCategoryName = '';
//         },
//         (error) => {
//           console.error('Error adding category:', error);
//         }
//       );
//     }
//   }

//   deleteCategory(categoryId: number): void {
//     this.categoryService.deleteCategory(categoryId).subscribe(() => {
//       console.log('Category deleted successfully');
//       this.fetchCategories();
//     }, error => {
//       console.error('Error deleting category:', error);
//     });
//   }
// }
