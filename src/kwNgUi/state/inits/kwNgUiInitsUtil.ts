//@formatter:on
import {Injectable}             from "@angular/core";

import {kwNgUiInitsStApi}           from "./kwNgUiInitsSt";
import {kwBsFctyMsg}            from "@kwBs/fcty/msg/kwBsFctyMsg";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwNgUiInitsFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwNgUiInitsStApi){super(api)}
}

