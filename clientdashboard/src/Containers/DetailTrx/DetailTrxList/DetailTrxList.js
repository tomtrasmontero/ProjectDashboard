import React, { Component } from 'react';
import { Table, Accordion, Button, Header } from 'semantic-ui-react';
import axios from 'axios';
import Aux from '../../../hoc/Aux/Aux';
import * as utility from '../../../utilities/transformData';

class DetailTrxList extends Component {
  state = {
    salesData: [],
    activeIndex: -1,
  }

  componentDidMount() {
    this.getSalesData();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.salesData === this.state.salesData &&
    nextState.activeIndex === this.state.activeIndex) {
      return false;
    }
    return true;
  }

  getSalesData = async () => {
    const url = 'http://localhost:8080/sales';
    const request = await axios.get(url)
      .catch(err => console.log(err, 'error getting data'));

    this.setState({ salesData: request.data });
  }

  deleteTrx = async (id) => {
    const url = `http://localhost:8080/sales/${id}`;
    const request = await axios.delete(url);
    console.log(request, 'file deleted');
  }

  showDetail(idx) {
    const { activeIndex } = this.state;
    const newIndex = activeIndex === idx ? -1 : idx;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    let tableDetail = (
      <Table.Body>
        <Table.Row><Table.Cell>Loading...</Table.Cell></Table.Row>
      </Table.Body>
    );

    if (this.state.salesData.length > 0) {
      tableDetail = this.state.salesData.map((salesTrx) => {
        const date = new Date(salesTrx.time * 1);
        return (
          <Aux key={salesTrx.id}>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{salesTrx.id}</Table.Cell>
                <Table.Cell>{date.toLocaleString('en-US')}</Table.Cell>
                <Table.Cell>{salesTrx.region}</Table.Cell>
                <Table.Cell>${utility.numFormat(salesTrx.area)}</Table.Cell>
                <Table.Cell textAlign="center">None</Table.Cell>

                <Table.Cell textAlign="center">
                  <Accordion.Title
                    active={activeIndex === salesTrx.id}
                    index={salesTrx.id}
                  >
                    <Button
                      icon="edit"
                      onClick={() => this.showDetail(salesTrx.id)}
                    />
                  </Accordion.Title>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
            { this.state.activeIndex === salesTrx.id ?
              <Table.Header>
                <Table.Row active={activeIndex === salesTrx.id}>
                  <Table.HeaderCell colSpan="6">
                    <Header textAlign="center">
                      <Button
                        icon="trash"
                        onClick={() => this.deleteTrx(salesTrx.id)}
                      />
                    </Header>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              :
              null
            }
          </Aux>
        );
      });
    }

    return (
      <Accordion>
        <Table celled selectable compact>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Transaction#</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Region</Table.HeaderCell>
              <Table.HeaderCell>Amount</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
              <Table.HeaderCell>Edit</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {tableDetail}
        </Table>
      </Accordion>
    );
  }
}

export default DetailTrxList;
