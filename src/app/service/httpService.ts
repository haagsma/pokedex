import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

declare const google: any;


@Injectable()
export class HttpService {

    url = 'http://localhost:8080';

    constructor(private http: HttpClient) {}

    public get(url, options = {authorizarion: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImV4cCI6MTU3MzM0MzYxNH0.f1coQwQzZQcQQRBdDVS3XAW7FqyyHr0Y9wZ6lSSUPDk'}) {
        return this.http.get(this.url + url, {headers: options});
    }

    public post(url, data, options = {authorizarion: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImV4cCI6MTU3MzM0MzYxNH0.f1coQwQzZQcQQRBdDVS3XAW7FqyyHr0Y9wZ6lSSUPDk'}) {
        return this.http.post(this.url + url, data, {headers: options});
    }

    public put(url, data, options = {authorizarion: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VybmFtZSIsImV4cCI6MTU3MzM0MzYxNH0.f1coQwQzZQcQQRBdDVS3XAW7FqyyHr0Y9wZ6lSSUPDk'}) {
        return this.http.put(this.url + url, JSON.stringify(data), {headers: options});
    }

}
