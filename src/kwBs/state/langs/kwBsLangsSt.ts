//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBs/stat/kwBsStApi";
import {kwBsStArr}          from "@kwBs/stat/kwBsStArr";
import {kwBsStMap}          from "@kwBsStat/kwBsStMap";
import {kwBsStMsg}          from "@kwBs/stat/kwBsStMsg";
import {kwLangType}         from "@kwClass/lang/kwLangType";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "langs";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsLangsStApi extends kwBsStApi
{
    constructor(){super();}
}


@Injectable({providedIn: 'root'})
export class kwBsLangsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE);}
}


@Injectable({providedIn: 'root'})
export class kwBsLangsStMap extends kwBsStMap
{
    constructor(){super()}
    public get(): kwLangType[] {return <kwLangType[]>super.get()}
}


@Injectable({providedIn: 'root'})
export class kwBsLangsStMsg extends kwBsStMsg
{
    constructor(){super();}
}
