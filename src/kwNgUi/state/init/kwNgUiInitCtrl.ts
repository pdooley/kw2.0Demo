/**********************************************************************
 *
 * kwNgUi/state/init/kwNgUiInitCtrl.ts
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
import {Component}          from '@angular/core';

import {kwBsCtrlSubApi}     from "@kwBsCtrl/kwBsCtrlSubApi";
import {kwFbCtrlAjax}       from "@kwFb/ctrl/kwFbCtrlAjax";
import {kwNgUiInitStApi,
        kwNgUiInitStArr,
        kwNgUiInitStMsg}    from "./kwNgUiInitSt";


const sPROP: string         = "init";
//@formatter:off


@Component({selector: 'kw-ng-ui-init-ctrl-api', template: ``})
export class kwNgUiInitCtrlApi extends kwBsCtrlSubApi
{
    constructor(api: kwNgUiInitStApi)
    {super(api, sPROP)}
}


@Component({selector: 'kw-ng-ui-init-ctrl-load', template: ``})
export class kwNgUiInitCtrlLoad extends kwFbCtrlAjax
{
    constructor(msg: kwNgUiInitStMsg, arr: kwNgUiInitStArr)
    {super(msg, arr, sPROP)}
}

