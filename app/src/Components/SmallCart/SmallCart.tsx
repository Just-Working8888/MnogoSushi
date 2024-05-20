import { Button, Card, Flex, InputNumber } from 'antd'
import React, { FC } from 'react'

const SmallCart: FC = () => {
    return (
        <Card title="Корзина товаров">

            <Card>
                <Flex justify='space-between'>
                    Крылышки (12 шт) 430 KGS | 430 KGS
                    <InputNumber min={1} max={10} defaultValue={3} />
                </Flex>
            </Card>
            <Card>
                <Flex justify='space-between'>
                    Крылышки (12 шт) 430 KGS | 430 KGS
                    <InputNumber min={1} max={10} defaultValue={3} />
                </Flex>
            </Card>
            <Card>
                <Flex justify='space-between'>
                    Крылышки (12 шт) 430 KGS | 430 KGS
                    <InputNumber min={1} max={10} defaultValue={3} />
                </Flex>
            </Card>
            <br />
            <Button style={{ width: '100%',height:'40px' }} type='primary'>Добавить в корзину</Button>
        </Card>
    )
}

export default SmallCart
