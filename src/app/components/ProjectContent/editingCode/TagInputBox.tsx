import {CreateProjectButton} from "@/app/components/ProjectContent/editingCode/CreateProjectButton";
import {ProjectWidget} from "@/app/components/nav/projectWidget";

export function TagInputBox(props: {unprocessedTags: string[]}) {
    return (
        props.unprocessedTags.map((tag: string) => {
                    return (
                        <>
                        <label key={tag}>
                            {tag}
                            <input type={"checkbox"} value={tag}/>
                        </label><br/>
                        </>
                    )
                }
            )
    );
}