import styled from 'styled-components'

export const Container = styled.section`
   /* background-color: red;
   display: block; */

`

export const Content = styled.section`
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 3rem 1rem 2rem 2rem;
    float: right;
    width: 80rem;

    

    div {
        width: 20.5rem;
        display: grid;
        justify-content: center;
        align-items: center;
        background: #fff;
        border-radius: 0.50rem;
        padding: 1.5rem;

        img {
           margin: 0 auto;
        }

        h3 {
           text-align: center;
           font-size: 1rem;

           strong {
              font-size: 1.5rem;
           }
        }
    }
`

export const ListFilter = styled.form`
    background: #E0C4C4;
    position: absolute;
    display: flex;
    width: 27.125rem;
    /* box-shadow: 0.15rem -0.25rem 2rem 0.01rem; */
    border-radius: 0.5rem;
    margin: 3rem 0 2rem 2rem;
    height: 46.125rem;

`