import { useState } from "react";

const SelectHowDidYouFindUs = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className="relative mb-5">
            <select
                value={selectedOption}
                onChange={handleSelectChange}
                className="bg-white border-2 px-3 py-2 w-full focus:outline-none"
            >
                <option value="" disabled>Select an option</option>
                <option value="i dont know.">
                    i dont know
                </option>
                <option value="i dont know.">
                    i dont know
                </option>
                <option value="i dont know.">
                    i dont know
                </option>
            </select>
            <div className="absolute right-2 top-2 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
        </div>
    );
};

export default SelectHowDidYouFindUs;
