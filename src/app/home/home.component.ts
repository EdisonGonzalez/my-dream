import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiserviceService} from '../services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*
  public name;
  public resultado;
  public num;
  public numeroResult;

  public values = [];
  */

  public formReactive: FormGroup;

  /*
  public vec = [{'nombre':22}, {'apellido':122},
                {'nombre':23}, {'apellido':123},
                {'nombre':24}, {'apellido':124},
                {'nombre':25}, {'apellido':125},
                {'nombre':26}, {'apellido':126},
               ];
  */

  /*
  public vec = [{"nombre":22}, {"apellido":122},
                {"nombre":23}, {"apellido":123},
                {"nombre":24}, {"apellido":124},
                {"nombre":25}, {"apellido":125},
                {"nombre":26}, {"apellido":126},
                ]
  */

  constructor(
    private fb: FormBuilder,
    private serv: ApiserviceService
  ) {
    this.createFormCnb();
   }

  ngOnInit() {
    setInterval(() => {
      console.log(this.formReactive);
    }, 10000);
  }

  setUser() {
    this.serv.name = this.formReactive.get('name').get('nombre').value + ' ' + this.formReactive.get('name').get('apellido').value;
  }

  /*
  cambioInput(){
    if(this.name == "Edison"){
      this.resultado = "Eres tu administrador";
    }
    else{
      this.resultado = "No eres un administrador";
    }
  }

  validarNum(){
    if(this.num == "2"){
      this.numeroResult = "2";
    }
    else{
      this.numeroResult = "";
    }
  }
  */

  createFormCnb() {
    this.formReactive = this.fb.group({
      id: ['', ],
      name: this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
      }),
      email: ['', Validators.email],
      phone: ['', Validators.compose([Validators.pattern('[0,9]{1,2}'), Validators.required])],
      phoneName: ['', ]
    });
  }
}
