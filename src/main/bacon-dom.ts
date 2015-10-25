/// <reference path="../typings/tsd.d.ts"/>

import vDom = require('virtual-dom');
import diff = require('virtual-dom/diff');
import patch = require('virtual-dom/patch');
import createElement = require('virtual-dom/create-element');
import Stream = require('baconjs')

function attach<E>(vtreeStream:Bacon.EventStream<E,vDom.VNode>) {
    return {
        to: (parentElement:Element) => {
            var initialNode = vtreeStream
                .take(1)
                .map(createElement)
                .toProperty()

            initialNode.onValue((rootNode) => { parentElement.appendChild(rootNode); })

            vtreeStream
                .slidingWindow(2, 2)
                .map((trees) => { return diff(trees[0], trees[1]) })
                .combine(initialNode, (patches, rootNode) => {
                    return {
                        patches: patches,
                        rootNode: rootNode
                    }
                }).onValue((frame) => {
                    window.requestAnimationFrame(() => {
                        patch(frame.rootNode, frame.patches)
                    })
                })
        }
}

}

export = attach;
