import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
import * as R from 'ramda';
import Search from '../Search/index';
import Pagination from '../Pagination/index';
import theme from '../../cores/theme/index';

const ListingTable = ({title, data, setData, handleEdit, handleDelete}) => {
  const [themeSelected, setThemeSelected] = useState('lightTheme');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    setPosts(data);
    setLoading(false);
  }, [data]);

  // console.log('posts;', posts);

  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const getDisplayTitle = title => {
    const widthArr = [];
    const _title = title.map(title => {
      widthArr.push(title.width);
      return title.display;
    });
    return {
      display: _title,
      widthArr: widthArr,
    };
  };
  const getDisplayData = (title, data) => {
    const _data = data.map((item, index) => {
      const dataRow = [];
      let selectedValue = {
        key: item.key,
        data: item,
      };
      // console.log('selectedValue;', selectedValue);
      for (let index in title) {
        if (title[index].value !== 'action') {
          dataRow.push(item[`${title[index].value}`]);
        } else {
          dataRow.push(
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              {!R.isNil(handleEdit) && (
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <Button
                    title="Edit"
                    onPress={() => {
                      handleEdit(selectedValue.key, selectedValue.data);
                    }}
                  />
                </View>
              )}

              {!R.isNil(handleDelete) && (
                <View
                  style={{
                    marginLeft: 10,
                    marginRight: 10,
                  }}>
                  <Button
                    title="Delete"
                    color="red"
                    onPress={() => handleDelete(selectedValue.key)}
                    style={{
                      paddingLeft: '10px',
                    }}
                  />
                </View>
              )}
            </View>,
          );
        }
      }

      return dataRow;
    });
    return _data;
  };
  const _title = getDisplayTitle(title);
  const _data = getDisplayData(title, currentPosts);

  // const element = (data, index) => (
  //   <TouchableOpacity onPress={() => this._alertIndex(index)}>
  //     <View style={styles.btn}>
  //       <Text style={styles.btnText}>button</Text>
  //     </View>
  //   </TouchableOpacity>
  // );

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };

  return (
    <View
      //   style={styles.container}
      style={theme[`${themeSelected}`].container}>
      <View>
        <Search data={data} setData={setPosts} title={title} />
      </View>

      <View>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row
                data={_title.display}
                widthArr={_title.widthArr}
                //   style={styles.head}
                //   textStyle={styles.text}
                style={theme[`${themeSelected}`].tableHead}
                textStyle={theme[`${themeSelected}`].tableText}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {_data.map((dataRow, index) => {
                  // console.log(index, ': ', dataRow);
                  return (
                    <Row
                      key={index}
                      data={dataRow}
                      widthArr={_title.widthArr}
                      style={[
                        styles.row,
                        //   index % 2 === 0 && {backgroundColor: '#ffffff'},
                        index % 2 === 0 &&
                          theme[`${themeSelected}`].tableEvenColumn,
                      ]}
                      // textStyle={styles.text}
                      textStyle={theme[`${themeSelected}`].tableText}
                    />
                  );
                })}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      <View>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  head: {height: 40, backgroundColor: '#f1f8ff'},
  dataWrapper: {marginTop: -1},
  text: {margin: 6, textAlign: 'center'},
  row: {height: 40, backgroundColor: '#E7E6E1'},
});

export default ListingTable;
