import {CreateProjectButton} from "@/app/components/ProjectContent/editingCode/CreateProjectButton";
import {ProjectWidget} from "@/app/components/nav/projectWidget";

export function TagInputBox(props: {unprocessedTags: string[]}) {
    return (
        <div>
            {props.unprocessedTags.map((tag: string) => {
                    return (
                    <input key={tag} type={"checkbox"} value={tag}/>
                    )
                }
            )
            }</div>);
}