import React from 'react'

import styled from 'styled-components'
import InfoIcon from '../../../assets/icons/InfoIcon.svg'

const SectionContainer = styled.div`

    margin:5px;
  
`
const SectionTitle = styled.div`
    
    font-size:14px;
    font-weight: 900;
`

const DetailsContainer = styled.div`
   
    color:#00000080;
    margin-bottom: 20px;

    
    @media (max-width: 767px) {
        font-size:10px;
    } 

    @media (min-width: 768px) {
        font-size:12px;
    } 
    @media (min-width: 1024px) {
        font-size:14px;
    } 


`
const Description=({ children })=> {
    return (
        <div style={{ display: 'flex', marginTop: '16px' }}>

            <img alt="" src={InfoIcon} height="17px" />

            <div style={{ marginLeft: '8px'}}>

                {children}

            </div>

        </div>
    )
}


export default function ComponentHolder({ title, descriptions = [], children, ...props }) {

    return (
        <SectionContainer {...props}>
            <SectionTitle>{title}</SectionTitle>

            {children}

            {(descriptions.length > 0) && <Description>

                {descriptions.map((item, index) => <DetailsContainer key={index}>{item}</DetailsContainer>)}

            </Description>}

        </SectionContainer>
    )
}
