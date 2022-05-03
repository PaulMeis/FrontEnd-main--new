import {StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup, StyledFormArea} from "./../components/Styles";

import React, {Component} from 'react';

//Logo
import Logo from "./../assets/logo.PNG";

const PersonalInformation = () => {
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "transparent",
                    width: "100%",
                    padding: "15px",
                    display: "flex",
                    justifyContent: "flex-start",
                }}
            >
                <Avatar image={Logo} />
            </div>
            <StyledFormArea> 
        <StyledTitle size={65}>
           Personal Information!
            </StyledTitle>
            
        <ButtonGroup>                          
            <StyledButton to="/">
                Logout
            </StyledButton>
            <StyledButton to="/dash">
                Dashboard
            </StyledButton>
        </ButtonGroup>  
        </StyledFormArea> 
        </div>
    );
}

export default PersonalInformation;