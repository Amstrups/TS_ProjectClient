import { useState } from "react";

export default function Owner({shown, owner, companyId}) {
    const [isShown, setIsShown] = useState(shown);

    const onClick = () => {
        setIsShown((prev) => !prev);
    };

    return (
        <ul className="ownerContainer">
            <li>
                <p className="name">Name: {owner.name}</p>
            </li>
            <li>
                <p className="social">
                    Social security number:
                    {owner.socialNumber.slice(0,6)}-
                <button className="socialNumberBtn" onClick={onClick}>
                    <div >
                        {isShown && <h4>{owner.socialNumber.slice(6,10)}</h4>}
                        {!isShown && <h4>####</h4>}
                    </div>
                </button>

                </p>
            </li>
        </ul>

    )
}
