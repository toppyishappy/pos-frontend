import React, { useEffect, useState } from 'react';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Table from '../molecules/Table-mat';
import SelectedItems from '../molecules/SelectedItems';



function Order(props) {
    const [selectedList, setSelectedList] = useState([]);
    const [trig, setTrig] = useState(false);

    const handleSelect = (item) => {
        const product = item.row;
        var indexTemp = 0;
        setSelectedList([...selectedList, product]);
        selectedList.forEach((i, index) => {
            if (i.id === product.id) {
                let temp = selectedList[index];
                const newValue = { ...temp, selectedAmount: temp.selectedAmount += 1 }
                selectedList[index] = newValue;
                setSelectedList(selectedList);
            }
            setTrig(!trig)
        })
    }
    function addItem(e, index) {
		e.preventDefault();
		let temp = selectedList[index];
        const newValue = { ...temp, selectedAmount: temp.selectedAmount += 1 }
        selectedList[index] = newValue;
        setSelectedList(selectedList);
        setTrig(!trig)
    }
    function removeItem(e, index) {
		e.preventDefault();
		let temp = selectedList[index];
        const newValue = { ...temp, selectedAmount: temp.selectedAmount -= 1 }
        selectedList[index] = newValue;
        setSelectedList(selectedList);
        setTrig(!trig)
	}
    return (
        <Container>
            <Box display='flex'>
                <Table handleSelect={handleSelect} data={props.data}/>
                <SelectedItems selectedList={selectedList} addItem={addItem} removeItem={removeItem}/>
            </Box>
        </Container>
    );
}

export default Order;