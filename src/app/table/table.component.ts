import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {
  
  name!: string ;
  email!: string;
  mobile!: number;


  items: Array<any> = [];
  constructor() { }
  settings={
   
    

    actions: {
       add: false,     
      edit: false,     
      delete: false 
    },
   
columns:{
  id:{
    title:'ID',
   
  },
  name:{
    title:'Name',
   
  },
  email:{
    title:'Email',
   
  },
  mobile:{
    title:'MobileNo',

  }

}
};
data=[
  {
    id:1,
    name:'demo',
    email:'demo@gmail.com'
  },
  {
    id:2,
    name:'demo1',
    email:'demo1@gmail.com'
  },
  {
    id:3,
    name:'demo2',
    email:'demo2@gmail.com'
  },
  {
    id:4,
    name:'demo3',
    email:'demo3@gmail.com'
  },
  {
    id:5,
    name:'demo4',
    email:'demo4@gmail.com'
  },
  {
    id:6,
    name:'demo5',
    email:'demo5@gmail.com'
  }
  
]
additem(){
  const newdata= ({
    id:0,
    name:'',
    email:''
  })
  this.data.push(newdata)
  
}

}
