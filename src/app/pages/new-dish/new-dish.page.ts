import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-dish',
  templateUrl: './new-dish.page.html',
  styleUrls: ['./new-dish.page.scss'],
})
export class NewDishPage implements OnInit {
  // public get alertCtrl(): AlertController {
  //   return this._alertCtrl;
  // }
  // public set alertCtrl(value: AlertController) {
  //   this._alertCtrl = value;
  // }

  ingredientsList: string[] = [];
  form!: FormGroup<any>;
  btnCancel: string = '';
  constructor(private _alertCtrl: AlertController, private router: Router, private _translate: TranslateService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(''),
      schedule: new FormControl(''),
      ingredient: new FormControl(''),
    })
  }

  addIngredient() {
    this.ingredientsList.push(this.form.value.ingredient)
  }

  deleteIngredient(ingredient: string) {
    const index = this.ingredientsList.indexOf(ingredient);
    this.ingredientsList.splice(index, 1);
  }

  async onSubmit() {
    this.showAlert();
    //TODO Save this.form.value in database
  }

  private async showAlert() {
    let alert = await this._alertCtrl.create({
      message: this._translate.instant('new.alert.message'),
      buttons: [
        {
          text: this._translate.instant('new.alert.btn1'),
          handler: () => {
            this.btnCancel = 'new';
            this.form.reset();
            this.ingredientsList = [];
            this.router.navigate(['/new'])
          }
        },
        {
          text: this._translate.instant('new.alert.btn2'),
          handler: () => {
            this.btnCancel = 'home';
            this.form.reset();
            this.ingredientsList = [];
            this.router.navigate(['/home'])
          }
        }
      ]
    });
    alert.present();
  }

}
