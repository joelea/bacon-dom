/// <reference path="../typings/tsd.d.ts"/>

import vDom = require('virtual-dom');
import diff = require('virtual-dom/diff');
import patch = require('virtual-dom/patch');
import createElement = require('virtual-dom/create-element');
import h = require('virtual-dom/h');
import Stream = require('baconjs');

function attach<E>(vtreeStream:Bacon.EventStream<E,vDom.VNode>) {
    return {
        to: (parentElement:Element) => {
            var initialDom = h('.placeholder', []);
            var rootNode = createElement(initialDom);
            parentElement.appendChild(rootNode)

            vtreeStream
                .diff(initialDom, diff)
                .onValue( (elementDiff) => {
                    patch(rootNode, elementDiff)
                })
        }
    }

}

export = attach;
