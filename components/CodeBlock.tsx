import type { ReactElement } from "react";

type CodeBlockProps = {
    code: string;
};

export default function CodeBlock({ code }: CodeBlockProps): ReactElement {
    return (
        <div className={"text-2xl bg-gray-700 text-gray-900 rounded p-5 whitespace-pre-wrap w-fit m-auto"}>
            {code}
        </div>
    );
}


