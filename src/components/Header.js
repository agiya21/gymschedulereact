import React from "react"

/**@jsxRuntime classic */
/**@jsx jsx */
import {jsx, css} from '@emotion/react'

function Header() {
    return(
        <div>
            <h2 css={css` text-align : center;`}>Gym Schedules</h2>
        </div>
    )
}

export default Header