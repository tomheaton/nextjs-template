import type {NextPage} from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
    return (
        <div className={"flex flex-col h-screen w-full items-center justify-center"}>
            <Head>
                <title>tomheaton/nextjs-template</title>
                <meta name="description" content="Generated from tomheaton/nextjs-template"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h1 className={"font-bold text-5xl"}>
                tomheaton/nextjs-template
            </h1>

            <br/>

            <p className={"text-lg"}>
                A Next.js template with TypeScript and TailwindCSS.
            </p>
        </div>
    );
}

export default Index;
