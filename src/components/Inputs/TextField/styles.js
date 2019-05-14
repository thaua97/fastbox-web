import styled from 'styled-components';

const Input = styled.input`
    height: 45px;
    width: 100%;
    padding: 5px 30px;
    margin: 20px 0;
    border: none;
    border-radius: 16px 16px 0 0;
    border-bottom: 2px solid #f3f;
    font-size: 1rem;
    color: #f3f;
    background: #f3f3f3;
    position: relative;
    touch-action: manipulation;
    transition: 0.25s;
    
    ::placeholder {
        color: #a3a3a3;
    }

    :focus {
        border-bottom: 2px solid #f3f;
        background: #f1f1f1;
            ::placeholder {
            color: #f3f;
        }
    }
`

export { Input }
