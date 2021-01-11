import { useState } from 'react'

const useInputChange = () => {
    const [value, setValue] = useState()

    const handleInputChange = (event) => {
        const { value, name } = event.target
        setValue(previous => {
            return {
                ...previous,
                [name]: value
            }
        })
    }
    return [value, handleInputChange]
}

export default useInputChange
