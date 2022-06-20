/**********************************************************************
 *
 * kw/class/kwIntf.ts
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
//@formatter:off


export interface kwIntf
{
    xImport(rec: object): object;
    clear(): void;
    getByCode(sCode: string): object;
    getById(nId: number): object;
    init(): boolean;
    retrieveArr(): object[];
    getMap(): Map<string, object>;
    toIndex(sVal: string): number;
}
