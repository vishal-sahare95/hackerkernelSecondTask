import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/config/login/admin/categories/categories';
import { CategoriesService } from 'src/app/config/login/admin/categories/categories.service';
import { Product } from 'src/app/config/login/admin/products/product';
import { ProductService } from 'src/app/config/login/admin/products/product.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    public categoriesArr: Categories[] = []
    public productsARR: Product[] = []
    form: FormGroup

    erroMSG = {
        title: [{ type: 'required', message: ' Title is required' }],
        price: [{ type: 'required', message: ' Price is required' }],
        description: [{ type: 'required', message: ' Description is required' }],
        categoryId: [{ type: 'required', message: ' Category is required' }],
        images: [{ type: 'required', message: ' Images is required' }],
    }

    constructor(private fb: FormBuilder, private categoriesSRV
        : CategoriesService, private produtsSRV: ProductService, private activateRout: ActivatedRoute, private router: Router) {
        this.form = this.fb.group({
            title: ['', [Validators.required]],
            price: ['', [Validators.required]],
            description: ["", [Validators.required]],
            categoryId: ['', [Validators.required]],
            images: [["https://placeimg.com/640/480/any?r=0.9178516507833767"], [Validators.required]]
        })
    }
    ngOnInit(): void {
        this.getAllDatacategories()
        this.getEditData()
        console.log('this i category');
        

    }
    get title() {
        return this.form.get('title')
    }
    get price() {
        return this.form.get('price')
    }
    get description() {
        return this.form.get('description')
    }
    get categoryId() {
        return this.form.get('categoryId')
    }
    get images() {
        return this.form.get('images')
    }
    getAllDatacategories() {
        this.categoriesSRV.getAllCategories().subscribe(suc => {
            this.categoriesArr = suc
        })
    }
    getAllDataProducts() {
        this.produtsSRV.getAllProducts().subscribe(suc => {
            this.productsARR = suc
        })
    }

    saveData() {
        debugger
        console.log(this.form.value);
        const newId = this.activateRout.snapshot.params['id']
        if (this.form.valid) {
            if (newId) {
                this.produtsSRV.putProduct(newId, this.form.value).subscribe(suc => {
                    console.log(suc);
                    this.router.navigateByUrl('/product/list')
                })
            } else {
                this.produtsSRV.postProduct(this.form.value).subscribe(suc => {
                    this.router.navigateByUrl('/product/list')
                    console.log(suc);
                },
                    err => {
                        alert('something wrong')
                    })
            }
        }
        else {
            this.form.markAllAsTouched();
            this.form.markAsTouched()
        }
    }

    getEditData() {
        const newId = this.activateRout.snapshot.params['id']
        if (newId) {

            this.produtsSRV.getByIdProduct(newId).subscribe(suc => {
                this.form = this.fb.group({
                    title: [suc.title],
                    price: [suc.price],
                    description: [suc.description],
                    categoryId: [suc.category?.id],
                    images: [suc.images]
                })
            })
        }
    }


}
