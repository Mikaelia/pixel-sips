import React from "react"
import Layout from "../components/Layout.js"
import styled from "styled-components"
import { device } from "../styled/globalStyles"

const PageContainer = styled.div`
  height: calc(100% + 3rem);
  width: 100%;
  display: grid;
  /* align-items: center; */
  justify-items: center;
  background: ${props => props.theme.black};
`
const StyledDiv = styled.div`
  transform: skewY(-3deg);

  h1 {
    font-size: 5rem;
    font-weight: 800;
    color: ${p => p.theme.pink};
    margin-top: 15rem;
    text-align: center;

    @media ${device.tablet} {
      font-size: 9rem;
      font-weight: 800;
    }
  }
`
export default function Sippets() {
  return (
    <Layout>
      <PageContainer>
        <StyledDiv>
          <h1>Under Construction</h1>
        </StyledDiv>
      </PageContainer>
    </Layout>
  )
}
