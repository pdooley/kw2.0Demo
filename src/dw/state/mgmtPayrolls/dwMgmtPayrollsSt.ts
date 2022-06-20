//@formatter:on
import {Injectable}         from "@angular/core";


import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "mgmtPayrolls";

//@formatter:off


@Injectable({providedIn: 'root'})
export class dwMgmtPayrollsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwMgmtPayrollsStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwMgmtPayrollsStView extends kwNgUiStView
{
    constructor(){super()}
}
