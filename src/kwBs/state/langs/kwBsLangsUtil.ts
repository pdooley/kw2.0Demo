//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsLangsStApi}         from "./kwBsLangsSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsLangsFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwBsLangsStApi){super(api);}
}

