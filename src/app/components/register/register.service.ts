import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../shared/service/shared.service';

@Injectable()
export class RegisterService {

    //Variables
    _endpoint = 'users';

    //Constructor parameters
    static get parameters() {
        return [
            SharedService
        ];
    }

    //Constructor
    constructor(
        private _sharedService) {


    }

    //Custom Methods
    register(data): Observable<any> {
        return this._sharedService.getHttpService().post(this._endpoint, data);
    }
}
