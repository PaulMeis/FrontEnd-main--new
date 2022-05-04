import {
    StyledInputField,
    StyledTitle,
    Avatar,
    StyledButton,
    ButtonGroup,
    StyledFormArea,
   
}
    from "./../components/Styles";

//Logo
import Logo from "./../assets/Merkel.png";
//Icons

import React from "react";


const Dashboard = () => {
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
                 
            </div>
            <StyledFormArea>
          
            <Avatar image={Logo}/>
            
                <StyledTitle size={65}>Welcome, User!</StyledTitle>
               


              


                <ButtonGroup>
                    <StyledButton to="personal">Personal Information</StyledButton>
               
                    <StyledButton to="#">Transaction</StyledButton>
               
                    <StyledButton to="voting">Voting</StyledButton>
                    </ButtonGroup>
                    <ButtonGroup>
                    <StyledButton to="/">Logout</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    );
}

export default Dashboard;