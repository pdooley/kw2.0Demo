//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "schedFulls";


//@formatter:off



@Injectable({providedIn: 'root'})
export class dwSchedFullsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class dwSchedFullsStView extends kwNgUiStView
{
    constructor(){super();}
}
