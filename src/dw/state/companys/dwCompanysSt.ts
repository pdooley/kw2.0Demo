//@formatter:on
import {Injectable}         from "@angular/core";

import { kwBsStApi }        from "@kwBsStat/kwBsStApi";
import { kwBsStArr }        from "@kwBsStat/kwBsStArr";
import { kwBsStMsg }        from "@kwBsStat/kwBsStMsg";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "companys";

const id: string            = "LzmzsIG6Gv1Y0RgZic2Z";

//@formatter:off

/*
@Injectable({providedIn: 'root'})
export class dwCompanysPickStArr extends kwBsStArr
{
    constructor(){super();}
}
*/

@Injectable({providedIn: 'root'})
export class dwCompanysStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwCompanysStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwCompanysStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwCompanysStMsg extends kwBsStMsg
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwCompanysStView extends kwNgUiStView
{
    constructor(){super();}
}
