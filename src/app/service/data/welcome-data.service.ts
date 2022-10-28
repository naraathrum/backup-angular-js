import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean{
  constructor(private message:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executedHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8084/hello-world-bean')
    // console.log("Execute Hello World Bean Service")
  }
}
