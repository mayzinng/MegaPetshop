import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;

    div {
        align-items: center;
        display: flex;
        background: var(--modals);
        padding: 2rem;
        border-radius: 0.5rem;

        img {
            width: 90px;
        }

        span {
            color: var(--price-text);
            padding: 2.5rem;
            font-weight: bold;
            font-size: 1.2rem;
        }
    }
`