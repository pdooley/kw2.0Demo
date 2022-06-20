//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "timeReasons";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwTimeReasonsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwTimeReasonsStView extends kwNgUiStView
{
    constructor(){super();}
}



