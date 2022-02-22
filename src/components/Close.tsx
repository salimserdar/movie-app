import * as React from "react"

interface CloseProps {
    onClick: () => void
}

const Close = ( { onClick } : CloseProps ) => (
    <div className="Close" onClick={onClick}>
        <svg
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 371.23 371.23"
            xmlSpace="preserve"
        >
            <path d="M371.23 21.213 350.018 0 185.615 164.402 21.213 0 0 21.213l164.402 164.402L0 350.018l21.213 21.212 164.402-164.402L350.018 371.23l21.212-21.212-164.402-164.403z" />
        </svg>
    </div>
)

export default Close