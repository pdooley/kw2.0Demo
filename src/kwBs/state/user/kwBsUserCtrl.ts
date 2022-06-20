//@formatter:off
import {Component}          from '@angular/core';

import {kwBsUserStArr,
        kwBsUserStMsg}      from "./kwBsUserSt";
import {kwNgCtrlAjax}       from "@kwNgCtrl/kwNgCtrlAjax";


const sPROP: string         = "user";
//@formatter:off



@Component({selector: 'kw-bootstrap-user-ctrl-load', template: ``})
export class kwBsUserCtrlLoad extends kwNgCtrlAjax
{
    constructor(msg: kwBsUserStMsg, data: kwBsUserStArr)
    {super(msg, data, sPROP)}
}



