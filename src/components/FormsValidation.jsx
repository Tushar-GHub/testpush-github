import { useForm } from "react-hook-form";

const FormsValidation = () => {
    const commonInputAttributes = {
        type: "text",
        className: "bw-input",
        placeholder: "Enter Value Here...",
    }

    const { register, watch, handleSubmit, formState: { errors }, setValue, setError, clearErrors } = useForm({mode: "onChange"});

    const onsubmit = (data) => {
        console.log(data);
    };

    return (
        <div>

            <form onSubmit={handleSubmit(onsubmit)} className="bw-form">

                <div className="bw-group">
                    <label htmlFor="name" className="bw-label">Name: </label>
                    <input {...commonInputAttributes} {...register("name", {
                        required: "This Field is required.",
                        minLength: { value: 2, message: "Your Username should be greater than 2 characters" },
                        maxLength: { value: 20, message: "Your Username should not be greater than 20 characters" }
                    })} />
                </div>
                <div>
                    {errors.name && <p style={{color: "red", fontSize: "13.5px"}}>{errors.name.message}</p>}
                </div>

                <div className="bw-group">
                    <label htmlFor="age" className="bw-label">Age: </label>
                    <input {...commonInputAttributes} {...register("age", {
                        required: "This Field is required.",
                        min: { value: 18, message: "Age Cannot be less than 18" },
                        max: { value: 60, message: "Age Cannot be more than 60" },
                        onChange: (e) => {
                            const numbersOnly = e.target.value.replace(/[^0-9]/g, "");
                            setValue("age", numbersOnly);
                        }
                    })} />
                </div>
                <div>
                    {errors.age && <p style={{color: "red", fontSize: "13.5px"}}>{errors.age.message}</p>}
                </div>

                <div className="bw-group">
                    <label htmlFor="phoneNumber" className="bw-label">Phone Number: </label>
                    <input {...commonInputAttributes} {...register("phoneNumber", {
                        required: "This Field is required.",
                        minLength: { value: 10, message: "Please Enter a valid Phone number" },
                        maxLength: { value: 10, message: "Please Enter a valid Phone number"},
                        onChange: (e) => {
                            const numbersOnly = e.target.value.replace(/[^0-9]/g, "");
                            setValue("phoneNumber", numbersOnly);
                        }
                    })} />
                </div>
                <div>
                    {errors.phoneNumber && <p style={{color: "red", fontSize: "13.5px"}}>{errors.phoneNumber.message}</p>}
                </div>

                <div className="bw-group">
                    <label htmlFor="email" className="bw-label">Email: </label>
                    <input {...commonInputAttributes} {...register("email", {
                        required: "This Field is required.",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Please Enter a Valid Email"
                        }
                    })} />
                </div>
                <div>
                    {errors.email && <p style={{color: "red", fontSize: "13.5px"}}>{errors.email.message}</p>}
                </div>

                <div className="bw-group">
                    <label htmlFor="password" className="bw-label">Password: </label>
                    <input {...commonInputAttributes} type="password" {...register("password", {
                        required: "This Field is required.",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                            message: "Please Enter a Strong Password"
                        }
                    })} />
                </div>
                <div>
                    {errors.password && <p style={{color: "red", fontSize: "13.5px"}}>{errors.password.message}</p>}
                </div>

                <div className="bw-group">
                    <label htmlFor="confirmPassword" className="bw-label">Confirm Password: </label>
                    <input {...commonInputAttributes} type="password" {...register("confirmPassword", {
                        required: "This Field is required.",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                        },
                        validate: (value) => {
                            const password = watch("password");
                            return value === password || "Password and Confirm Password do not match";
                        },
                    })} />
                </div>
                <div>
                    {errors.confirmPassword && <p style={{color: "red", fontSize: "13.5px"}}>{errors.confirmPassword.message}</p>}
                </div>

                <div className="bw-group">
                    <label htmlFor="github" className="bw-label">Github Link: </label>
                    <input {...commonInputAttributes} {...register("github", {
                        required: "This Field is required.",
                        pattern: {
                            value: /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9-]+\/?$/,
                            message: "Please Enter a valid Github Link"
                        }
                    })} />
                </div>
                <div>
                    {errors.github && <p style={{color: "red", fontSize: "13.5px"}}>{errors.github.message}</p>}
                </div>

                <div className="bw-group">
                    <label htmlFor="linkedin" className="bw-label">Linkedin Link: </label>
                    <input {...commonInputAttributes} {...register("linkedin", {
                        required: "This Field is required.",
                        pattern: {
                            value: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9-_%]+\/?$/,
                            message: "Please Enter a valid Linkedin Link"
                        }
                    })} />
                </div>
                <div>
                    {errors.linkedin && <p style={{color: "red", fontSize: "13.5px"}}>{errors.linkedin.message}</p>}
                </div>

                <button type="submit">Register</button>

            </form>
            {/* <form>
                <div className="bw-form">
                    <label className="bw-label">Current Password</label>
                </div>
            </form> */}
        </div>
    )
}

export default FormsValidation

// react-hook-form Validation completed
// - install command = npm i react-hook-form

// Make a Form with following validations using react-hook-form
// (name - min 2 and max 20 char
// age - min 18 and max 60
// phone - only Number (use validation)
// email
// password( use Regex patterns)
// confirm password (must be same as password)
// use New form to change password and new pass should not be old pass
// github and linkedin link fields)
// use mode and reValidate in useForm()
// eg: const {register.......} = useForm({mode: "onChange", reValidate: "onChange"});
// Also Try Form Validation with (yup).
// Common Input Fields (Good React code practice)
// Tanstackquery - advanced caching topic.