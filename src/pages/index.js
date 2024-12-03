import Head from "next/head"; 
import About from "@/components/about"; 

const Index = () => {
    return (
        <div>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Honey Treat Academy | About Us</title>
            </Head>
            <About />
        </div>
    );
}

export default Index;
