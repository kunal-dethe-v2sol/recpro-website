import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SharedService } from './../shared/service/shared.service';

@Injectable()
export class OrganizationService {

    //Variables
    _endpoint = 'organizations';

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
    new(data): Observable<any> {
        return this._sharedService.getHttpService().post(this._endpoint, data);
    }
}
