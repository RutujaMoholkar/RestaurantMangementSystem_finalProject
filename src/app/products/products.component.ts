// products.component.ts
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { NgFor } from '@angular/common';
import { FoodCategory } from '../food-category.model';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories: FoodCategory[] = [];
  products: Product[] = [];
  productToAdd: Product = {
    productId: 0,
    productName: '',
    category: {
      categoryId: 0,
      categoryName: ''
    },
    price: 0
  };
  updatedProduct: Product = {
    productId: 0,
    productName: '',
    category: {
      categoryId: 0,
      categoryName: ''
    },
    price: 0
  };


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        // Handle Product data here
        // For example, you might want to group products by category
        const groupedProductsByCategory = this.groupProductsByCategory(data);
        this.categories = this.convertProductsToFoodCategories(groupedProductsByCategory);
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  private groupProductsByCategory(products: Product[]): Map<number, Product[]> {
    const groupedProducts = new Map<number, Product[]>();
    products.forEach(product => {
      const categoryId = product.category?.categoryId;
      if (categoryId) {
        if (!groupedProducts.has(categoryId)) {
          groupedProducts.set(categoryId, []);
        }
        groupedProducts.get(categoryId)?.push(product);
      }
    });
    return groupedProducts;
  }



  private convertProductsToFoodCategories(groupedProductsByCategory: Map<number, Product[]>): FoodCategory[] {
    const categories: FoodCategory[] = [];
    groupedProductsByCategory.forEach((products, categoryId) => {
      const categoryName = products[0].category.categoryName; // Assuming categoryName is the same for all products in a category
      categories.push({ categoryId, categoryName, products });
    });
    return categories;
  }

  addProduct() {
    this.productService.addProduct(this.productToAdd).subscribe(
      (response) => {
        // Update the UI after successful addition
        this.fetchProducts();
        // Reset productToAdd
        this.productToAdd = {
          productId: 0,
          productName: '',
          category: {
            categoryId: 0,
            categoryName: ''
          },
          price: 0
        };
      },
      (error) => {
        console.error('Error adding product:', error);
      }
    );
  }



  // updateProduct(productId: number) {

  //   // Ensure that the categoryId is valid
  //   if (this.updatedProduct.category && this.updatedProduct.category.categoryId <= 0) {
  //     console.error('Invalid categoryId provided:', this.updatedProduct.category?.categoryId);
  //     return; // Exit the method early if categoryId is invalid
  //   }

  //   this.productService.updateProduct(productId, this.updatedProduct).subscribe(
  //     (response) => {
  //       // Update the UI after successful update
  //       alert('Product updated successfully:');
  //       this.fetchProducts(); // Fetch updated product list
  //     },
  //     (error) => {
  //       console.error('Error updating product:', error);
  //     }
  //   );
  // }

  updateProduct(productId: number) {
    // Ensure that the categoryId is valid
    if (this.updatedProduct.category && this.updatedProduct.category.categoryId <= 0) {
      console.error('Invalid categoryId provided:', this.updatedProduct.category.categoryId);
      return; // Exit the method early if categoryId is invalid
    }

    this.productService.updateProduct(productId, this.updatedProduct).subscribe(
      (response) => {
        // Update the UI after successful update
        alert('Product updated successfully:');
        this.fetchProducts(); // Fetch updated product list
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }




  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this food category?')) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          // Update the UI after successful deletion
          this.fetchProducts();
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
















