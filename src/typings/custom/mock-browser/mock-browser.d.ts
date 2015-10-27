declare module MockBrowser {
    interface Static {
        mocks: {
            MockBrowser: {
                createDocument():Document
            }
        }
    }
}

declare var mockBrowser: MockBrowser.Static;

declare module "mock-browser" {
    export = mockBrowser;
}