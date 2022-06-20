/**********************************************************************
 *
 * kw/class/user/kwUserStaff.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@formatter:off
import {kwUserEnum }                from "./kwUserEnum";
import {kwUser }                    from "./kwUser";
//@formatter:on


export class kwUserStaff extends kwUser
{

    constructor()
    {
        super(kwUserEnum.staff)
        //console.log("kwUserStaff::constructor() is called.");
    }

}
