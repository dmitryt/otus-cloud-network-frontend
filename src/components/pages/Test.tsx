import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Input, Segment, Button, Container } from 'semantic-ui-react';

import { apiUrl } from '../../config';

const StyledContainer = styled(Container)`
  margin-top: 1rem;
`;

const JsonArea = styled.pre`
  text-align: left;
`;

const Test = () => {
  const [value, setValue] = useState();
  const [isLoading, setLoading] = useState(false);
  const [payload, setPayload] = useState();
  const onChange = useCallback((_, { value }) => {
    setValue(value);
  }, [setValue]);
  const onClick = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetch(`${apiUrl}/send/${value}`);
      const payload = await data.json();
      setPayload(payload);
    } finally {
      setLoading(false);
    }
  }, [value, setPayload, setLoading]);
  return (
    <StyledContainer textAlign="center">
      <Segment>
        <Input action placeholder='Send Request...' onChange={onChange}>
          <input />
          <Button type='button' onClick={onClick} disabled={isLoading} loading={isLoading}>Send</Button>
        </Input>
        <JsonArea>
          {JSON.stringify(payload, null, 2)}
        </JsonArea>
      </Segment>
    </StyledContainer>
  );
};

export default Test