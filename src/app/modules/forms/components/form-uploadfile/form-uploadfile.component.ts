import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-form-uploadfile',
  templateUrl: './form-uploadfile.component.html',
  styleUrls: ['./form-uploadfile.component.css']
})
export class FormUploadfileComponent implements OnInit {

  fileData:File[] = [];

  progressPercent:string = "0%";

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  // fileProgress(fileInput: any) {
  //   this.fileData = <File>fileInput.target.files[0];
  // }

  handleFileInput(event) {
    // this.fileData = <File>files.target.files[0];
    if (event.target.files.length > 0) {
      for (const key in event.target.files) {
        // console.log("key "+key+" , "+event.target.files[key].fileName);
        this.fileData.push(<File>event.target.files[key]);
      }
       
    }
  }

  onSubmit() {
    const formData = new FormData();
    

    for(let i=0 ; i < this.fileData.length ; i++)
      formData.append('file[]', this.fileData[i]); 


    this.http.post('http://localhost:3000/upload', formData , {
      reportProgress: true,
      observe: 'events',
      // withCredentials:true  
    })
      .subscribe(events => {
        if(events.type == HttpEventType.UploadProgress) {
            console.log('Upload progress: ', Math.round(events.loaded / events.total * 100) + '%');
            let percent = Math.round(events.loaded / events.total * 100) ; 
            this.progressPercent = percent+"%" ;

        } else if(events.type === HttpEventType.Response) {
            console.log(events);
        }
        
      })
  }

}
