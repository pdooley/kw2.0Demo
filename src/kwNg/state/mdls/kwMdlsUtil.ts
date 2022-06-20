//@formatter:on
import {Injectable}             from "@angular/core";

import {kwMdlsStApi}            from "./kwMdlsSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwMdlsFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwMdlsStApi){super(api)}
}


