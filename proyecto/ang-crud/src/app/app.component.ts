import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'CRUD Almacenamiento de Tareas';

  taks =[
     {'name':'Trabajar', prioridad:'Alta', responsable:'ancardenasc'},
     {'name':'Comer', prioridad:'Media', responsable:'ancardenasc'},
     {'name':'Dormir', prioridad:'Baja', responsable:'ancardenasc'}
  ];

  model:any={};
  model2:any={};
  msg:string = '';
  hideUpdate:boolean =true;

addtaks():void{
   this.taks.push(this.model);
   this.model ={};
   this.msg ='Tarea Creada';
}

deleteTaks(i):void{
   this.taks.splice(i, 1);
   this.msg ='Tarea eliminada';
}

myValue;
editTaks(i):void{
this.hideUpdate =false;
this.model2.name = this.taks[i].name;
this.model2.position = this.taks[i].prioridad;
this.model2.responsable = this.taks[i].responsable;
this.myValue = i;
}

updateTaks():void{
let i = this.myValue;
for(let j=0; j <this.taks.length; j++){
   if(i == j){
      this.taks[i] = this.model2;
      this.model2 = {};
        this.msg ='Tarea Actualizada';
   }
}
this.hideUpdate = true;
}



}
