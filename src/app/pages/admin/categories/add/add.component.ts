import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/app/config/login/admin/categories/categories.service';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
    values: string = ''
    public form: FormGroup;

    public erroMSG = {
        name: [
            { type: 'required', message: 'Nmae is required' },

        ],
        image: [
            { type: 'required', message: 'image is required' },

        ],

    }

    constructor(private fb: FormBuilder, private categoriesSRV: CategoriesService, private router: Router, private activeRoute: ActivatedRoute) {
        this.form = this.fb.group({
            name: ['', [Validators.required]],
            image: ['', [Validators.required]]
        })

    }
    ngOnInit(): void {
        if (this.activeRoute.snapshot.params['id']) {
            this.getCategories()
        }

    }

    get name() {
        return this.form.get('name')
    }
    get image() {
        return this.form.get('image')
    }
    saveData() {
        if (this.form.valid) {
            const rid = this.activeRoute.snapshot.params['id']
            if (rid) {
                this.categoriesSRV.putCategories(rid, this.form.value).subscribe(suc => {
                    console.log(suc);
                    this.router.navigateByUrl('categories/list')
                })
            }
            else {
                this.categoriesSRV.postCategories(this.form.value).subscribe(suc => {
                    console.log(suc);
                    this.router.navigateByUrl('categories/list')
                })
            }
        } else {
            this.form.markAllAsTouched()
            this.form.markAsTouched()

        }

    }

    getCategories() {
        const id = this.activeRoute.snapshot.params['id']
        this.categoriesSRV.getIDCategories(id).subscribe(suc => {
            this.form = this.fb.group({
                id: [id],
                name: [suc.name,],
                image: [suc.image,],
            })

        })
    }

}
