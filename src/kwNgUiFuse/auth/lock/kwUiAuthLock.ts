/**********************************************************************
 *
 * kwNgUiFuse/auth/lock/kwUiAuthLock.ts
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
    selector: 'kw-ui-auth-lock',
    templateUrl: './kwUiAuthLock.html',
    styleUrls: ['./kwUiAuthLock.scss'],
    host: {
        '[@fadeInAnim]': 'true'
    },
    animations: [fadeInAnim]
})
export class kwUiAuthLock implements OnInit {

    username: string = "Patrick Dooley";

    constructor(private router: Router) {
        //console.log("kwUiAuthLock::constructor() called");
    }

    ngOnInit() {
        //console.log("kwUiAuthLock::ngOnInit() called");
    }

    send() {
        //console.log("kwUiAuthLock::send() called");
        this.router.navigate(['/']);
    }

}
