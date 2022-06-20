/**********************************************************************
 *
 * kwView/class/Group/kwGroupView.ts
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


export class kwGroupView extends kwGroup
{
    constructor()
    {
        super(kwGroupEnum.view);
        //console.log("kwGroupView::constructor() called");
    }
}
