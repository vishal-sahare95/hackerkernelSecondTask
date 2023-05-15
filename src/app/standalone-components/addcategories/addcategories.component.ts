import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CategiriesService } from 'src/app/config/categiries.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addcategories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.css']
})
export class AddcategoriesComponent {
  values: string = ''
  public form: FormGroup;
  public isSnapShotID?: number

  public erroMSG = {
    name: [
      { type: 'required', message: 'Nmae is required' },

    ],
    image: [
      { type: 'required', message: 'image is required' },

    ],

  }

  constructor(private fb: FormBuilder, private categoriesSRV: CategiriesService, private router: Router, private activeRoute: ActivatedRoute) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })

  }
  ngOnInit(): void {
    this.isSnapShotID = this.activeRoute.snapshot.params['id']
    this.getIdData()
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
        this.categoriesSRV.putCategories(this.isSnapShotID, this.form.value).subscribe((suc: any) => {
          console.log(suc);
          this.router.navigateByUrl('category/list')
        },
          (error) => {
            console.log('something wrong');
          }
        )
      } else {

        this.categoriesSRV.postCategories(this.form.value).subscribe((suc: any) => {
          console.log(suc);
          this.router.navigateByUrl('category/list')
        },
          (error) => {
            console.log('something wrong');

          }
        )
      }
    }
    else {
      this.form.markAllAsTouched()
      this.form.markAllAsTouched()
    }

  }

  getIdData() {
    const nid = this.activeRoute.snapshot.params['id']
    if (nid) {
      this.categoriesSRV.getIdCategories(nid).subscribe((suc: any) => {
        this.form = this.fb.group({
          id: [suc.id],
          name: [suc.name],
          image: [suc.image]
        })
      })

    }
  }
}
