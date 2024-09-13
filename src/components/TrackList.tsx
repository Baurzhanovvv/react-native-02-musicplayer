import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import library from '@/assets/data/library.json'
import TrackListItem from './TrackListItem';
import { utilsStyles } from '@/styles';
import TrackPlayer, { Track } from 'react-native-track-player';

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
            renderItem={
                ({ item }) => (
                    <TrackListItem track={item} onTrackSelect={handleTrackSelect} />
                )}
            {...flatlistProps}
        />
    );
}

export default TrackList;
