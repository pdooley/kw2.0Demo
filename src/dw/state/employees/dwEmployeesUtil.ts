//@formatter:on
import {Injectable}             from "@angular/core";

import {kwBsFctyMsg}            from "@kwBsFcty/msg/kwBsFctyMsg";

import {dwEmployeesStApi}       from "./dwEmployeesSt";

//@formatter:off

@Injectable({providedIn: 'root'})
export class dwEmployeesFctyMsg extends kwBsFctyMsg
{
    constructor(api: dwEmployeesStApi){super(api)}
}
