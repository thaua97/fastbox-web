import styled from 'styled-components'

const Container = styled.div`
  padding: 90px;
  margin: 10px;
`
const Section = styled.section`
    height: 100%;
    width: 100%;
    margin-left: 300px;
    background: #fff fixed;
    display: flex;
    flex-direction: column;
`

const Items = styled.div`
    display: flex;
    flex-direction: wrap;
    justify-content: flex-start;
    align-items: center;
`
export { Container, Section, Items }