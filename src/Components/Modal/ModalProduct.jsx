import React, { useEffect, useState } from 'react'
import { Modal, Button, Stack, Group, TextInput } from '@mantine/core';
import Swal from 'sweetalert2';
function ModalProduct({ mode, opened, onClose, productData, onsubmit }) {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [number, setNumber] = useState('')

    useEffect(() => {
        if (mode === 'edit' && productData) {

            setTitle(productData.product || '')
            setPrice(productData.price || '')
            setNumber(productData.number || '')
        } else if (mode === 'add') {
            setTitle('')
            setPrice('')
            setNumber('')
        }
    }, [mode, productData])

    const submitHandler = () => {
        let product = {
            product: title,
            price,
            number,
        }

        if (onsubmit) onsubmit(product)
        Swal.fire({
            icon: 'success',
            title: mode === 'add' ? 'Added!' : 'Edited!',
            text: `Product ${mode === 'add' ? 'added' : 'edited'} successfully.`,
            confirmButtonColor: '#76FF03'
        }).then(() => {
                onClose()
        })
    }
    const Handleclose = () => {
        Swal.fire({
            icon: 'info',
            title: 'Cancelled',
            text: 'Action was cancelled.',
            confirmButtonColor: '#FF5722'
        }).then(() => {
                onClose()   
        })
    }

    return (
        <>
            <Modal
                opened={opened}
                onClose={onClose}
                title={mode === 'add' ? 'Add Product' : 'Edit Product'}
                centered
                styles={{
                    content: {
                        borderRadius: 12,
                        fontFamily: 'Noto Sans, sans-serif',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                        backgroundColor: '#E1F5FE',
                    },
                    header: {
                        fontSize: 20,
                        fontWeight: 700,
                        fontFamily: 'Noto Medium',
                        borderBottom: '4px solid #04AA6D',
                        marginBottom: 10,
                        backgroundColor: '#E1F5FE',

                    }
                }}
            >
                <Stack>
                    <TextInput
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        styles={{
                            input: {
                                color: '#333',
                                fontFamily: 'Noto Regular',
                                fontSize: 18,
                                border: '2px solid #6A1B9A'
                            },
                            label: {
                                fontFamily: 'Noto Medium',
                            }
                        }}
                    />

                    <TextInput
                        label="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        styles={{
                            input: {
                                color: '#333',
                                fontFamily: 'Noto Regular',
                                fontSize: 18,
                                border: '2px solid #6A1B9A'
                            },
                            label: {
                                fontFamily: 'Noto Medium',
                            }
                        }}
                    />

                    <TextInput
                        label="Count"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        styles={{
                            input: {
                                color: '#333',
                                fontFamily: 'Noto Regular',
                                fontSize: 18,
                                border: '2px solid #6A1B9A'
                            },
                            label: {
                                fontFamily: 'Noto Medium',
                            }
                        }}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button variant="gradient" gradient={{ from: 'cyan', to: 'gray', deg: 90 }} onClick={Handleclose}>
                            Cancel
                        </Button>

                        <Button variant="gradient" gradient={{ from: 'green', to: 'lime', deg: 140 }} onClick={submitHandler}>
                            {mode === 'add' ? 'Add' : 'Edit'}
                        </Button>
                    </Group>
                </Stack>
            </Modal>
        </>
    )
}

export default ModalProduct