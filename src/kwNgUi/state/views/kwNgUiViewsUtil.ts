//@formatter:on
import {Injectable}             from "@angular/core";

import {kwNgUiViewsStApi}       from "./kwNgUiViewsSt";
import {kwBsFctyMsg}            from "@kwBs/fcty/msg/kwBsFctyMsg";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwNgUiViewsFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwNgUiViewsStApi){super(api)}
}

