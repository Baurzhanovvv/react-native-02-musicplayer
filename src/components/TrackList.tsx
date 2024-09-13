import React from 'react';
import { FlatList, FlatListProps, View } from 'react-native';
import library from '@/assets/data/library.json'
import TrackListItem from './TrackListItem';
import { utilsStyles } from '@/styles';

export type TracksListProps = Partial<FlatListProps<unknown>> & {
    tracks: any[]
}

const itemDivider = () => {
    return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
}

const TrackList = ({ tracks, ...flatlistProps }: TracksListProps) => {
    
    return (
        <FlatList
            data={tracks}
            contentContainerStyle={{paddingTop: 10, paddingBottom: 128}}
            ItemSeparatorComponent={itemDivider}
            ListFooterComponent={itemDivider}
            renderItem={
                ({ item }) => (
                    <TrackListItem track={{
                        ...item,
                        image: item.artwork
                    }} />
                )
            }
            {...flatlistProps}
        />
    );
}

export default TrackList;
