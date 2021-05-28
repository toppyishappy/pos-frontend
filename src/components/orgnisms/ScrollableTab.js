import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel } from '../molecules/TabPanel'
import { getAll, Test} from '../../utils/http-request'

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

export function ScrollableTabs() {
  // const classes = useStyles();
  const result = {
    0: [{ name: 'a0', id: 'item0' }],
    1: [{ name: 'a1', id: 'item1' }],
    2: [{ name: 'a2' }],
    3: [{ name: 'a3' }],
    4: [{name: 'a4'}],
  }
  const tabList = [
    { name: 'a0' },
    { name: 'a1' },
    { name: 'a2' },
    { name: 'a3' },
    { name: 'a4' },
  ];

  const [value, setValue] = React.useState(0);
  const [data, setData] = React.useState(result[value]);
  const [tabs, setTabs] = React.useState(tabList)

  const handleChange = async(event, newValue) => {
    const res = await Test();
    console.log(res)
    setValue(newValue);
    setData(result[newValue]);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabs.map((i, key) => <Tab key={key} label={i.name}/>)}
          {/* <Tab label="Item One" />
          <Tab label="Item Two"/>
          <Tab label="Item Three"/>
          <Tab label="Item Four"/>
          <Tab label="Item Five"/>
          <Tab label="Item Six"/>
          <Tab label="Item Seven"/> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={value}>
        {data.map(i => <div>{i.name}</div>)}
      </TabPanel>
    </div>
  );
}
