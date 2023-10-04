import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {FeedItem} from './component/FeedItem';
import {useFeedContent} from './module/feedContent';

function FeedScreen() {
  const navigation = useNavigation();
  const {feedContent} = useFeedContent();

  return (
    <SafeAreaView>
      <ScrollView>
        {feedContent.map(content => {
          if (content !== undefined) {
            return (
              <FeedItem
                key={content.id}
                content={content}
                onPress={() =>
                  navigation.navigate('post-detail', {id: content.id})
                }
              />
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
