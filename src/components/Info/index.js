import React, { useState, useCallback } from 'react';
import { Layout, Card, Form, FormLayout, TextField, ButtonGroup, Button, DisplayText } from '@shopify/polaris';

import connectionWeb3 from '../../connectionWeb3';

const Info = () => {

    const [symbol, setSymbol] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [display, setDisplay] = useState();

    function handleSubmitPrice() {
        setIsLoading(isLoading => !isLoading);
        try {
            connectionWeb3
                .getStockPrice(symbol)
                .then((price) => {
                    setIsLoading(isLoading => !isLoading);
                    setDisplay(`Price for ${symbol} is $${price}`);
                })
                .catch(err => {
                    setIsLoading(isLoading => !isLoading);
                    throw new Error(err);
                });
        } catch (error) {
            setIsLoading(isLoading => !isLoading);
            throw new Error(error);
        }
    }

    function handleSubmitVolume() {
        setIsLoading(isLoading => !isLoading);
        try {
            connectionWeb3
                .getStockVolume(symbol)
                .then((volume) => {
                    setIsLoading(isLoading => !isLoading);
                    setDisplay(`Volume for ${symbol} is ${volume}`);
                })
                .catch(err => {
                    setIsLoading(isLoading => !isLoading);
                    throw new Error(err);
                });
        } catch (error) {
            setIsLoading(isLoading => !isLoading);
            throw new Error(error);
        }
    }

    const handleSetSymbol = useCallback(
        (value) => setSymbol(value.toUpperCase()),
        []
    );

    return (
        <Layout.Section>
            <Card title="Get info from a registered stock" sectioned>
                <Form>
                    <FormLayout>

                        <TextField
                            id="symbol"
                            value={symbol}
                            label="Symbol"
                            onChange={handleSetSymbol}
                            type="text"
                        />
                        {isLoading ?
                            <ButtonGroup>
                                <Button primary loading onClick={handleSubmitPrice}> Price </Button>
                                <Button primary loading onClick={handleSubmitVolume}> Volume </Button>
                            </ButtonGroup>
                            :
                            <ButtonGroup>
                                <Button primary onClick={handleSubmitPrice}> Price </Button>
                                <Button primary onClick={handleSubmitVolume}> Volume </Button>
                            </ButtonGroup>
                        }
                        {display && <DisplayText size="small">{display}</DisplayText>}
                    </FormLayout>
                </Form>
            </Card>
        </Layout.Section>
    );
}

export default Info;