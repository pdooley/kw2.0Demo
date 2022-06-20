/**********************************************************************
 *
 * kwView/class/Group/kwGroupEdit.ts
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
import {kwGroup}                from "./kwGroup";
import {kwGroupEnum}            from "./kwGroupEnum";
//@Groupatter:on


export class kwGroupEdit extends kwGroup
{
    constructor()
    {
        super(kwGroupEnum.edit);
        //console.log("kwGroupEdit::constructor() called");
    }
}

