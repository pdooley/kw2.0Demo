/**********************************************************************
 *
 * kwView/class/form/kwFormEdit.ts
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


export class kwFormEdit extends kwForm
{
    constructor()
    {
        super(kwFormEnum.edit);
        //console.log("kwFormEdit::constructor() called");
    }
}

