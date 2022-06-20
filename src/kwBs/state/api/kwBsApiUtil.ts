//@formatter:on
import {Injectable}             from "@angular/core";

import {AppInjector} from "@app/appInjector";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";
import {kwBsApiStApi}           from "./kwBsApiSt";

//@formatter:off


@Injectable({providedIn: 'root'})
export class kwBsApiFctyMsg extends kwBsFctyMsg
{
    constructor(){super(AppInjector.get(kwBsApiStApi));console.log("kwBsApiFctyMsg")}
}
