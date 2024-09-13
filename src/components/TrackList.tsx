import React from 'react';
import { FlatList, FlatListProps, Text, View } from 'react-native';
import library from '@/assets/data/library.json'
import TrackListItem from './TrackListItem';
import { utilsStyles } from '@/styles';
import TrackPlayer, { Track } from 'react-native-track-player';
import FastImage from 'react-native-fast-image';
import { unknownTrackImageURI } from '@/constants/images';

export type TracksListProps = Partial<FlatListProps<Track>> & {
    tracks: Track[]
}

const itemDivider = () => {
    return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
}

const TrackList = ({ tracks, ...flatlistProps }: TracksListProps) => {
    const handleTrackSelect = async (track: Track) => {
        await TrackPlayer.load(track)
        await TrackPlayer.play()
    }

    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
            ItemSeparatorComponent={itemDivider}
            ListFooterComponent={itemDivider}
            ListEmptyComponent={
                <View>
                    <Text style={utilsStyles.emptyContentText} >No songs found...</Text>

                    <FastImage
                        source={{ uri: unknownTrackImageURI, priority: FastImage.priority.normal }}
                        style={utilsStyles.emptyContentImage}
                    />
                </View>
            }
            renderItem={
                ({ item }) => (
                    <TrackListItem track={item} onTrackSelect={handleTrackSelect} />
                )}
            {...flatlistProps}
        />
    );
}

export default TrackList;
