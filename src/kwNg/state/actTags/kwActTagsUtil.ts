//@formatter:on
import {Injectable}             from "@angular/core";

import {kwActTagsStApi}         from "./kwActTagsSt";
import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwActTagsFctyMsg extends kwBsFctyMsg
{
    constructor(api: kwActTagsStApi){super(api)}
}
