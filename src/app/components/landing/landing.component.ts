import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SharedService } from './../shared/service/shared.service';

@Component({
    selector: 'recpro-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

    //Variables


    //Constructor parameters
    static get parameters() {
        return [
            SharedService,
            Router,
            ActivatedRoute
        ];
    }

    //Constructor
    constructor(
        private _sharedService,
        private _router,
        private _activeroute) {


    }

    //Angular Hooks
    ngOnInit() {


    }

    //Custom Methods

}
