//@formatter:on
import {Injectable}         from "@angular/core";

import {kwBsStApi}          from "@kwBsStat/kwBsStApi";
import {kwBsStArr}          from "@kwBsStat/kwBsStArr";
import {kwBsStMsg}          from "@kwBsStat/kwBsStMsg";
import {kwBsStMap}          from "@kwBsStat/kwBsStMap";
import {kwViewMap}          from "@kwUiClass/view/kwViewMap";


const sTAG_ID: string       = "_id";
const sTAG_TYPE: string     = "views";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwNgUiViewsStApi extends kwBsStApi
{
    constructor(){super()}
}


@Injectable({providedIn: 'root'})
export class kwNgUiViewsStArr extends kwBsStArr
{
    constructor(){super(sTAG_ID, sTAG_TYPE)}
}


@Injectable({providedIn: 'root'})
export class kwNgUiViewsStMap extends kwBsStMap
{
    constructor(){super()}
    public get(): kwViewMap {return <kwViewMap>super.get()}
}


@Injectable({providedIn: 'root'})
export class kwNgUiViewsStMsg extends kwBsStMsg
{
    constructor(){super()}
}
