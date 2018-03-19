import React from 'react';
import { Container, Segment, Header } from 'semantic-ui-react';
import DetailTrxList from './DetailTrxList/DetailTrxList';

const detailTrx = () => (
  <Segment as={Container}>
    <Header block textAlign="center" inverted color="grey">Transaction Detail</Header>
    <Segment>
      <DetailTrxList />
    </Segment>
  </Segment>
);

export default detailTrx;
