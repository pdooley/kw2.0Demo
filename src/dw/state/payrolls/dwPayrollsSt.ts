//@formatter:on
import {Injectable}         from "@angular/core";


import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "payrolls";

//@formatter:off



@Injectable({providedIn: 'root'})
export class dwPayrollsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwPayrollsStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwPayrollsStView extends kwNgUiStView
{
    constructor(){super()}
}
