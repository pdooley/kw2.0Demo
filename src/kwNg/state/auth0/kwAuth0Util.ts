//@formatter:on
import {Injectable}             from "@angular/core";

import {kwAuth0StApi}           from "./kwAuth0St";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwAuth0FctyMsg extends kwBsFctyMsg
{
    constructor(api: kwAuth0StApi){super(api)}
}
