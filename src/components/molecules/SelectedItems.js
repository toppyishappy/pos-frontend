import React, { useEffect } from 'react';

import styled from 'styled-components';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function SelectedItems(props) {

	const { selectedList, addItem, removeItem } = props;


	return (
		<StyledGrid xs={4}>
			<StyledPaper>
				<HeadTag display='flex' alignItems='center' justifyContent='center'>
					<Typography>รายการ</Typography>
				</HeadTag>
				<Divider />
				<ItemsBox padding={1}>
					{
						selectedList.map((i, key) => {
							return (
								<ListItem>
									<Box key={key} display='flex' justifyContent="space-between" alignItems="center" padding={1}>
										<Grid xs={5}>
											<Typography>{i.name}</Typography>
										</Grid>
										<Grid xs={5}>
											<Typography>{i.selectedAmount}</Typography>
										</Grid>
										<Grid xs={2}>
											<Box display='flex'>
												<Button variant="contained" color="primary" mr={1} onClick={(e) => addItem(e, key)}>เพิ่ม</Button>
												<Button variant="contained" color="secondary" onClick={(e) => removeItem(e, key)}>ลบ</Button>
											</Box>
										</Grid>
									</Box>
								</ListItem>
							);
						}
						)
					}
				</ItemsBox>
				{selectedList.length > 0 && <Divider/>}
			</StyledPaper>
		</StyledGrid>
	);
}

export default SelectedItems;

const HeadTag = styled(Box)`
	height: 56px;
`
const StyledGrid = styled(Grid)`
	padding: 8px;
`
const ItemsBox = styled(Box)`
	height: 60%;
	overflow-y: scroll;
`
const StyledPaper = styled(Paper)`
	padding: 8px;
	height: 80vh;
`
const ListItem = styled(Paper)`
	margin-bottom: 4px;
	background: #15A2B8;
	color: white;
`