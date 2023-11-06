import {useState} from "react";

export function TagInputBox(props: { unprocessedTags: string[]; onCheckboxChange: (checkedValues: string[]) => void }) {
    const [checkedTags, setCheckedTags] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setCheckedTags((prevCheckedTags) => [...prevCheckedTags, value]);
        } else {
            setCheckedTags((prevCheckedTags) => prevCheckedTags.filter((tag) => tag !== value));
        }
    };

    // Notify the parent component of the checked tags using the callback function
    props.onCheckboxChange(checkedTags);

    return (
        <>
            {props.unprocessedTags.map((tag: string) => (
                <label key={tag}>
                    {tag}
                    <input type="checkbox" value={tag} onChange={handleCheckboxChange} />
                </label>
            ))}
        </>
    );
}