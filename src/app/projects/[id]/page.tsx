

export default function Page({params}: {
    params: {id:string}
}) {
    return(
        <h1>
            hello from page with id {params.id}
        </h1>
    );
}