import { ReactElement } from "react";
import { User } from "@lib/types";

type ServerBoxProps = {
  children: ReactElement | ReactElement[];
  hint: boolean;
};

export default async function ServerBox({ children, hint }: ServerBoxProps ) {
    const randomNumber = Math.ceil(Math.random() * 10);
    const data: User = await fetch(`https://jsonplaceholder.typicode.com/users/${randomNumber}`).then(data => data.json());

    return (
        <div className={"bg-orange-600 p-5 border-2 border-black"}>
            <div className={"mb-5"}>Server</div>

            {hint && <div className={"text-lg"}>This user's info was loaded (on the server) before it's parent client component was rendered in.</div>}
            {hint && <div className={"text-lg"}>This is why as soon as the parent client component is rendered in, the user info is already available.</div>}

            <div className={"border-gray-700 border-2 w-fit m-auto my-5"}>
                <div className={"text-2xl text-gray-300 m-2"}>{data.name}</div>
                <div className={"text-2xl text-gray-300 m-2"}>{data.email}</div>
                <div className={"text-2xl text-gray-300 m-2"}>{data.phone}</div>
            </div>

            {children}
        </div>
    );
}
