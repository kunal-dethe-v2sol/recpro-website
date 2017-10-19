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
    list(page = 1, limit = 0): Observable<any> {
        var queryStringParams = {
            page: page
        }
        if(limit) {
            queryStringParams['limit'] = limit;
        }
        return this._sharedService.getHttpService().get(this._endpoint, queryStringParams);
    }

    new(postData) {
        var endpoint = this._endpoint;
        return this._sharedService.getHttpService().post(endpoint, postData, {});
    }
}
