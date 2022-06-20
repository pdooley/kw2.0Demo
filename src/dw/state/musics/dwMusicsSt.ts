//@formatter:on
import {Injectable}         from "@angular/core";

import { kwBsStApi }        from "@kwBsStat/kwBsStApi";
import { kwBsStArr }        from "@kwBsStat/kwBsStArr";
import { kwBsStMsg }        from "@kwBsStat/kwBsStMsg";
import {kwNgUiStInit}       from "@kwNgUiStat/kwNgUiStInit";
import {kwNgUiStView}       from "@kwNgUiStat/kwNgUiStView";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "musics";

const id: string            = "LzmzsIG6Gv1Y0RgZic2Z";

//@formatter:off

/*
@Injectable({providedIn: 'root'})
export class dwMusicsPickStArr extends kwBsStArr
{
    constructor(){super();}
}
*/

@Injectable({providedIn: 'root'})
export class dwMusicsStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwMusicsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class dwMusicsStInit extends kwNgUiStInit
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwMusicsStMsg extends kwBsStMsg
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class dwMusicsStView extends kwNgUiStView
{
    constructor(){super();}
}
