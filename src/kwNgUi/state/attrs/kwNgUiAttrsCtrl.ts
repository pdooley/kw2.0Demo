/**********************************************************************
 *
 * kwNgUi/state/attrs/kwNgUiAttrsCtrlVal.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {Component}         from '@angular/core';

import {kwNgUiAttrsStArr}   from "./kwNgUiAttrsSt";
import {kwNgUiCtrlPropStat} from "@kwNgUiCtrl/kwNgUiCtrlPropStat";
import {kwUiStatusEnum}     from "@kwUiClass/status/kwUiStatusEnum";


const sSTATE: string        = "attrs";
const nSTAT: number         = kwUiStatusEnum.state;

//@formatter:off


@Component({selector: 'kw-ng-ui-attrs-ctrl-arr', template: ``})
export class kwNgUiAttrsCtrlArr extends kwNgUiCtrlPropStat
{
    constructor(arr: kwNgUiAttrsStArr)
    {super(arr, sSTATE, nSTAT)}
}
