import { useState } from "react";

function SignupForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({});
    const [isValid, setIsValid] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const validationErrors = {};

        if (!formData.name.trim()) {
            validationErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            validationErrors.email = 'Invalid email format';
        }

        if (!formData.password.trim()) {
            validationErrors.password = 'Password is required';
        }

        if (formData.password !== formData.confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        setError(validationErrors);
        setIsValid(Object.keys(validationErrors).length === 0);

        if (isValid) {
            console.log('Form submitted with data:', formData);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name::</label>
                    <input type="text"
                        name="name"
                        placeholder="Enter name"
                        value={formData.name} onChange={handleChange} />
                    {error.name && <span>{error.name}</span>}
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email} onChange={handleChange} />
                    {error.email && <span>{error.email}</span>}
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password} onChange={handleChange} />
                    {error.password && <span>{error.password}</span>}
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword} onChange={handleChange} />
                    {error.confirmPassword && <span>{error.confirmPassword}</span>}
                </div>
                <button type="submit">Sign up</button>
            </form>
        </>
    );
}

export default SignupForm;
