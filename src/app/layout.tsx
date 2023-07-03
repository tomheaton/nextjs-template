import "@styles/globals.css";
import type { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <head>
                <title>tomheaton/nextjs-template</title>
                <meta name="description" content="Generated from tomheaton/nextjs-template"/>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <body>
                {children}
            </body>
        </html>
    );
}
