import {GoogleSignInButton} from "@/app/components/auth/GoogleSignInButton";


export default function Page() {
    return(
        <div className={"grid justify-items-center"}>
            <GoogleSignInButton></GoogleSignInButton>
        </div>
    )
}