/**********************************************************************
 *
 * kwNgUi/state/attrs/kwNgUiAttrsSt
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
import {Injectable}         from "@angular/core";

import {kwBsStArr}          from "@kwBsStat/kwBsStArr";


const sTAG_ID: string           = "id";

@Injectable({providedIn: 'root'})
export class kwNgUiAttrsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID)}
}
