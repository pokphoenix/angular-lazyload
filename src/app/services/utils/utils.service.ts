declare var $: any;

export default class UtilsService {
    protected makeArray(val: number) { 
        return new Array(val); 
    }

    public onActivate(){
        //window.scroll(0,0);
        //or document.body.scrollTop = 0;
        //or document.querySelector('body').scrollTo(0,0)
    
    
        
        $("HTML, BODY").stop().animate({ scrollTop: 0 }, 'normal'); 
    
        // let scrollToTop = window.setInterval(() => {
        //     let pos = window.pageYOffset;
        //     if (pos > 0) {
        //         window.scrollTo(0, pos - 20); // how far to scroll on each step
        //     } else {
        //         window.clearInterval(scrollToTop);
        //     }
        // }, 16);
      }

      

}