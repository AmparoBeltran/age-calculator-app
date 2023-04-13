import { useContext, useState } from "react";
import { FormContext } from "../lib/contexts/FormContext";
import { TotalStyled } from "./styles/Form.styled"



export default function Total() {
    const [formData] = useContext(FormContext)
    const checkDate = new Date().setFullYear(formData.year, formData.month - 1, formData.day)
    const [showResult, setShowResult] = useState(false)

    function getDifference(past) {

        if (past < 0 || Number.isNaN(past)) {
            return { year: '--', month: '--', day: '--' }
        }
        const now = Date.now(); //number ms since  01/01/1970
        const diffMs = now - past;
        const diffDate = new Date(diffMs);
        const date0 = new Date(0);
        const diffYears = diffDate.getFullYear() - date0.getFullYear();
        const diffMonths = diffDate.getMonth() - date0.getMonth();
        const diffDay = diffDate.getDate() - date0.getDate();
        return { year: diffYears, month: diffMonths, day: diffDay }
    }

    function handleClick(ev) {
        ev.preventDefault()
        setShowResult(true)
    }



    return (
        <TotalStyled>
            <div className="button">
                <hr />
                <button onClick={handleClick}>
                    <img src="/images/icon-arrow.svg" />
                </button>
            </div>
            <div className="total">

                <h1>{showResult ? getDifference(checkDate).year : '--'} <span>years</span></h1>
                <h1>{showResult ? getDifference(checkDate).month : '--'} <span>months</span></h1>
                <h1>{showResult ? getDifference(checkDate).day : '--'} <span>days</span></h1>
            </div>
        </TotalStyled>
    )
}

