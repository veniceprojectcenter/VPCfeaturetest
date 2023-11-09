import {useState} from "react";

export function TagInputBox(props: { allTags: string[]; initialCheckedTags: string[]; onCheckboxChange: (checkedValues: string[]) => void }) {
    const [checkedTags, setCheckedTags] = useState(props.initialCheckedTags);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedTags((prevCheckedTags) => [...prevCheckedTags, value]);
        } else if(!checked) {
            setCheckedTags((prevCheckedTags) => prevCheckedTags.filter((tag) => tag !== value));
        }
    };
    // Notify the parent component of the checked tags using the callback function
    props.onCheckboxChange(checkedTags);

    return (
        <>
            {props.allTags.map((tag: string) => (
                <label key={tag}>
                    {tag}
                    <input type="checkbox" value={tag} onChange={handleCheckboxChange} defaultChecked={checkedTags.includes(tag)} /><br/>
                </label>
            ))}
        </>
    );
}