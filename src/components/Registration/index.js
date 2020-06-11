import React, { useState, useCallback } from 'react';
import { Layout, Card, Form, FormLayout, TextField, Button, DisplayText } from '@shopify/polaris';

import axios from 'axios';

import web3Oracle from '../../web3Oracle';

const Registration = () => {

    const [symbol, setSymbol] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [display, setDisplay] = useState();

    const handleSubmit = useCallback(() => {
        setIsLoading(isLoading => !isLoading);
        try {
            axios
                .get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=KEY`)
                .then(res => {
                    if (!res.data['Global Quote']) {
                        setSymbol(() => '');
                        setIsLoading(isLoading => !isLoading);
                        setDisplay(`${symbol} symbol is not valid`);
                        return;
                    }
                    const price = parseInt(res.data['Global Quote']['05. price']);
                    const volume = parseInt(res.data['Global Quote']['06. volume']);
                    web3Oracle
                        .setStock(symbol, price, volume)
                        .then(() => {
                            setSymbol(() => '');
                            setIsLoading(isLoading => !isLoading);
                            setDisplay(`Stock ${symbol} added successfully`);
                        })
                        .catch(err => {
                            setIsLoading(isLoading => !isLoading);
                            throw new Error(err);
                        })
                })
                .catch(err => {
                    setIsLoading(isLoading => !isLoading);
                    throw new Error(err);
                })
        } catch (error) {
            throw new Error(error);
        }
    }, [symbol]);

    const handleSetSymbol = useCallback(
        (value) => setSymbol(value.toUpperCase()),
        []
    );

    return (
        <Layout.Section>
            <Card title="Register a new stock" sectioned>
                <Form onSubmit={handleSubmit}>
                    <FormLayout>
                        <FormLayout.Group>
                            <TextField
                                id="symbol"
                                value={symbol}
                                label="Symbol"
                                onChange={handleSetSymbol}
                                type="text"
                            />
                        </FormLayout.Group>
                        {isLoading ?
                            <Button primary submit loading> Save </Button>
                            :
                            <Button primary submit> Save </Button>
                        }
                        {display && <DisplayText size="small">{display}</DisplayText>}
                    </FormLayout>
                </Form>
            </Card>
        </Layout.Section>
    );
}

export default Registration;