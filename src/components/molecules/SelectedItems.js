import React, { useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function SelectedItems(props) {

	const { selectedList, addItem, removeItem } = props;


	return (
		<Grid xs={4}>
			<Box>List</Box>
			<Box>
				{
					selectedList.map((i, key) => {
						return (
							<Box key={key} display='flex' justifyContent="space-between" alignItems="center">
								<Typography>{i.name}</Typography>
								<Typography>{i.selectedAmount}</Typography>
								<Box display='flex'>
									<Button variant="contained" color="primary" onClick={(e) => addItem(e, key)}>Add</Button>
									<Button variant="contained" color="secondary" onClick={(e) => removeItem(e, key)}>Remove</Button>
								</Box>
							</Box>
						);
					}
					)
				}
				{selectedList.length > 0 && <Divider />}
			</Box>
		</Grid>
	);
}

export default SelectedItems;