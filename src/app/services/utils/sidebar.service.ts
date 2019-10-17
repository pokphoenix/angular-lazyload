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
          'text': 'Ng For Ex'
        },
        {
          'url': '/basic/ng-for/ex/1',
          'text': 'Ng For Ex.1'
        },
        {
          'url': '/basic/ng-for/ex/2',
          'text': 'Ng For Ex.2'
        },
        {
          'url': '/basic/ng-for/ex/3',
          'text': 'Ng For Ex.3'
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
