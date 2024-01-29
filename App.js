import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';
import {DATA} from "./data";
import Row from "./components/row";
import Search from './components/Search';
import { useEffect, useState } from 'react';

export default function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(DATA)
  }, [])

  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
    setItems(searchArray);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#61dafb"
        height="16"
      />
      <Search executeSearch={executeSearch} />
      <FlatList
        data={items}
        renderItem = {({item}) => (
          <Row person={item} />
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
/*
function renderItem({item}) {
  return (<Text>{item.lastname}</Text>)
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
