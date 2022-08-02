import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Header} from '@rneui/base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../../config/colors';
import {Avatar} from '@rneui/themed';
import {FAB} from '@rneui/themed';

export default function HomeView(props) {
  const {submitLogout} = props;

  const apiData = [
    {
      avatarImage:
        'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
      name: 'Hank Greeen',
      username: '@hankgreen',
      uploadTime: '3h',
      likes: '323',
      retweet: '20',
      comments: '18',
      views: '14k',
      description:
        'Twitter Spaces are real live audio convos you can join from your couch. or the dog park. or the bathtub. wherever you are, really.',
    },
    {
      avatarImage: 'https://randomuser.me/api/portraits/men/36.jpg',
      name: 'Hank Greeen',
      username: '@hankgreen',
      uploadTime: '3h',
      likes: '323',
      retweet: '20',
      comments: '18',
      views: '14k',
      description: 'Twitter Spaces are real',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKf9TjW03Ylu5TKUIOm8R2x8k_ZVqQ1ISJLg&usqp=CAU',
    },
    {
      avatarImage:
        'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg',
      name: 'Hank Greeen',
      username: '@hankgreen',
      uploadTime: '3h',
      likes: '323',
      retweet: '20',
      comments: '18',
      views: '18.5k',
      description:
        'Twitter Spaces are real live audio convos you can join from your couch. or the dog park. or the bathtub. wherever you are, really.',
    },
    {
      avatarImage:
        'https://cdn.pixabay.com/photo/2014/09/17/20/03/profile-449912__340.jpg',
      name: 'Hank Greeen',
      username: '@hankgreen',
      uploadTime: '3h',
      likes: '323',
      retweet: '20',
      comments: '18',
      views: '12k',
      description:
        'Twitter Spaces are real live audio convos you can join from your couch. or the dog park. or the bathtub. wherever you are, really.',
      image: 'https://picsum.photos/id/1084/536/354?grayscale',
    },
    {
      avatarImage:
        'https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916__340.jpg',
      name: 'Hank Greeen',
      username: '@hankgreen',
      uploadTime: '3h',
      likes: '323',
      retweet: '20',
      comments: '18',
      views: '1k',
      description:
        'Twitter Spaces are real live audio convos you can join from your couch. or the dog park. or the bathtub. wherever you are, really.',
      image: 'https://picsum.photos/id/237/536/354',
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        containerStyle={{backgroundColor: '#f9f9f9'}}
        leftComponent={
          <Avatar
            size={30}
            rounded
            icon={{
              name: 'user',
              type: 'font-awesome',
              size: 25,
              color: colors.grey,
            }}
            containerStyle={{backgroundColor: colors.lightGrey}}
          />
        }
        centerComponent={
          <AntDesign name="twitter" color={colors.blue} size={30} />
        }
        rightComponent={
          <MaterialCommunity
            onPress={() => submitLogout()}
            name="star-cog-outline"
            color={colors.black}
            size={30}
          />
        }
      />
      <View style={{flex: 1, paddingHorizontal: '3%', paddingTop: '3%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {apiData.map((data, index) => (
            <View key={index} style={{flexDirection: 'row'}}>
              <View style={{width: '15%', alignItems: 'center'}}>
                <Avatar size={50} rounded source={{uri: data.avatarImage}} />
              </View>
              <View style={{width: '85%', padding: 5}}>
                <View style={{flexDirection: 'row', marginBottom: 5}}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors.black,
                      fontWeight: 'bold',
                    }}>
                    {data.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors.grey,
                      marginHorizontal: 5,
                    }}>
                    {data.username}.
                  </Text>
                  <Text style={{fontSize: 16, color: colors.grey}}>
                    {data.uploadTime}
                  </Text>
                </View>
                <Text style={{fontSize: 15, color: colors.black}}>
                  {data.description}
                </Text>
                {data.image && (
                  <Image
                    style={{
                      width: '100%',
                      height: 250,
                      borderRadius: 20,
                      marginVertical: 10,
                    }}
                    source={{uri: data.image}}
                  />
                )}
                <Text style={{marginVertical: 5}}>{data.views} Views</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90%',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <EvilIcons name="comment" color={colors.grey} size={25} />
                    <Text>{data.comments}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <MaterialCommunity
                      name="repeat"
                      color={colors.grey}
                      size={20}
                    />
                    <Text>{data.retweet}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <EvilIcons name="heart" color={colors.grey} size={25} />
                    <Text>{data.likes}</Text>
                  </View>
                  <EvilIcons name="share-apple" color={colors.grey} size={25} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
        <FAB
          style={styles.floatinBtn}
          visible={true}
          icon={{name: 'add', color: 'white'}}
          color={colors.blue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  floatinBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
