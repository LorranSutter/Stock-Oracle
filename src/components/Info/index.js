import React, { useState, useCallback } from 'react';
import { Layout, Card, Form, FormLayout, TextField, ButtonGroup, Button, DisplayText } from '@shopify/polaris';

const Info = () => {

    const [symbol, setSymbol] = useState('');
    const [display, setDisplay] = useState();

    function handleSubmitPrice() {

    }

    function handleSubmitVolume() {

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
                        <ButtonGroup>
                            <Button primary onClick={handleSubmitPrice}> Price </Button>
                            <Button primary onClick={handleSubmitVolume}> Volume </Button>
                        </ButtonGroup>
                        {display && <DisplayText>{display}</DisplayText>}
                    </FormLayout>
                </Form>
            </Card>
        </Layout.Section>
    );
}

export default Info;