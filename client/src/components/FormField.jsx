import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, isCategory, value, handleChange }) => {
  return (
    <label className='flex-1 w-full flex flex-col'>
        {labelName && (
            <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>{labelName}</span>
        )}
        {isTextArea ? (
            <textarea
            required
                value={value}
                onChange={handleChange}
                rows={10}
                placeholder={placeholder}
                className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-text text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
            />
            ) : isCategory ? (
                <select
                required
                value={value}
                onChange={handleChange}
                className="w-full py-3 px-4 border border-[#3a3a43] bg-background dark:bg-gray-800 font-epilogue text-[14px] text-gray-700 dark:text-gray-200 rounded-[10px] focus:outline-none"
                >
                <option disabled value="">Select a category</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Personal">Personal</option>
                <option value="Nonprofit">Nonprofit</option>
                <option value="Medical">Medical</option>
                <option value="Crisis Relief">Crisis Relief</option>
                <option value="Education">Education</option>
                <option value="Emergency">Emergency</option>
                <option value="Sports">Sports</option>
                <option value="Environment">Environment</option>
                <option value="Family">Family</option>
                <option value="Competition">Competition</option>
                <option value="Memorial">Memorial</option>
                <option value="Research">Research</option>
                <option value="Other">Other</option>
                </select>
            ) : (
            <input
                required
                value={value}
                onChange={handleChange}
                type={inputType}
                step="0.1"
                placeholder={placeholder}
                className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-text text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
            />
        )}
    </label>
  )
}

export default FormField