import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { History } from 'history';

import { ReactComponent as Logo } from '../../assets/404.svg';

import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const Container = styled.div`
  background-color: #2F3242;
  height: 100vh;
`;

const StyledLogo = styled(Logo)`
  &&& {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -250px;
    margin-left: -400px;

    #Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {
      animation: float 1s infinite ease-in-out alternate;
    }

    #Polygon-2 {
      animation-delay: .2s;
    }
    #Polygon-3 {
      animation-delay: .4s;
    }
    #Polygon-4 {
      animation-delay: .6s;
    }
    #Polygon-5 {
      animation-delay: .8s;
    }

    @keyframes float {
      100% {
        transform: translateY(20px);
      }
    }
  }
`;

const MessageBox = styled.div`
  height: 200px;
  width: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: 50px;
  color: #FFF;
  font-family: Roboto;
  font-weight: 300;
`;

const Title = styled.h1`
  font-size: 60px;
  line-height: 46px;
  margin-bottom: 40px;
`;

const NotFound = ({ history }: { history: History }) => {
  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);
  return (
    <Container>
      <StyledLogo />
      <MessageBox>
        <Title>404</Title>
        <p>Page not found</p>
        <div className="action-link-wrap">
          <Button secondary onClick={goBack}>Go Back</Button>
          <Button as={Link} secondary onClick={goBack} to="/">
            Go to Home Page
          </Button>
        </div>
      </MessageBox>
    </Container>
  );
};

export default NotFound;