import {
    useState
} from "react";


const useForm = (callback, showErrMess) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
            callback(event);
        }
    }

    const handleInputChange = (event) => {
        event.persist();
        showErrMess(false);
        setInputs(inputs => ({
            ...inputs,
            [event.target.name]: event.target.value
        }));
    }

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}

export default useForm;