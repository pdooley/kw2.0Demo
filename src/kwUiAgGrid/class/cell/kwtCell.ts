/**********************************************************************
 *
 * kwUiAgGrid/class/cols/kwtColIn.ts
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

import {ColDef}                 from 'ag-grid-community';

import {kwtCellDef}             from '@kwUiClass/cellDef/kwtCellDef';


export class kwtCell
{
    def: ColDef;
    data: kwtCellDef;
    field: string;
}
//@formatter:on
