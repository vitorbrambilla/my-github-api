import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled( Tabs )`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled( TabList )`
  list-style-type: none;
  padding: 4px;
  display: block;
  margin: auto;
  width: 50%;
`;
WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled( Tab )`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 8px;
  text-align: center;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
  }
`;
WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled( TabPanel )`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = 'TabPanel';


export const WrapperList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;