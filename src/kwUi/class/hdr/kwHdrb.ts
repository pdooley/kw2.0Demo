/**********************************************************************
 *
 * kwView/class/hdr/kwHdr.ts
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

import {kwTabb}         from "@kwUiClass/tab/kwTabb";

//@formatter:on

export class kwHdrb
{
    public tabs: kwTabb[];

    public sTitle: string;
    public sTitleClass: string;

    constructor(private data: object)
    {
        //console.log("kwHdr::constructor() called");
    }

}

