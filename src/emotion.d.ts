import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        backgroundColor: {
            main: string,
            nav: string,
        },
        textColor: {
            content: string,
            nav: string,
            highlight: string,
            tag: string
        }
    }
}
