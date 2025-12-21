import React, { useEffect, useState } from 'react'
import { Modal, Button, Stack, Group, TextInput } from '@mantine/core';

function ModalProduct({ mode, opened, onClose, productData, onsubmit}) {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [count, setCount] = useState('')

    useEffect(() => {
        if (mode === 'edit' && productData) {

            setTitle(productData.setTitle || '')
            setPrice(productData.setPrice || '')
            setCount(productData.setCount || '')
        } else if (mode === 'add') {
            setTitle('')
            setPrice('')
            setCount('')
        }
    }, [mode, productData])

    const submitHandler = () => {
        let product = {
            title,
            price,
            count,
        }
         
       if(onsubmit)  onsubmit(product)
        onClose()
    }
    const Handleclose = () => {
        onClose()
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={mode === 'add' ? 'Add Product' : 'Edit Product'}
                centered
                style={{
                    borderTop: '1px solid #04AA6D'
                }}
            >
                <Stack>
                    <TextInput 
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <TextInput 
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <TextInput 
                        label="Count"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button variant="default" onClick={Handleclose}>
                            Cancel
                        </Button>

                        <Button color="green" onClick={submitHandler}>
                            {mode === 'add' ? 'Add' : 'Edit'}
                        </Button>
                    </Group>
                </Stack>
            </Modal>
        </>
    )
}

export default ModalProduct