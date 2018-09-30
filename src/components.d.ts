/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AppButton {
    'color': 'plain' | 'primary' | 'secondary' | 'danger';
    'type': 'basic' | 'raised' | 'outline' | 'flat';
  }
  interface AppButtonAttributes extends StencilHTMLAttributes {
    'color'?: 'plain' | 'primary' | 'secondary' | 'danger';
    'type'?: 'basic' | 'raised' | 'outline' | 'flat';
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppButton': Components.AppButton;
  }

  interface StencilIntrinsicElements {
    'app-button': Components.AppButtonAttributes;
  }


  interface HTMLAppButtonElement extends Components.AppButton, HTMLStencilElement {}
  var HTMLAppButtonElement: {
    prototype: HTMLAppButtonElement;
    new (): HTMLAppButtonElement;
  };

  interface HTMLElementTagNameMap {
    'app-button': HTMLAppButtonElement
  }

  interface ElementTagNameMap {
    'app-button': HTMLAppButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}