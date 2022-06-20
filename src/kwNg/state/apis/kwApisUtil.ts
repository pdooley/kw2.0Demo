//@formatter:on
import {Injectable}             from "@angular/core";

import {kwApisStApi}            from "./kwApisSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwApisFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwApisStApi){super(api)}
}
