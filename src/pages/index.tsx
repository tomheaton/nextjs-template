import type {NextPage} from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
    return (
        <div>
            <Head>
                <title>nextjs-template</title>
                <meta name="description" content="Generated from tomheaton/nextjs-template"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={"min-h-screen w-full items-center justify-center"}>
                <h1 className={"font-bold text-5xl"}>
                    nextjs-template
                </h1>

                <p className={"text-lg"}>
                    A Next.js template with TypeScript and TailwindCSS.
                </p>
            </main>
        </div>
    );
}

export default Index;
