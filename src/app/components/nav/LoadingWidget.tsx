export function LoadingWidget() {
    return (
        <div className={"m-4 animate-pulse"}>
            <div className={"text-white flex flex-row"}>
                <div className={"rounded-full bg-slate-700 w-[50px] h-[50px]"}></div>
                <div>
                    <div className={"flex flex-col w-full h-full"}>
                        <h1 className={"font-bold bg-slate-700 h-5 w-52 rounded-2xl"}>

                        </h1>
                        <h1 className={"basis-1/2 h-10 w-96 bg-slate-700 my-2 rounded-2xl"}></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}