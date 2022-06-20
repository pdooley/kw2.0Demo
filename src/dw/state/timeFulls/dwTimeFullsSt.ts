//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "timeFulls";


//@formatter:off



@Injectable({providedIn: 'root'})
export class dwTimeFullsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}



@Injectable({providedIn: 'root'})
export class dwTimeFullsStView extends kwNgUiStView
{
    constructor(){super();}
}
