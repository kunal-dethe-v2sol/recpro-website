import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {SharedService} from './../shared/service/shared.service';

@Component({
    selector: 'canvas-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    //Variables
    public loggedInUserData;
    
    //Constructor parameters
    static get parameters() {
        return [
            Router,
            ActivatedRoute,
            SharedService
        ];
    }


    //Constructor
    constructor(
        private _router,
        private _activatedRoute,
        private _sharedService) {

    }

    //Angular Hooks
    ngOnInit() {
        this.loggedInUserData = this._sharedService.getLoggedInUserData();
    
    }

    //Custom Methods
    logout() {
        this._sharedService.getAuthService().logout();
        this._sharedService.loginEventEmitter.emit(false);
        this._router.navigate(['']);
    }
}