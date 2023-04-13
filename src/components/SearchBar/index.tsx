import React from 'react'
import styled from 'styled-components'

interface SearchBarProps {
  value?: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const SearchBar: React.FC<SearchBarProps> = ({ value = '', onChange, placeholder = '', className }) => {
  return (
    <SearchBarContainer className={className}>
      <StyledInput value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </SearchBarContainer>
  )
}

export default SearchBar

const StyledInput = styled.input`
  padding: 10px 20px;
  border: solid 1px ${(p) => p.theme.colors.grey};
  border-radius: 13px;
  width: 100%;
  max-width: 500px;
  font-size: 18px;
  box-sizing: border-box;
  outline-color: ${(p) => p.theme.colors.blue};
`
const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
