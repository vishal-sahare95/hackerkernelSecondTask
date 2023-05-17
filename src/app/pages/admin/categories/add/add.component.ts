import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriesService } from 'src/app/config/login/admin/categories/categories.service';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
    values: string = ''
    public form: FormGroup;
    public isSnapShotID?:number

    public erroMSG = {
        name: [
            { type: 'required', message: 'Nmae is required' },

        ],
        image: [
            { type: 'required', message: 'image is required' },

        ],

    }

    constructor(private fb: FormBuilder, private categoriesSRV: CategoriesService, private router: Router, private activeRoute: ActivatedRoute,private toastr: ToastrService) {
        this.form = this.fb.group({
            name: ['', [Validators.required]],
            image: ['', [Validators.required]]
        })

    }
    ngOnInit(): void {
            this.getCategories()
        this.isSnapShotID=this.activeRoute.snapshot.params['id']
    }

    get name() {
        return this.form.get('name')
    }
    get image() {
        return this.form.get('image')
    }
    saveData() {
        if (this.form.valid) {
            if (this.isSnapShotID) {
                this.categoriesSRV.putCategories(this.isSnapShotID, this.form.value).subscribe(suc => {
                    console.log(suc);
                    this.toastr.success('Data add successfully', 'Done');
                    this.router.navigateByUrl('categories/list')
                },
                (error)=>  this.toastr.error('Something wrong', 'Sorry')
                )
            }
            else {
                this.categoriesSRV.postCategories(this.form.value).subscribe(suc => {
                    console.log(suc);
                    this.toastr.success('Data edit successfully', 'Done');
                    this.router.navigateByUrl('categories/list')
                },
                (error)=>  this.toastr.error('Something wrong', 'Sorry'))
            }
        } else {
            this.form.markAllAsTouched()
            this.form.markAsTouched()

        }

    }

    getCategories() {
        const nid = this.activeRoute.snapshot.params['id']
        if(nid){
               this.categoriesSRV.getIDCategories(nid).subscribe(suc => {
            this.form = this.fb.group({
                id: [nid],
                name: [suc.name,],
                image: [suc.image,],
            })

        }
        ,(error)=>  this.toastr.error('Something wrong', 'Sorry'))
        }
     
    }

}
