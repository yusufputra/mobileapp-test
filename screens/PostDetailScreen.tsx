/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconBack from '../assets/back.png';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useFeedContent} from './module/feedContent';
import {RootStackParamList} from '../App';
import {CommentItem} from './component/CommentItem';

type PostDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'post-detail'
>;

function PostDetailScreen({route}: PostDetailScreenProps) {
  const navigation = useNavigation();
  const [comment, setComment] = useState('')
  const {feedContent, setDownVote, setUpvote, addComment} = useFeedContent();
  const {id} = route.params;
  return (
    <SafeAreaView>
      <ScrollView style={{marginBottom: 48}}>
        <View>
          <View
            style={{
              height: 64,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Pressable onPress={() => navigation.goBack()}>
              <Image
                source={IconBack}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
            </Pressable>
            <Image
              source={{
                uri: feedContent[id].picProfileUri,
              }}
              width={48}
              height={48}
              style={{borderRadius: 24, marginLeft: 24}}
            />
            <View style={{marginLeft: 16}}>
              <Text
                style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                {feedContent[id].name}
              </Text>
              <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                {feedContent[id].datePost}
              </Text>
            </View>
          </View>
          <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
          <View>
            <Text style={{margin: 24}}>{feedContent[id].contentText}</Text>
            <Image
              source={{
                uri: 'https://picsum.photos/200',
              }}
              height={200}
            />
          </View>
          <View
            style={{
              height: 52,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <Image
                source={IconShare}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
              <Image
                source={IconComment}
                height={18}
                width={18}
                style={{marginLeft: 24}}
              />
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 4,
                  textAlign: 'center',
                }}>
                {feedContent[id].comments.length || 0}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={IconBlock}
                height={18}
                width={18}
                style={{marginLeft: 22}}
              />
              <Pressable onPress={() => setDownVote(feedContent[id].id)}>
                <Image
                  source={IconDownvoteInactive}
                  height={18}
                  width={18}
                  style={{marginLeft: 24}}
                />
              </Pressable>
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 11,
                  textAlign: 'center',
                }}>
                {feedContent[id].totalDownVote}
              </Text>
              <Pressable onPress={() => setUpvote(feedContent[id].id)}>
                <Image
                  source={IconUpvoteInactive}
                  height={18}
                  width={18}
                  style={{marginRight: 22}}
                />
              </Pressable>
              <Text
                style={{
                  width: 24,
                  marginHorizontal: 11,
                  textAlign: 'center',
                }}>
                {feedContent[id].totalUpVote}
              </Text>
            </View>
          </View>
        </View>
        <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
        {feedContent[id]?.comments?.map(comment => (
          <CommentItem key={comment.id} {...comment} />
        ))}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 24,
          zIndex: 10,
        }}>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <TextInput
          placeholder="Enter Comment"
          style={{flex: 1}}
          onChange={e => setComment(e.nativeEvent.text)}
          value={comment}
        />
        <Button
          title="Comment"
          onPress={() => {
            addComment(id, 'Commentator', comment);
            setComment('');
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
