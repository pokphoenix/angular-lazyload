import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarUtilsService {

  public sidebars = [
    {text:"basic",url:"/basic",
      sub:[
        {
          'url': '/basic/index',
          'text': 'Basic'
        },
        {
          'url': '/basic/ng-switch',
          'text': 'Ng Switch'
        },
        {
          'url': '/basic/ng-for/ex',
          'text': 'NgFor',
          'sub':[
            {
              'url': '/basic/ng-for/ex/1',
              'text': 'NgFor Ex.1 learning ngFor'
            },
            {
              'url': '/basic/ng-for/ex/2',
              'text': 'NgFor Ex.2 create ngFor by constructor'
            },
            {
              'url': '/basic/ng-for/ex/3',
              'text': 'NgFor Ex.3 create ngFor By function '
            },
            {
              'url': '/basic/ng-for/ex/4',
              'text': 'NgFor Ex.4 Use method from super class'
            },
            {
              'url': '/basic/ng-for/ex/5',
              'text': 'NgFor Ex.5 create ngFor by declare Array'
            },
          ]
        },
        
        {
          'url': '/basic/data-sharing/parent-child',
          'text': 'Data Sharing Parent to Child'
        },
        {
          'url': '/basic/data-sharing/child-parent',
          'text': 'Data Sharing Child to Parent'
        },
        {
          'url': '/basic/life-cycle',
          'text': 'Life Cycle'
        }
       
      ] 
    },
    {text:"customers",url:"/customers" },
    {text:"orders",url:"/orders" },
    {text:"ngclass",url:"/ngclass" },
    {text:"form",url:"/form",
      sub:[
        {
          'url': '/form/normal',
          'text': 'Form Normal'
        },
        {
          'url': '/form/template-driven',
          'text': 'Form template driven'
        },
        {
          'url': '/form/tdf',
          'text': 'Form TDF'
        },
        {
          'url': '/form/reactive',
          'text': 'Form reactive'
        },
        {
          'url': '/form/binding-data',
          'text': 'Binding data'
        },
        {
          'url': '/form/upload',
          'text': 'Upload'
        }
      ]
    },
    {text:"route",url:"/route",
      sub:[
        {
          'url': '/route/index',
          'text': 'route'
        },
        {
          'url': '/route/param-map',
          'text': 'route paramMap'
        },
        {
          'url': '/route/optional-route',
          'text': 'route optional route'
        },
        {
          'url': '/route/relative-navigation',
          'text': 'route relative navigation'
        },
        {
          'url': '/route/child-route',
          'text': 'route child route'
        }
      ]
    },
    {text:"service",url:"/service",
      sub:[
        {
          'url': '/service/employee-normal',
          'text': 'Service Employee Normal'
        },
        {
          'url': '/service/employee-json',
          'text': 'Service Employee Json'
        }
      ]
    },
    {text:"special",url:"/special",
      sub:[
        {
          'url': '/special/drag-and-drop-table',
          'text': 'Drag And Drop'
        },
        {
          'url': '/special/recaptcha',
          'text': 'Recaptcha'
        },
        {
          'url': '/special/google-map',
          'text': 'Google Map' ,
          sub:[
            {
              'url': '/special/google-map/list',
              'text': 'Google Map List' ,
            },
            {
              'url': '/special/google-map/basic',
              'text': 'Google Map Basic' ,
            }
          ]
        }
      ]
    },
    {text:"todo",url:"/todo"},
    {text:"login",url:"/login", 
      sub:[
        {  
          'url': '/login/google',
          'text': 'Login with Google' 
        },
        {  
          'url': 'login/facebook',
          'text': 'Login with Facebook' 
        }
      ]
    },
  ]

  constructor() { }

  getSidebarUrl(){
    return this.sidebars;
  }

  getSidebarUrlByModule(module){
    for( let i = 0 ; i < this.sidebars.length ;i++ ){
      let row = this.sidebars[i];
      if (row.sub!=null && row.sub.length>0 && row.text.trim().toLocaleLowerCase() == module.trim().toLocaleLowerCase()){
        return row.sub;
      }
    }
    return [] ;
  }
}
