/**********************************************************************
 *
 * kwView/class/Group/kwGroupAdd.ts
 *
 * author: Patrick Dooley
 *
 *
 **********************************************************************
 *
 * Copyright (c) 2017 iTKunst Corporation
 *
 **********************************************************************/

//@Groupatter:off
import {kwGroup }                from "./kwGroup";
import {kwGroupEnum }            from "./kwGroupEnum";
//@Groupatter:on


export class kwGroupAdd extends kwGroup
{
    constructor()
    {
        super(kwGroupEnum.add);
        //console.log("kwGroupAdd::constructor() called");
    }
}

