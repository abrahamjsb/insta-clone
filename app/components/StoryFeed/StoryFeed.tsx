import React from 'react';
import {View, Text, ListRenderItem} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import StoryAvatar from './StoryAvatar';
import {StoryFeedData} from '../../types/index';
import {shortenUsername} from '../../utils/utils';

const data: StoryFeedData[] = [
  {
    _id: 'asdsakjhr876823kbsjdf',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/10/05/10/51/cat-5628953_1280.jpg',
    username: 'kitty69',
    hasUserWatch: false,
  },
  {
    _id: '323874jdwyhdgdfgdfgdfg564654564yvcw36476+',
    imageUrl:
      'https://cdn.pixabay.com/photo/2014/11/29/19/33/bald-eagle-550804__340.jpg',
    username: 'eagle_dream',
    hasUserWatch: false,
  },
  {
    _id: '323874jdwyhdgyvfdgfdgfdg34334534543cw36476+',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427__340.jpg',
    username: 'blondekittycat',
    hasUserWatch: false,
  },
  {
    _id: '323874jdwyhd465464645789987vdhggyvcw36476+',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/09/25/12/25/cat-5601209_1280.jpg',
    username: 'babycat11',
    hasUserWatch: false,
  },
  {
    _id: '323874jdwfvgdfgfdgfd4yhdgyvcw36476+',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/10/02/22/03/cat-5622217__340.jpg',
    username: 'bad_cat',
    hasUserWatch: false,
  },
  {
    _id: '323874jdwyhd6786867867867gyvcw36476+',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/10/26/05/14/cat-5686314__340.jpg',
    username: 'sleepycat',
    hasUserWatch: false,
  },
  {
    _id: '323874jdwyhdgy3242423423vcw36476+',
    imageUrl:
      'https://media.istockphoto.com/photos/grey-and-white-cat-5-months-old-sitting-picture-id510236436?b=1&k=6&m=510236436&s=170667a&w=0&h=uG-NX_fSXyFfVDQxRKqAc_-3PZAxBEy-0uMd3g3Mq1I=',
    username: 'smellycat69',
    hasUserWatch: true,
  },
  {
    _id: '323874jdwyhdgsfddsfsdfsyvcw36476+',
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/10/09/19/50/cat-5641364__340.jpg',
    username: 'mrsamsmith',
    hasUserWatch: true,
  },
];

const StoryAvatarFeed = (props: StoryFeedData) => (
  <View style={{width: 90, height: 100, alignItems: 'center'}}>
    <StoryAvatar profile={{...props}} size="large" />
    <Text style={{textAlign: 'center', fontSize: 11, marginTop: 5}}>
      {shortenUsername(props.username)}
    </Text>
  </View>
);

const OwnAvatarFeed = (props: StoryFeedData) => (
  <View>
    <StoryAvatar profile={{...props}} size="large" />
    <Text>Your story</Text>
  </View>
);

const StoryFeed = () => {
  return (
    <View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({item}) => <StoryAvatarFeed {...item} />}
        keyExtractor={(user) => user._id}
      />
    </View>
  );
};

export default StoryFeed;
