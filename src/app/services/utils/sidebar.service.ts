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
          'text': 'NgFor'
        },
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
        {
          'url': '/basic/data-sharing/parent-child',
          'text': 'Data Sharing Parent to Child'
        },
        {
          'url': '/basic/data-sharing/child-parent',
          'text': 'Data Sharing Child to Parent'
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
    }
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
