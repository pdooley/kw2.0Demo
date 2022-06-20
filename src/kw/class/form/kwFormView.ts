/**********************************************************************
 *
 * kwView/class/form/kwFormView.ts
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
import {kwForm }                from "./kwForm";
import {kwFormEnum }            from "./kwFormEnum";
//@formatter:on


export class kwFormView extends kwForm
{
    constructor()
    {
        super(kwFormEnum.view);
        //console.log("kwFormView::constructor() called");
    }
}
