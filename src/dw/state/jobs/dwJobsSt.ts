//@formatter:on
import {Injectable}         from "@angular/core";

import { kwBsStApi }        from "@kwBsStat/kwBsStApi";
import { kwBsStArr }        from "@kwBsStat/kwBsStArr";
import { kwBsStMsg }        from "@kwBsStat/kwBsStMsg";
import {kwNgUiStInit}         from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}         from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "jobs";

//@formatter:off



@Injectable({providedIn: 'root'})
export class dwJobsStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwJobsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwJobsStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwJobsStMsg extends kwBsStMsg
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwJobsStView extends kwNgUiStView
{
    constructor(){super();}
}
