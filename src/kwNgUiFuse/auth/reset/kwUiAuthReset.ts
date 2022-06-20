/**********************************************************************
 *
 * kwNgUiFuse/auth/reset/kwUiAuthReset.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst corporation
 *
 **********************************************************************/

//@formatter:off
import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {fadeInAnim} from "@kwNgUiFuseCmp/fadeIn/kwUiFadeIn";

//@formatter:on


@Component({
    selector: 'kw-ui-auth-reset',
    templateUrl: './kwUiAuthReset.html',
    styleUrls: ['./kwUiAuthReset.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwUiAuthReset implements OnInit {

    username: string = "Patrick Dooley";

    constructor(private router: Router) {
        //console.log("kwUiAuthReset::constructor() called");
    }

    ngOnInit() {
        //console.log("kwUiAuthReset::ngOnInit() called");
    }

    send() {
        //console.log("kwUiAuthReset::send() called");
        this.router.navigate(['/']);
    }

}
