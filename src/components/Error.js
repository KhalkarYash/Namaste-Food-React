import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err)
    return (
        <div className="flex justify-center align-middle">
            <div>
            <h1 className="text-[2rem] font-bold">Oops!!</h1>
            <h2 className="font-bold">Something went wrong</h2>
            <h3>{err.status}: {err.statusText}</h3>
            </div>
        </div>
    )
}

export default Error