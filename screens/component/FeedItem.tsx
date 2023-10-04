/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import IconBlock from '../../assets/block.png';
import IconComment from '../../assets/comment.png';
import IconDownvoteInactive from '../../assets/downvote_inactive.png';
import IconShare from '../../assets/share.png';
import IconUpvoteInactive from '../../assets/upvote_inactive.png';
import {ContentType, useFeedContent} from '../module/feedContent';

type feedItemProps = {
  content: ContentType;
  onPress: () => void;
};

const FeedItem = (props: feedItemProps) => {
  const {content} = props;
  const [hasMore, setHasMore] = useState(false);
  const {setDownVote, setUpvote} = useFeedContent();

  return (
    <Pressable onPress={() => props.onPress()}>
      <View>
        <View
          style={{
            height: 64,
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={{
              uri: content.picProfileUri,
            }}
            width={48}
            height={48}
            style={{borderRadius: 24, marginLeft: 24}}
          />
          <View style={{marginLeft: 16}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 14,
                lineHeight: 16.94,
              }}>
              {content.name}
            </Text>
            <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
              {content.datePost}
            </Text>
          </View>
        </View>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <View>
          <Text
            style={{margin: 24}}
            onTextLayout={e => {
              if (e.nativeEvent.lines.length > 3) {
                setHasMore(true);
              }
            }}
            numberOfLines={hasMore ? 3 : undefined}>
            {content.contentText}
          </Text>
          {hasMore && (
            <Text style={{marginHorizontal: 24, color: 'blue'}}>More</Text>
          )}
          <Image
            source={{
              uri: content.picContentUri,
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
              {content.comments.length || 0}
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
            <Pressable
              onPress={() => {
                setDownVote(content.id);
              }}>
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
              {content.totalDownVote}
            </Text>
            <Pressable onPress={() => setUpvote(content.id)}>
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
              {content.totalUpVote}
            </Text>
          </View>
        </View>
      </View>
      <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
    </Pressable>
  );
};

export {FeedItem};
