//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "emplTimes";


//@formatter:off



@Injectable({providedIn: 'root'})
export class dwEmplTimesStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}



@Injectable({providedIn: 'root'})
export class dwEmplTimesStInit extends kwNgUiStInit
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class dwEmplTimesStView extends kwNgUiStView
{
    constructor(){super();}
}
