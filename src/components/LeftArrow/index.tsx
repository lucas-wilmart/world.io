import React from 'react'
import styled, { useTheme } from 'styled-components'

interface LeftArrowProps {}

const LeftArrow: React.FC<LeftArrowProps> = () => {
  const theme = useTheme()
  return (
    <StyledSvg
      fill={theme.colors.blue}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 493.578 493.578"
    >
      <g>
        <path
          d="M487.267,225.981c0-17.365-13.999-31.518-31.518-31.518H194.501L305.35,83.615c12.24-12.24,12.24-32.207,0-44.676
		L275.592,9.18c-12.24-12.24-32.207-12.24-44.676,0L15.568,224.527c-6.12,6.12-9.256,14.153-9.256,22.262
		c0,8.032,3.136,16.142,9.256,22.262l215.348,215.348c12.24,12.239,32.207,12.239,44.676,0l29.758-29.759
		c12.24-12.24,12.24-32.207,0-44.676L194.501,299.498h261.094c17.366,0,31.519-14.153,31.519-31.519L487.267,225.981z"
        />
      </g>
    </StyledSvg>
  )
}

export default LeftArrow

const StyledSvg = styled.svg`
  height: 20px;
  width: 20px;
`
