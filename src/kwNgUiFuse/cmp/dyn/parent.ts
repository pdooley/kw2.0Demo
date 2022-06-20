import {Component} from "@angular/core";
import {ComponentRef} from "@angular/core";
import {ComponentFactoryResolver} from "@angular/core";
import {ViewContainerRef} from "@angular/core";
import {ViewChild} from "@angular/core";


import {child} from "./child";
import {myinterface} from "./myinterface";


// Parent Component
@Component({
    selector: 'kwc-parent',
    templateUrl: 'parent.html'
})
export class parent implements myinterface {

    @ViewChild(
        'viewContainerRef',
        {
            read: ViewContainerRef,
            static: false
        }
        ) VCR: ViewContainerRef;

    //manually indexing the child components for better removal
    //although there is by-default indexing but it is being avoid for now
    //so index is a unique property here to identify each component individually.
    index: number = 0;

    // to store references of dynamically created components
    componentsReferences = [];

    constructor(private CFR: ComponentFactoryResolver) {

        //console.log("parent::constructor() called.")
    }

    createComponent() {

        const componentFactory = this.CFR.resolveComponentFactory(child);
        const componentRef: ComponentRef<child> = this.VCR.createComponent(componentFactory);
        const currentComponent = componentRef.instance;

        currentComponent.selfRef = currentComponent;
        currentComponent.index = ++this.index;

        // prividing parent Component reference to get access to parent class methods
        currentComponent.compInteraction = this;

        // add reference for newly created component
        this.componentsReferences.push(componentRef);
    }

    remove(index: number) {

        if (this.VCR.length < 1)
            return;

        const componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];
        const component: child = <child>componentRef.instance;

        const vcrIndex: number = this.VCR.indexOf(componentRef)

        // removing component from container
        this.VCR.remove(vcrIndex);

        this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
    }
}
