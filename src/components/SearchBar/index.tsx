import React from 'react'
import styled from 'styled-components'

interface SearchBarProps {
  value?: string
  onChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value = '', onChange }) => {
  return <StyledInput value={value} onChange={(e) => onChange(e.target.value)} />
}

export default SearchBar

const StyledInput = styled.input`
  padding: 10px 20px;
  border: solid 1px ${(p) => p.theme.colors.grey};
`
