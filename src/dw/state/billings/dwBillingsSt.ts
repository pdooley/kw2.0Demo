//@formatter:on
import {Injectable}         from "@angular/core";


import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "billings";

//@formatter:off



@Injectable({providedIn: 'root'})
export class dwBillingsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class dwBillingsStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwBillingsStView extends kwNgUiStView
{
    constructor(){super()}
}
