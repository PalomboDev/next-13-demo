import type { DogFact } from "@lib/types";

import CodeBlock from "@components/CodeBlock";

async function getData(): Promise<DogFact> {
    const dogFacts: DogFact[] = await fetch("https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1", { cache: "no-store" })
        .then(data => data.json());
    const dogFact: DogFact = dogFacts[0];

    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(undefined);
        }, 3000);
    });

    return dogFact;
}

export default async function Loading() {
    const dogFact: DogFact = await getData();

    return (
        <div className={"text-white m-5"}>
            <div className={"mb-5 text-gray-400"}>
                There is an additional fake 3 second fetch time on this page
            </div>

            <CodeBlock
                code={"async function getData(): Promise<DogFact> {\n" +
                    "    const dogFacts: DogFact[] = await fetch(\"https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1\", { cache: \"no-store\" })\n" +
                    "        .then(data => data.json());\n" +
                    "    const dogFact: DogFact = dogFacts[0];\n" +
                    "\n" +
                    "    await new Promise((resolve, reject) => {\n" +
                    "        setTimeout(() => {\n" +
                    "            resolve(undefined);\n" +
                    "        }, 3000);\n" +
                    "    });\n" +
                    "\n" +
                    "    return dogFact;\n" +
                    "}"}
            />

            <div className={"text-purple-600 my-5 font-medium"}>
                This page uses loading.tsx that separates loading and page rendering while an api call is being fetched
            </div>

            <div className={"text-3xl font-bold"}>Random Dog Fact:</div>
            <div className={"text-3xl"}>{dogFact.fact}</div>
        </div>
    );
}
