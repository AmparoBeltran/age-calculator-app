import { useContext, useMemo } from "react";
import { FormContext } from "../lib/contexts/FormContext";
import { FormStyled, TotalStyled } from "./styles/Form.styled"
import Total from "./Total";




export default function Form() {
    const [formData, setFormData] = useContext(FormContext)

    function handleChange(event) {
        const key = event.target.name
        const value = event.target.value
        if (key === 'day' && value.length > 2) {
            return
        }

        if (key === 'month' && value.length > 2) {
            return
        }

        if (key === 'year' && value.length > 4) {
            return
        }

        setFormData((data) => {
            return {
                ...data,
                [key]: value
            };
        })
    }

    const dayErrors = useMemo(() => {
        const errors = {};
        if (formData.day === undefined) {
            return errors
        }

        if (formData.day === '') {
            errors.required = true;
            return errors;
        }

        const num = Number(formData.day);

        if (num < 1 || num > 31 || Number.isNaN(num)) {
            errors.invalid = true;
        }

        return errors;

    }, [formData.day]);

    const monthErrors = useMemo(() => {
        const errors = {}

        if (formData.month === undefined) {
            return errors
        }

        if (formData.month === '') {
            errors.required = true;
            return errors
        }

        const num = Number(formData.month);

        if (num < 1 || num > 12 || Number.isNaN(num)) {
            errors.invalid = true;
        }
        return errors;
    }, [formData.month])

    const yearErrors = useMemo(() => {
        const errors = {};
        if (formData.year === undefined) {
            return errors
        }

        if (formData.year === '') {
            errors.required = true;
            return errors
        }

        const num = Number(formData.year);
        const currentYear = new Date().getFullYear()
        if (Number.isNaN(num)) {
            errors.invalid = true;
            return errors
        }
        if (num > currentYear) {
            errors.future = true;
        }
        return errors
    }, [formData.year])

    return (
        <FormStyled>
            <div className="container">
                <div className={`input-container ${Object.keys(dayErrors).length > 0 ? 'invalid' : ''}`}>
                    <label htmlFor="day">DAY</label>
                    <input
                        type="text"
                        name="day"
                        value={formData.day}
                        onChange={handleChange}
                        placeholder="DD"
                    />
                    {
                        dayErrors.required &&
                        <small className="alert">This field is required</small>
                    }
                    {
                        dayErrors.invalid &&
                        <small className="alert">Must be a valid day</small>
                    }

                </div>
                <div className={`input-container ${Object.keys(monthErrors).length > 0 ? 'invalid' : ''}`}>
                    <label htmlFor="month">MONTH</label>
                    <input
                        type="text"
                        name="month"
                        value={formData.month}
                        onChange={handleChange}
                        placeholder="MM"
                    />
                    {
                        monthErrors.required &&
                        <small className="alert">This field is required</small>

                    }
                    {
                        monthErrors.invalid &&
                        <small className="alert">Must be a valid month</small>
                    }

                </div>
                <div className={`input-container ${Object.keys(yearErrors).length > 0 ? 'invalid' : ''}`}>
                    <label htmlFor="YEAR">YEAR</label>
                    <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="YYYY"
                    />
                    {
                        yearErrors.required &&
                        <small className="alert">This field is required</small>

                    }
                    {
                        yearErrors.invalid &&
                        <small className="alert">Must be a valid year</small>

                    }
                    {
                        yearErrors.future &&
                        <small className="alert">Must be in the past</small>
                    }
                </div>
            </div>

            <TotalStyled>
                <Total />
            </TotalStyled>
        </FormStyled>
    )
}