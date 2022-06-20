import {Component} from "@angular/core";

import {myinterface} from "./myinterface";

// Child Component
@Component({
    selector: 'child',
    template: `
    `
})
export class child {

    public index: number;
    public selfRef: child;

    //interface for Parent-Child interaction
    public compInteraction: myinterface;

    constructor() {
    }

    removeMe(index) {
        this.compInteraction.remove(index)
    }
}
