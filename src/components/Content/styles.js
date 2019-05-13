import styled from 'styled-components'

const Container = styled.div`
  padding: 90px;
  margin: 10px;
`
const Section = styled.section`
    display: flex;
    flex-direction: ${ props => props.direction || 'column' };
`
export { Container, Section }