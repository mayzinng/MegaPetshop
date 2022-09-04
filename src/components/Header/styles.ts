import styled from 'styled-components';

export const Container = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    height: 7.68rem;
    align-items: center;

    input {
        width: 40rem;
        height: 2.75rem;
        margin-left: 2rem;
        border: none;
        border: 3px solid var(--search-bar);
        border-radius: 0.50rem;
        padding: 0.25rem;
    }

    input::placeholder {
        color: var(--text-header);
    }

    img[alt="logo"] {
        width: 15rem;
        margin: 0rem 10rem;
    }

    div {
        align-items: center;
        display: flex;
        gap: 0.5rem;
        margin: 0rem 10rem;

        a {
            text-decoration: none;
            color: var(--text-header);
            font-weight: bold;
            transition: all 0.2s;
        }

        a:hover {
            filter: brightness(0.7);
        }
    }
`